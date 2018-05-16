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
from proxy.proxy_controller import ProxyController


def check_writer(func):
    def wrapper(self, *args, **kw):
        if not self.writer:
            raise NameError('CommentWriter not initialize.')
        return func(self, *args, **kw)

    return wrapper


class CommentSpider(object):
    """
    Spider part
    """

    Lock = threading.Lock()

    _comment_url = "http://music.163.com/weapi/v1/resource/comments/R_SO_4_{0}/?csrf_token="
    _hot_comment_url = "http://music.163.com/weapi/v1/resource/hotcomments/R_SO_4_{0}/?csrf_token="

    _limit = 20
    _request_thread_limit = 20

    def __init__(self, use_proxy=False, con_string=None):
        self.logger = LoggingController(name='comment.log')
        self.spider = MusicSpider()
        self.use_proxy = use_proxy
        self.proxy = ProxyController(https=False) if use_proxy else None
        self.writer = CommentWriter(self.logger, con_string) if con_string else None

    @staticmethod
    def text(offset=0, limit=20):
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

    def post_data(self, total=None, limit=20):
        """
        Get request encrypt data for one song
        """
        if not total:
            generate_data(self.text())
        else:
            page = total // limit + 0 if total % limit == 0 else 1
            for i in range(page):
                yield i, generate_data(self.text(i * limit, limit))

    def request_comment_set(self, song_id, data=None, retry=False, hot=False):
        """
        Send request and analysis response
        """
        data = self.post_data() if not data else data
        url = self._hot_comment_url if hot else self._comment_url
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
        if hot:
            return adapter.adapt_hot_comment_set(content, song_id)
        else:
            return adapter.adapt_comment_set(content, song_id)

    def get_comment(self, song_id, retry=False):
        """
        Get a song all comment
        """
        total_comment_set = self.request_comment_set(song_id, retry=True)
        total = total_comment_set.total
        self.logger.info('Comment total is {0}. Song id: {1}.', total, song_id)
        data_gen = self.post_data(total=total, limit=self._limit)
        return [
            self.request_comment_set(song_id, data=data, retry=retry)
            for _, data in data_gen
        ]

    def get_comment_multithread(self, song_id, retry=False):
        """
        Get a song all comment
        """
        total_comment_set = self.request_comment_set(song_id, retry=True)
        total = total_comment_set.total
        times = total // self._limit + 0 if total % self._limit == 0 else 1
        data_gen = self.post_data(total)
        comment_dict = {}
        param_list = [
            ((song_id, data_gen, retry, comment_dict,), None)
            for _ in times
        ]
        pool_requests = threadpool.makeRequests(
            self.request_comment_thread, param_list)
        pool = threadpool.ThreadPool(self._request_thread_limit)
        [pool.putRequest(request) for request in pool_requests]
        pool.wait()
        return comment_dict

    def request_comment_thread(self, song_id, data_generator, retry, comment_dict):
        """
        This is multi-threading request.
        """
        try:
            index, data = next(data_generator)
        except StopIteration as stop_ex:
            self.logger.warning('Generator has stopped. Reason: {0}', stop_ex.message)
            return
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
        data_gen = self.post_data(total=total, limit=self._limit)
        for index, data in data_gen:
            self.logger.debug("Request comment start. Index: {0}.", index)
            comment_set = self.request_comment_set(song_id, data=data, retry=retry)
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
        times = total // self._limit + 0 if total % self._limit == 0 else 1
        data_gen = self.post_data(total)
        param_list = [
            ((song_id, data_gen, retry,), None)
            for _ in times
        ]
        pool_requests = threadpool.makeRequests(
            self.write_comment_thread, param_list)
        pool = threadpool.ThreadPool(self._request_thread_limit)
        [pool.putRequest(request) for request in pool_requests]
        pool.wait()
        self.logger.info('Write comment done. Song id: {}', song_id)

    def write_comment_thread(self, song_id, data_generator, retry):
        """
        This is multi-threading request.
        """
        try:
            index, data = next(data_generator)
        except StopIteration as stop_ex:
            self.logger.warning('Generator has stopped. Reason: {0}', stop_ex.message)
            return
        self.logger.debug("Request comment start. Index: {0}.", index)
        comment = self.request_comment_set(song_id, data=data, retry=retry)
        self.logger.debug('Send comment start. Index: {0}.', index)
        self.writer.send_message(comment.comments)
        self.logger.debug("Send comment done. Index: {0}.", index)

    def dispose(self):
        if self.use_proxy:
            self.proxy.dispose()
        if not self.writer:
            self.writer.dispose()
        self.logger.dispose()
