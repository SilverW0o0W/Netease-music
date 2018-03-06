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
from music import SongComment, SongHotComment
from proxy_ip import ProxyIPSet
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

    __headers = {
        'Host': 'music.163.com',
        'Proxy-Connection': 'keep-alive',
        'Origin': 'http://music.163.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8'
    }

    _DATA_MAX_LOOP = 10
    _DATA_MAX_CACHE = 10
    _data_loop = _DATA_MAX_LOOP
    _data_current = 0
    _data_list = []

    _request_thread_limit = 50

    Lock = threading.Lock()

    def __init__(self, use_proxy=False):
        self.logger = LoggingController(name='comment.log')
        self.spider = MusicSpider()
        self.use_proxy = use_proxy
        if use_proxy:
            self.controller_proxy = ProxyController(https=False)
            self.ip_set = ProxyIPSet()

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

    def get_request_data(self, once=True):
        """
        Get request encrypt data for total comment
        """
        if once:
            return generate_data(self.text())
        else:
            if self._data_current >= self._DATA_MAX_CACHE:
                self._data_current = 0
                self._data_loop += 1
            if self._data_loop >= self._DATA_MAX_LOOP:
                self._data_list[:] = []
                for i in range(self._DATA_MAX_CACHE):
                    self._data_list.append(generate_data(self.text()))
                self._data_loop = 0
                self._data_current = 0
            data = self._data_list[self._data_current]
            self._data_current += 1
            return data

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

    def get_proxy(self, is_main_thread=True):
        """
        Get a proxy ip from collection
        """
        if not self.use_proxy:
            return None
        first = True
        self.Lock.acquire()
        try:
            while not self.ip_set.available():
                if not first:
                    time.sleep(5)
                self.ip_set = self.controller_proxy.get_proxy(
                    is_main_thread=is_main_thread)
                first = False
            proxy_ip = self.ip_set.pop()
        finally:
            self.Lock.release()
        return proxy_ip

    def request_comment(self, song_id, request_data=None, retry=False, hot_comment=False, is_main_thread=True):
        """
        Send request and analysis response
        """
        request_data = self.get_request_data() if request_data is None else request_data
        url = self._hot_comment_url if hot_comment else self._comment_url
        url = str.format(url, song_id)
        content = None
        while content is None:
            proxy_ip = self.get_proxy(is_main_thread) if self.use_proxy else None
            proxies = None
            if proxy_ip is not None:
                proxies = {'http': proxy_ip.ip + ':' + proxy_ip.port}
            content = self.spider.send_request(url, data=request_data, proxies=proxies)
            if not retry:
                break
        if content is None:
            return None
        time.sleep(1)
        if hot_comment:
            return adapter.get_hot_comment(content, song_id)
        else:
            return adapter.get_comment(content, song_id)

    def get_song_comment(self, song_id, retry=False):
        """
        Get a song all comment
        """
        total_comment = self.request_comment(song_id, retry=True)
        total = total_comment.total
        data_dict = self.get_data_dict(total)
        comment_list = []
        for index in data_dict:
            temp_comment = self.request_comment(
                song_id, request_data=data_dict[index], retry=retry)
            comment_list.append(temp_comment)
        return comment_list

    def get_comment_multithread(self, song_id, retry=False):
        """
        Get a song all comment
        """
        total_comment = self.request_comment(song_id, retry=True)
        total = total_comment.total
        data_dict = self.get_data_dict(total)
        comment_dict = {}
        param_list = []
        for index in data_dict:
            param = ((song_id, data_dict[index],
                      retry, index, comment_dict,), None)
            param_list.append(param)
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
        comment = self.request_comment(
            song_id, request_data=data, retry=retry, is_main_thread=False)
        comment_dict[index] = comment

    def write_comment(self, song_id, retry=False):
        """
        Write a song all comment
        """
        writer = CommentWriter(self.logger)
        total_comment = self.request_comment(song_id, retry=True)
        total = total_comment.total
        self.logger.info('Comment total is {0}. Song id: {1}.', total, song_id)
        data_dict = self.get_data_dict(total)
        self.logger.info('Comment data length: {0}.', len(data_dict))
        for index in data_dict:
            self.logger.debug("Request comment start. Index: {0}.", index)
            temp_comment = self.request_comment(
                song_id, request_data=data_dict[index], retry=retry)
            self.logger.debug("Request comment success. Index: {0}.", index)
            details = SongComment.convert_details(temp_comment)
            self.logger.debug('Send comment start. Index: {0}.', index)
            for detail in details:
                writer.send_message(detail)
            self.logger.debug("Send comment done. Index: {0}.", index)
        writer.dispose()

    def write_comment_multithread(self, song_id, retry=False):
        """
        Get a song all comment
        """
        writer = CommentWriter(self.logger)
        total_comment = self.request_comment(song_id, retry=True)
        total = total_comment.total
        self.logger.info('Comment total is {0}. Song id: {1}.', total, song_id)
        data_dict = self.get_data_dict(total)
        self.logger.info('Comment data length: {0}.', len(data_dict))
        param_list = []
        for index in data_dict:
            param = ((writer, song_id, data_dict[index],
                      retry, index,), None)
            param_list.append(param)
        pool_requests = threadpool.makeRequests(
            self.write_comment_thread, param_list)
        pool = threadpool.ThreadPool(self._request_thread_limit)
        [pool.putRequest(request) for request in pool_requests]
        pool.wait()
        writer.dispose()
        self.logger.dispose()

    def write_comment_thread(self, writer, song_id, data, retry, index):
        """
        This is multi-threading request.
        """
        self.logger.debug("Request comment start. Index: {0}.", index)
        comment = self.request_comment(
            song_id, request_data=data, retry=retry, is_main_thread=False)
        self.logger.debug("Request comment success. Index: {0}.", index)
        details = SongComment.convert_details(comment)
        self.logger.debug('Send comment start. Index: {0}.', index)
        for detail in details:
            writer.send_message(detail)
        self.logger.debug("Send comment done. Index: {0}.", index)

    def get_hot_comment(self, song_id, retry=False):
        """
        Get a song all hot comment.
        """
        total_comment = self.request_comment(song_id, hot_comment=True, retry=True)
        total = total_comment.total
        data_dict = self.get_data_dict(total)
        comment_list = []
        for index in data_dict:
            temp_comment = self.request_comment(
                song_id, request_data=data_dict[index], hot_comment=True, retry=retry)
            comment_list.append(temp_comment)
        return comment_list[::-1]

    def close(self):
        if self.use_proxy:
            self.controller_proxy.dispose()
        self.logger.dispose()
