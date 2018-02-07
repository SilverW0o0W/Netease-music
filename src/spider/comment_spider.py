# coding=utf-8
"""
Aim:
Initialize a CommentSpider instance, add call function with a song id. Return SongComment
"""

import time

import threading
import threadpool
import requests

import music_adapter as adapter
from encrypto import generate_data
from music import SongComment, SongHotComment
from proxy_ip import ProxyIPSet
from logging_controller import LoggingController
from comment_writer import CommentWriter
from proxy_controller import ProxyController


class CommentSpider(object):
    """
    Spider part
    """

    __comment_url = "http://music.163.com/weapi/v1/resource/comments/R_SO_4_{0}/?csrf_token="
    __hot_comment_url = "http://music.163.com/weapi/v1/resource/hotcomments/R_SO_4_{0}/?csrf_token="

    __headers_old = {
        'Cookie': 'appver=1.5.0.75771;',
        'Referer': 'http://music.163.com/'
    }

    # POST http://music.163.com/weapi/v1/resource/comments/R_SO_4_2529311?csrf_token= HTTP/1.1
    # Content-Length: 478
    # 'Referer': http://music.163.com/song?id=2529311

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

    __DATA_MAX_LOOP = 10
    __DATA_MAX_CACHE = 10
    __data_loop = __DATA_MAX_LOOP
    __data_current = 0
    __data_list = []

    __request_thread_limit = 50

    __proxy_lock = threading.Lock()

    def __init__(self, use_proxy=False, logger=None):
        self.logger = LoggingController() if not logger else logger
        self.use_proxy = use_proxy
        if use_proxy:
            self.controller_proxy = ProxyController()
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
            if self.__data_current >= self. __DATA_MAX_CACHE:
                self.__data_current = 0
                self.__data_loop += 1
            if self.__data_loop >= self. __DATA_MAX_LOOP:
                self.__data_list[:] = []
                for i in range(self.__DATA_MAX_CACHE):
                    self.__data_list.append(generate_data(self.text()))
                self.__data_loop = 0
                self.__data_current = 0
            data = self.__data_list[self.__data_current]
            self.__data_current += 1
            return data

    def get_request_data_dict(self, total, limit=20):
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

    def get_proxy_ip(self, is_main_thread=True):
        """
        Get a proxy ip from collection
        """
        if not self.use_proxy:
            return None
        first = True
        self.__proxy_lock.acquire()
        try:
            while not self.ip_set.available():
                if not first:
                    time.sleep(5)
                self.ip_set = self.controller_proxy.get_proxy(
                    is_main_thread=is_main_thread)
                first = False
            proxy_ip = self.ip_set.pop()
        finally:
            self.__proxy_lock.release()
        return proxy_ip

    def get_request_url(self, song_id, hot_comment=False):
        """
        Get concat request url
        """
        if hot_comment:
            return str.format(self.__hot_comment_url, song_id)
        else:
            return str.format(self.__comment_url, song_id)

    def send_request(self, url, headers, data, proxy_ip=None):
        """
        Send comment request.
        """
        session = requests.Session()
        try:
            if proxy_ip is not None:
                proxies = {'http': proxy_ip.ip + ':' + proxy_ip.port}
                response = session.post(
                    url, data=data, headers=headers, proxies=proxies)
                content = response.json()
            else:
                response = session.post(url, data=data, headers=headers)
                content = response.json()
        except BaseException, error:
            content = None
            # print error.message
        finally:
            session.close()
        return content

    def request_comment(self, song_id, request_data=None, retry=False, is_main_thread=True):
        """
        Send request and analysis response
        """
        proxy_ip = None
        request_data = self.get_request_data() if request_data is None else request_data
        url = self.get_request_url(song_id)
        content = None
        while content is None:
            proxy_ip = self.get_proxy_ip(
                is_main_thread) if self.use_proxy else None
            content = self.send_request(
                url, self.__headers, request_data, proxy_ip)
            if not retry:
                break
        if content is None:
            return None
        return adapter.get_comment(content, song_id)

    def request_hot_comment(self, song_id, request_data=None, retry=False):
        """
        Send request and analysis response
        """
        proxy_ip = None
        request_data = self.get_request_data() if request_data is None else request_data
        url = self.get_request_url(song_id, True)
        content = None
        while content is None:
            proxy_ip = self.get_proxy_ip() if self.use_proxy else None
            content = self.send_request(
                url, self.__headers, request_data, proxy_ip)
            if not retry:
                break
        if content is None:
            return None
        return adapter.get_hot_comment(content, song_id)

    def get_song_comment(self, song_id, retry=False):
        """
        Get a song all comment
        """
        total_comment = self.request_comment(song_id, retry=True)
        total = total_comment.total
        data_dict = self.get_request_data_dict(total)
        comment_list = []
        for index in data_dict:
            temp_comment = self.request_comment(
                song_id, request_data=data_dict[index], retry=retry)
            comment_list.append(temp_comment)
        return comment_list

    def get_song_comment_multithread(self, song_id, retry=False):
        """
        Get a song all comment
        """
        total_comment = self.request_comment(song_id, retry=True)
        total = total_comment.total
        data_dict = self.get_request_data_dict(total)
        comment_dict = {}
        param_list = []
        for index in data_dict:
            param = ((song_id, data_dict[index],
                      retry, index, comment_dict,), None)
            param_list.append(param)
        pool_requests = threadpool.makeRequests(
            self.request_comment_thread, param_list)
        pool = threadpool.ThreadPool(self.__request_thread_limit)
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

    def write_song_comment(self, song_id, retry=False):
        """
        Write a song all comment
        """
        writer = CommentWriter(self.logger)
        total_comment = self.request_comment(song_id, retry=True)
        total = total_comment.total
        data_dict = self.get_request_data_dict(total)
        for index in data_dict:
            temp_comment = self.request_comment(
                song_id, request_data=data_dict[index], retry=retry)
            temp_details = SongComment.convert_details(temp_comment)
            for detail in temp_details:
                writer.send_message(detail)
        writer.dispose()

    def write_song_comment_multithread(self, song_id, retry=False):
        """
        Get a song all comment
        """
        writer = CommentWriter(self.logger)
        total_comment = self.request_comment(song_id, retry=True)
        total = total_comment.total
        data_dict = self.get_request_data_dict(total)
        param_list = []
        for index in data_dict:
            param = ((writer, song_id, data_dict[index],
                      retry, index,), None)
            param_list.append(param)
        pool_requests = threadpool.makeRequests(
            self.write_comment_thread, param_list)
        pool = threadpool.ThreadPool(self.__request_thread_limit)
        [pool.putRequest(request) for request in pool_requests]
        pool.wait()
        writer.dispose()
        self.logger.dispose()

    def write_comment_thread(self, writer, song_id, data, retry, index):
        """
        This is multi-threading request.
        """
        self.logger.info("Request comment start. Index: {0}", index)
        comment = self.request_comment(
            song_id, request_data=data, retry=retry, is_main_thread=False)
        self.logger.info("Request comment success. Index: {0}", index)
        details = SongComment.convert_details(comment)
        for detail in details:
            writer.send_message(detail)
        self.logger.info("Write comment. Index: {0}", index)

    def get_song_hot_comment(self, song_id, retry=False):
        """
        Get a song all hot comment.
        """
        total_comment = self.request_hot_comment(song_id, retry=True)
        total = total_comment.total
        data_dict = self.get_request_data_dict(total)
        comment_list = []
        for index in data_dict:
            temp_comment = self.request_hot_comment(
                song_id, request_data=data_dict[index], retry=retry)
            comment_list.append(temp_comment)
        return comment_list[::-1]


if __name__ == '__main__':
    spider = CommentSpider(False)
    # 70+ hot comment
    # comment_list = spider.get_song_hot_comment('26584163', True)
    # 60 total
    comment_list = spider.get_song_comment('26620939', True)
    # spider.write_song_comment('26620939', True)
    # spider.write_song_comment_multithread('26620939', True)
    # comment_dict = spider.get_song_comment_multithread('26620939', True)
    # 17xxk total
    # comment_list = spider.get_song_all_comment('186016', True)
