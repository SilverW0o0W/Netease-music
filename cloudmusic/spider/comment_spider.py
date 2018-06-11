# coding=utf-8
"""
Aim:
Initialize a CommentSpider instance, add call function with a song id. Return SongComment
"""

from gevent import monkey, pool as g_pool

import traceback
import time

from . import adapter as adapter
from .encrypto import generate_data
from .logger.logger import Logger
from . import api
from .comment_writer import CommentWriter

from .proxy.controller import Controller

monkey.patch_socket()


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
    _pool_size = 20

    def __init__(self, use_proxy=False, con_string=None):
        self.logger = Logger(name='comment.log')
        self.use_proxy = use_proxy
        self.proxy_logger = Logger(name='proxy.log') if use_proxy else None
        self.proxy = Controller(self.proxy_logger, False) if use_proxy else None
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
            content = api.send_request('POST', url, data=data, proxies=proxies)
        time.sleep(0.5)
        if hot:
            return adapter.adapt_hot_comment_set(content, song_id)
        else:
            return adapter.adapt_comment_set(content, song_id)

    def get_comment(self, song_id, hot=False):
        """
        Get a song all comment
        """
        total = self.request_comment_set(song_id, self.data(), hot=hot).total
        self.logger.info('Comment total is {0}. Song id: {1}.', total, song_id)
        data_gen = self.post_data(total, limit=self._limit)
        comment_dict = {}
        times = 0 if total % self._limit == 0 else 1
        times += total // self._limit
        pool = g_pool.Pool(size=self._pool_size)
        for _ in range(times):
            pool.spawn(self.get_wrapper, song_id, data_gen, hot, comment_dict)
        pool.join()
        self.logger.info('Get comment done. Song id: {0}, dict length: {1}.', song_id, len(comment_dict))
        return comment_dict

    def get_wrapper(self, song_id, data_generator, hot, comment_dict):
        """
        This is multi-threading request.
        """
        index, data = next(data_generator)
        comment = self.request_comment_set(song_id, data, hot=hot)
        comment_dict[index] = comment
        self.logger.debug('Get comment {} done.', index)

    @check_writer
    def write_comment(self, song_id, hot=False):
        """
        Write a song all comment
        """
        total = self.request_comment_set(song_id, self.data(), hot=hot).total
        self.logger.info('Comment total is {0}. Song id: {1}.', total, song_id)
        data_gen = self.post_data(total, limit=self._limit)
        times = 0 if total % self._limit == 0 else 1
        times += total // self._limit

        pool = g_pool.Pool(size=self._pool_size)
        for _ in range(times):
            pool.spawn(self.write_wrapper, song_id, data_gen, hot)
        pool.join()
        self.logger.info('Write comment done. Song id: {}', song_id)

    def write_wrapper(self, song_id, data_generator, hot):
        """
        This is multi-threading request.
        """
        index, data = next(data_generator)
        comment = self.request_comment_set(song_id, data, hot=hot)
        self.writer.send(comment.comments)
        self.logger.debug('Write comment {} done.', index)

    def dispose(self):
        self.logger.info('Dispose spider.')
        self.logger.debug('Dispose writer.')
        if self.writer:
            self.writer.dispose()
        self.logger.debug('Dispose proxy.')
        if self.use_proxy:
            self.proxy.dispose()
            self.proxy_logger.dispose()
        self.logger.info('Dispose spider done.')
        self.logger.dispose()
