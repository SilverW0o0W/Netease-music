# coding=utf-8
"""
Aim:
Initialize a CommentSpider instance, add call function with a song id. Return SongComment
"""

from __future__ import absolute_import
import traceback
import time
import threading
import threadpool

from . import music_adapter as adapter
from .encrypto import generate_data
from .logger.logger import Logger
from .music_spider import MusicSpider
from .comment_writer import CommentWriter
from .proxy.proxy_controller import ProxyController

Lock = threading.Lock()


def check_writer(func):
    def wrapper(self, *args, **kwargs):
        if not self.writer:
            raise ValueError('CommentWriter not initialize.')
        return func(self, *args, **kwargs)

    return wrapper


class CommentSpider(object):
    """
    Spider part
    """
    _comment_url = "http://music.163.com/weapi/v1/resource/comments/R_SO_4_{0}/?csrf_token="
    _hot_comment_url = "http://music.163.com/weapi/v1/resource/hotcomments/R_SO_4_{0}/?csrf_token="

    _limit = 20
    _request_thread_limit = 30

    def __init__(self, use_proxy=False, con_string=None):
        self.logger = Logger(name='comment.log')
        self.spider = MusicSpider()
        self.use_proxy = use_proxy
        proxy_logger = Logger(name='proxy.log')
        self.proxy = ProxyController(proxy_logger, False) if use_proxy else None
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

    def data(self):
        return generate_data(self.text())

    def post_data(self, total, limit=20):
        """
        Get request encrypt data for one song
        """
        page = 0 if total % limit == 0 else 1
        page += total // limit
        for i in range(page):
            yield i, generate_data(self.text(i * limit, limit))

    def request_comment_set(self, song_id, data, hot=False):
        """
        Send request and analysis response
        """
        url = self._hot_comment_url if hot else self._comment_url
        url = str.format(url, song_id)
        content = None
        count = 0
        while content is None:
            count += 1
            proxies = None
            if self.use_proxy:
                proxy = self.proxy.get_proxy()
                proxies = {'http': proxy.ip + ':' + proxy.port}
            content = self.spider.send_request('POST', url, data=data, proxies=proxies)
        time.sleep(0.5)
        if hot:
            return adapter.adapt_hot_comment_set(content, song_id)
        else:
            return adapter.adapt_comment_set(content, song_id)

    def request_comment_set_thread(self, song_id, data_generator, hot=False):
        with Lock:
            try:
                index, data = next(data_generator)
            except StopIteration:
                self.logger.warning('Generator has stopped. Reason: {0}', traceback.format_exc())
                return
        return self.request_comment_set(song_id, data, hot=hot), index

    def get_comment(self, song_id, hot=False, multi_thread=False):
        """
        Get a song all comment
        """
        total = self.request_comment_set(song_id, self.data(), hot=hot).total
        self.logger.info('Comment total is {0}. Song id: {1}.', total, song_id)
        data_gen = self.post_data(total, limit=self._limit)
        comment_dict = {}
        if multi_thread:
            times = 0 if total % self._limit == 0 else 1
            times += total // self._limit
            param_list = [
                ((song_id, data_gen, hot, comment_dict,), None)
                for _ in range(times)
            ]
            pool_requests = threadpool.makeRequests(
                self.get_comment_thread, param_list)
            pool = threadpool.ThreadPool(self._request_thread_limit)
            [pool.putRequest(request) for request in pool_requests]
            pool.wait()
        else:
            for index, data in data_gen:
                comment_dict[index] = self.request_comment_set(song_id, data, hot=hot)
        self.logger.info('Get comment done. Song id: {0}, dict length: {1}.', song_id, len(comment_dict))
        return comment_dict

    def get_comment_thread(self, song_id, data_generator, hot, comment_dict):
        """
        This is multi-threading request.
        """
        results = self.request_comment_set_thread(song_id, data_generator, hot=hot)
        if results:
            comment_dict[results[1]] = results[0]
            self.logger.debug('Get comment {} done.', results[1])

    @check_writer
    def write_comment(self, song_id, hot=False, multi_thread=False):
        """
        Write a song all comment
        """
        total = self.request_comment_set(song_id, self.data(), hot=hot).total
        self.logger.info('Comment total is {0}. Song id: {1}.', total, song_id)
        data_gen = self.post_data(total, limit=self._limit)
        if multi_thread:
            times = 0 if total % self._limit == 0 else 1
            times += total // self._limit
            param_list = [
                ((song_id, data_gen, hot,), None)
                for _ in range(times)
            ]
            pool_requests = threadpool.makeRequests(
                self.write_comment_thread, param_list)
            pool = threadpool.ThreadPool(self._request_thread_limit)
            [pool.putRequest(request) for request in pool_requests]
            pool.wait()
        else:
            for index, data in data_gen:
                self.logger.debug("Request comment start. Index: {0}.", index)
                comment_set = self.request_comment_set(song_id, data, hot=hot)
                self.logger.debug("Request comment success. Index: {0}.", index)
                self.writer.send_message(comment_set.comments)
                self.logger.debug("Send comment done. Index: {0}.", index)
        self.logger.info('Write comment done. Song id: {}', song_id)

    def write_comment_thread(self, song_id, data_generator, hot):
        """
        This is multi-threading request.
        """
        results = self.request_comment_set_thread(song_id, data_generator, hot=hot)
        if results:
            comment, index = results
            self.writer.send_message(comment.comments)
            self.logger.debug('Write comment {} done.', index)

    def dispose(self):
        self.logger.info('Dispose spider.')
        self.logger.debug('Dispose writer.')
        if self.writer:
            self.writer.dispose()
        self.logger.debug('Dispose proxy.')
        if self.use_proxy:
            self.proxy.dispose()
        self.logger.info('Dispose spider done.')
        self.logger.dispose()
