# coding=utf-8
"""
Aim:
Initialize a CommentSpider instance, add call function with a song id. Return SongComment
"""

import time

import threading
import threadpool

import music_adapter as adapter
from encrypto import generate_data
from logging_controller import LoggingController
from music_spider import MusicSpider
from comment_writer import CommentWriter
from proxy_controller import ProxyController


class CommentSpider(object):
    """
    Spider part
    """

    _comment_url = "http://music.163.com/weapi/v1/resource/comments/R_SO_4_{0}/?csrf_token="
    _hot_comment_url = "http://music.163.com/weapi/v1/resource/hotcomments/R_SO_4_{0}/?csrf_token="

    _DATA_MAX_LOOP = 10
    _DATA_MAX_CACHE = 10
    _data_loop = _DATA_MAX_LOOP
    _data_current = 0
    _data_list = []

    _request_thread_limit = 20

    Lock = threading.Lock()

    def __init__(self, use_proxy=False, con_string=None):
        self.logger = LoggingController(name='comment.log')
        self.spider = MusicSpider()
        self.use_proxy = use_proxy
        self.proxy = ProxyController(https=False) if use_proxy else None
        self.writer = CommentWriter(self.logger, con_string) if con_string else None

    def check_writer(func):
        def wrapper(self, *args, **kw):
            if not self.writer:
                raise NameError('CommentWriter not initialize.')
            return func(self, *args, **kw)

        return wrapper

    def text(self, offset=0, limit=20):
        """
        Generate text
        """
        text = {
            'username': '',
            'password': '',
            'rememberLogin': 'true',
            'offset': offset,
            'total': 'true',
            'limit': limit
        }
        return text

    def get_data(self):
        """
        Get request encrypt data for total comment
        """
        return generate_data(self.text())

    def get_data_dict(self, total, limit=20):
        """
        Get request encrypt data for one song
        """
        data_dict = {}
        page = total / limit
        page = page if total % limit == 0 else page + 1
        for i in range(page):
            data = generate_data(self.text(i * limit, limit))
            data_dict[page - i - 1] = data
        return data_dict

    def request_comment_set(self, song_id, data=None, retry=False, hot_comment=False):
        """
        Send request and analysis response
        """
        data = self.get_data() if data is None else data
        url = self._hot_comment_url if hot_comment else self._comment_url
        url = str.format(url, song_id)
        content = None
        while content is None:
            proxies = None
            if self.use_proxy:
                proxy = self.proxy.get_proxy()
                proxies = {'http': proxy.ip + ':' + proxy.port}
            content = self.spider.send_request('POST', url, data=data, proxies=proxies)
            if not retry:
                break
        if content is None:
            return None
        time.sleep(1)
        if hot_comment:
            return adapter.adapt_hot_comment_set(content, song_id)
        else:
            return adapter.adapt_comment_set(content, song_id)

    def get_song_comment(self, song_id, retry=False):
        """
        Get a song all comment
        """
        total_comment_set = self.request_comment_set(song_id, retry=True)
        total = total_comment_set.total
        data_dict = self.get_data_dict(total)
        return tuple(
            [
                self.request_comment_set(song_id, data=data_dict[index], retry=retry)
                for index in data_dict
            ]
        )

    def get_comment_multithread(self, song_id, retry=False):
        """
        Get a song all comment
        """
        total_comment_set = self.request_comment_set(song_id, retry=True)
        total = total_comment_set.total
        data_dict = self.get_data_dict(total)
        comment_dict = {}
        param_list = [
            ((song_id, data_dict[index], retry, index, comment_dict,), None)
            for index in data_dict
        ]
        pool_requests = threadpool.makeRequests(
            self.request_comment_thread, param_list)
        pool = threadpool.ThreadPool(self._request_thread_limit)
        [pool.putRequest(request) for request in pool_requests]
        pool.wait()
        return comment_dict

    def request_comment_thread(self, song_id, data, retry, index, comment_dict):
        """
        This is multi-threading request.
        """
        comment = self.request_comment_set(song_id, data=data, retry=retry)
        comment_dict[index] = comment

    @check_writer
    def write_comment(self, song_id, retry=False):
        """
        Write a song all comment
        """
        total_comment_set = self.request_comment_set(song_id, retry=True)
        total = total_comment_set.total
        self.logger.info('Comment total is {0}. Song id: {1}.', total, song_id)
        data_dict = self.get_data_dict(total)
        self.logger.info('Comment data length: {0}.', len(data_dict))
        for index in data_dict:
            self.logger.debug("Request comment start. Index: {0}.", index)
            comment_set = self.request_comment_set(
                song_id, data=data_dict[index], retry=retry)
            self.logger.debug("Request comment success. Index: {0}.", index)
            self.writer.send_message(comment_set.comments)
            self.logger.debug("Send comment done. Index: {0}.", index)

    @check_writer
    def write_comment_multithread(self, song_id, retry=False):
        """
        Get a song all comment
        """
        total_comment = self.request_comment_set(song_id, retry=True)
        total = total_comment.total
        self.logger.info('Comment total is {0}. Song id: {1}.', total, song_id)
        data_dict = self.get_data_dict(total)
        self.logger.info('Comment data length: {0}.', len(data_dict))
        param_list = []
        for index in data_dict:
            param = ((song_id, data_dict[index],
                      retry, index,), None)
            param_list.append(param)
        pool_requests = threadpool.makeRequests(
            self.write_comment_thread, param_list)
        pool = threadpool.ThreadPool(self._request_thread_limit)
        [pool.putRequest(request) for request in pool_requests]
        pool.wait()

    def write_comment_thread(self, song_id, data, retry, index):
        """
        This is multi-threading request.
        """
        self.logger.debug("Request comment start. Index: {0}.", index)
        comment = self.request_comment_set(song_id, data=data, retry=retry)
        self.logger.debug('Send comment start. Index: {0}.', index)
        self.writer.send_message(comment.comments)
        self.logger.debug("Send comment done. Index: {0}.", index)

    def get_hot_comment(self, song_id, retry=False):
        """
        Get a song all hot comment.
        """
        total_comment = self.request_comment_set(song_id, hot_comment=True, retry=True)
        total = total_comment.total
        data_dict = self.get_data_dict(total)
        comment_list = []
        for index in data_dict:
            temp_comment = self.request_comment_set(
                song_id, data=data_dict[index], hot_comment=True, retry=retry)
            comment_list.append(temp_comment)
        return comment_list[::-1]

    def dispose(self):
        if self.use_proxy:
            self.proxy.dispose()
        if not self.writer:
            self.writer.dispose()
        self.logger.dispose()
