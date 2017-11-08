# coding=utf-8
"""
Aim:
Initialize a CommentSpider instance, add call function with a song id. Return SongComment
"""

import time
import json
import urllib
import urllib2

import threading
import threadpool

from encrypto import generate_data
from music import SongComment, SongHotComment, CommentDetail
from proxy_ip import ProxyIPSet
from proxy_controller import ProxyController


class CommentSpider(object):
    """
    Spider part
    """

    __comment_url = "http://music.163.com/weapi/v1/resource/comments/R_SO_4_{0}/?csrf_token="
    __hot_comment_url = "http://music.163.com/weapi/v1/resource/hotcomments/R_SO_4_{0}/?csrf_token="

    __headers = {
        'Cookie': 'appver=1.5.0.75771;',
        'Referer': 'http://music.163.com/'
    }

    __DATA_MAX_LOOP = 10
    __DATA_MAX_CACHE = 10
    __data_loop = __DATA_MAX_LOOP
    __data_current = 0
    __data_list = []

    __request_thread_limit = 50

    __proxy_lock = threading.Lock()

    def __init__(self, use_proxy=False):
        self.use_proxy = use_proxy
        if use_proxy:
            self.controller_proxy = ProxyController()
            self.ip_set = ProxyIPSet()

    def get_request_data(self, once=True):
        """
        Get request encrypt data for total comment
        """
        if once:
            return generate_data()
        else:
            if self.__data_current >= self. __DATA_MAX_CACHE:
                self.__data_current = 0
                self.__data_loop += 1
            if self.__data_loop >= self. __DATA_MAX_LOOP:
                self.__data_list[:] = []
                for i in range(self.__DATA_MAX_CACHE):
                    self.__data_list.append(generate_data())
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
            data = generate_data(i * limit, limit)
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
        data = urllib.urlencode(data)
        request = urllib2.Request(url, data, headers)
        try:
            if proxy_ip is not None:
                proxy_data = {'http': proxy_ip.ip + ':' + proxy_ip.port}
                proxy_handler = urllib2.ProxyHandler(proxy_data)
                opener = urllib2.build_opener(proxy_handler)
                response = self.send_request_proxy(opener, request)
            else:
                response = urllib2.urlopen(request).read()
        except BaseException, error:
            response = None
            # print error.message
        return response

    def send_request_proxy(self, opener, request):
        """
        This is a function for proxy send request
        """
        retry = 2
        response = None
        for i in range(retry):
            try:
                response = opener.open(request, timeout=30).read()
                break
            except BaseException:
                response = None
                continue
        return response

    def request_comment(self, song_id, request_data=None, retry=False, is_main_thread=True):
        """
        Send request and analysis response
        """
        comment = SongComment(song_id)
        proxy_ip = None
        request_data = self.get_request_data() if request_data is None else request_data
        url = self.get_request_url(song_id)
        content = None
        while content is None:
            proxy_ip = self.get_proxy_ip(
                is_main_thread) if self.use_proxy else None
            response = self.send_request(
                url, self.__headers, request_data, proxy_ip)
            content = self.check_content(response, proxy_ip)
            if not retry:
                break
        if content is None:
            return None
        comment.comment_total = content['total']
        comment.comments = content['comments']
        comment.comment_more = content['more']
        if 'hotComments' in content:
            comment.hot_comments = content['hotComments']
            comment.hot_comment_more = content['moreHot']
        return comment

    def request_hot_comment(self, song_id, request_data=None, retry=False):
        """
        Send request and analysis response
        """
        comment = SongHotComment(song_id)
        proxy_ip = None
        request_data = self.get_request_data() if request_data is None else request_data
        url = self.get_request_url(song_id, True)
        content = None
        while content is None:
            proxy_ip = self.get_proxy_ip() if self.use_proxy else None
            response = self.send_request(
                url, self.__headers, request_data, proxy_ip)
            content = self.check_content(response, proxy_ip)
            if not retry:
                break
        if content is None:
            return None
        comment.comment_total = content['total']
        comment.hot_comments = content['hotComments']
        comment.hot_comment_more = content['hasMore']
        return comment

    def check_content(self, response, proxy_ip):
        """
        Add an ip to the black list if it's fake
        """
        if response is None:
            return None
        if self.use_proxy:
            try:
                return json.loads(response)
            except StandardError:
                self.controller_proxy.add_black_list(proxy_ip)
                return None
        else:
            content = json.loads(response)
            return content

    def get_song_comment(self, song_id, retry=False):
        """
        Get a song all comment
        """
        total_comment = self.request_comment(song_id, retry=True)
        total = total_comment.comment_total
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
        total = total_comment.comment_total
        print total
        data_dict = self.get_request_data_dict(total)
        comment_dict = {}
        param_list = []
        for index in data_dict:
            param = ((song_id, data_dict[index],
                      retry, index, comment_dict,), None)
            param_list.append(param)
        requests = threadpool.makeRequests(
            self.request_comment_thread, param_list)
        pool = threadpool.ThreadPool(self.__request_thread_limit)
        [pool.putRequest(request) for request in requests]
        pool.wait()
        return comment_dict

    def request_comment_thread(self, song_id, data, retry, index, comment_dict):
        """
        This is multi-threading request.
        """
        comment = self.request_comment(
            song_id, request_data=data, retry=retry, is_main_thread=False)
        comment_dict[index] = comment

    def get_song_hot_comment(self, song_id, retry=False):
        """
        Get a song all hot comment.
        """
        total_comment = self.request_hot_comment(song_id, retry=True)
        total = total_comment.comment_total
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
    # comment_dict = spider.get_song_comment_multithread('26620939', True)
    # 17xxk total
    # comment_list = spider.get_song_all_comment('186016', True)

    # for comment in comment_list:
    #     temp_list = comment.comments
    #     for temp in temp_list[::-1]:
    #         print temp['content']

    # for index in comment_dict:
    #     temp_list = comment_dict[index].comments
    #     for temp in temp_list[::-1]:
    #         print temp['content']

    # for comment in comment_list:
    #     temp_list = comment.hot_comments
    #     for temp in temp_list:
    #         print temp['content']
