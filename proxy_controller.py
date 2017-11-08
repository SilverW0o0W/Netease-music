# coding=utf-8
"""
This is for controlling proxy ip
"""

import os
import random
import time
from datetime import datetime, timedelta
import urllib2

import threading
from multiprocessing import Process, Pipe
from logging_controller import LoggingController

import threadpool

from sqlite_controller import SqliteController
from proxy_ip import ProxyIP, ProxyIPSet
from proxy_spider import ProxySpider

LOCK = threading.Lock()


class ProxyController(object):
    """
    This is a class for crawling proxy ip
    """
    __instance = None

    __check_http_url = 'http://silvercodingcat.com/python/2017/08/09/Proxy-Spider-Check/'
    __check_https_url = ''
    __check_retry_time = 3
    __thread_timeout = 15
    __thread_list_split = 3

    __process_stop_file = 'process.stop'

    __crawl_check_seconds = 30
    __crawl_pool_max = 20

    __verify_check_seconds = 300
    __verify_proxy_minutes = 5
    __verify_pool_max = 30

    __proxy_spider_page = 2

    __sql_create_table = "create table proxy_ip(id INTEGER primary key autoincrement, ip VARCHAR(20), port VARCHAR(10),https TINYINT,available TINYINT,verify_time TIMESTAMP default (datetime('now', 'localtime')), create_time TIMESTAMP default (datetime('now', 'localtime')))"
    __sql_insert = "insert into proxy_ip values(null, ?, ?, ?, ?, datetime('now', 'localtime'), datetime('now', 'localtime'))"
    __sql_delete = 'delete from proxy_ip where id = ?'
    __sql_update = 'update proxy_ip set ip = ?, port = ?, https = ?, available = ?, verify_time = ? where id = ?'
    __sql_select_exist = 'select * from proxy_ip where ip = ? and port = ?'
    __sql_select_all = 'select * from proxy_ip'
    __sql_select_verify = 'select * from proxy_ip where verify_time < datetime(?) and available = 1'
    __sql_select_available_all = 'select * from proxy_ip where verify_time > datetime(?) and available = 1 order by verify_time desc'
    __sql_select_available_limit = 'select * from proxy_ip where verify_time > datetime(?) and available = 1 order by verify_time desc limit ? offset ?'
    __sql_select_available_count = 'select count(*) from proxy_ip where available = 1'

    __db_path = 'proxy_ip.db'

    __min_storage = 20
    __min_available = 10

    def __init__(self):
        self.logger = LoggingController()
        self.proxy_spider = ProxySpider(self.logger)
        self.db_controller = SqliteController(
            self.__sql_create_table, self. __db_path)
        self.db_controller.init_db()
        self.clear_stop_file()
        self.pipe = Pipe(duplex=False)
        check_process = Process(
            target=self.check_storage_process)
        check_process.start()
        verify_process = Process(
            target=self.verify_storage_process)
        verify_process.start()

    def __new__(cls, *args, **kwargs):
        if not cls.__instance:
            try:
                LOCK.acquire()
                # double check
                if not cls.__instance:
                    cls.__instance = super(ProxyController, cls).__new__(
                        cls, *args, **kwargs)
            finally:
                LOCK.release()
        return cls.__instance

    def send_check_request(self, opener, url):
        """
        Send request to check server
        """
        response = opener.open(url, timeout=self.__thread_timeout)
        return response.code == 200 and response.url == url

    def check_proxy(self, proxy_ip):
        """
        Check proxy available. Timeout: 15s. Retry: 3 times.
        """
        transfer_method = 'https' if proxy_ip.is_https else 'http'
        ip_port = proxy_ip.ip + ':' + proxy_ip.port
        proxy_data = {transfer_method: ip_port}
        check_url = self.__check_https_url if proxy_ip.is_https else self.__check_http_url
        proxy_handler = urllib2.ProxyHandler(proxy_data)
        opener = urllib2.build_opener(proxy_handler)
        result = False
        for i in range(self.__check_retry_time):
            try:
                result = self.send_check_request(opener, check_url)
                break
            except BaseException:
                continue
        proxy_ip.available = result
        return result

    def add_proxy(self, proxy_ip):
        """
        Check proxy available and add into sqlite db.
        """
        if self.check_proxy(proxy_ip):
            if self.check_proxy_exist(proxy_ip):
                return False
            else:
                self.insert_proxy_db(proxy_ip)
                return True

    def add_proxy_list(self, proxy_ip_list):
        """
        Check proxy available and add into sqlite db.
        """
        split_num = self.__thread_list_split
        print len(proxy_ip_list)
        times = len(proxy_ip_list) // split_num
        proxy_ip_split_list = []
        for i in range(times + 1):
            pre = i * split_num
            last = (i + 1) * split_num if i < times else len(proxy_ip_list)
            proxy_ip_split_list.append(proxy_ip_list[pre:last])
        pool = threadpool.ThreadPool(self.__crawl_pool_max)
        requests = threadpool.makeRequests(
            self.add_proxy_list_thread, proxy_ip_split_list)
        [pool.putRequest(request) for request in requests]
        pool.wait()

    def add_proxy_list_thread(self, proxy_ip_list):
        """
        Muiti-Threading check proxy.
        """
        insert_list = []
        for proxy_ip in proxy_ip_list:
            if self.check_proxy(proxy_ip):
                if self.check_proxy_exist(proxy_ip):
                    continue
                else:
                    insert_list.append(proxy_ip)
        self.insert_proxy_list_db(insert_list, False)

    def get_proxy(self, count=10, is_main_thread=True):
        """
        Get proxy list from splite and check available
        """
        ip_value_list = self.select_proxy_db(count, is_main_thread)
        ip_list = self.convert_db_proxy_to_proxy_ip(ip_value_list)
        random.shuffle(ip_list)
        return ProxyIPSet(ip_list)

    def insert_proxy_db(self, proxy_ip, is_main_thread=True):
        """
        Insert proxy ip info to sqlite db file.
        """
        sql = self.__sql_insert
        params_list = (proxy_ip.ip, proxy_ip.port,
                       1 if proxy_ip.is_https else 0, 1 if proxy_ip.available else 0)
        return self.db_controller.write(sql, params_list, is_main_thread)

    def insert_proxy_list_db(self, proxy_ip_list, is_main_thread=True):
        """
        Insert proxy ip info to sqlite db file.
        """
        ip_params_list = []
        sql = self.__sql_insert
        for proxy_ip in proxy_ip_list:
            ip_params = (proxy_ip.ip, proxy_ip.port,
                         1 if proxy_ip.is_https else 0, 1 if proxy_ip.available else 0)
            ip_params_list.append(ip_params)
        return self.db_controller.write_list(sql, ip_params_list, is_main_thread)

    def delete_proxy_db(self, proxy_ip, is_main_thread=True):
        """
        Delete proxy ip info from sqlite db file.
        """
        sql = self.__sql_delete
        params_list = []
        params_list.append(proxy_ip.db_id)
        return self.db_controller.write(sql, params_list, is_main_thread)

    def update_proxy_db(self, proxy_ip, is_main_thread=True):
        """
        Update proxy ip info in sqlite db file.
        """
        sql = self.__sql_update
        params_list = (proxy_ip.ip, proxy_ip.port, 1 if proxy_ip.is_https else 0,
                       1 if proxy_ip.available else 0, proxy_ip.verify_time, proxy_ip.db_id)
        return self.db_controller.write(sql, params_list, is_main_thread)

    def convert_db_proxy_to_proxy_ip(self, ip_value_list):
        """
        Convert data from db to proxy_ip instance
        """
        ip_list = []
        for ip_value in ip_value_list:
            ip_temp = ProxyIP(ip_value[1], ip_value[2],
                              ip_value[3] == 1, ip_value[4] == 1, ip_value[5], ip_value[6], ip_value[0])
            ip_list.append(ip_temp)
        return ip_list

    def select_proxy_db(self, count=None, is_main_thread=True):
        """
        Select proxy ip in sqlite
        """
        delta = timedelta(minutes=self.__verify_proxy_minutes)
        available_time = datetime.now() - delta
        str_available_time = available_time.strftime('%Y-%m-%d %H:%M:%S')
        if count is None:
            sql = self.__sql_select_available_all
            params_list = (str_available_time,)
        else:
            sql = self.__sql_select_available_limit
            params_list = (str_available_time, count, 0,)
        result_set = self.db_controller.read(
            sql, params_list, is_main_thread)
        if not result_set or len(result_set) < self.__min_available:
            pass
        proxy_ip_list = []
        for result in result_set:
            proxy_ip = result
            proxy_ip_list.append(proxy_ip)
        return proxy_ip_list

    def get_db_count(self, is_main_thread=True):
        """
        Get total record in db.
        """
        result_set = self.db_controller.read(
            self.__sql_select_available_count, None, is_main_thread)
        if result_set is not None and len(result_set) > 0 and len(result_set[0]) > 0:
            return result_set[0][0]
        else:
            return -1

    def check_storage_process(self):
        """
        Check db storage status
        """
        while self.should_run():
            count = self.get_db_count(False)
            if count < self.__min_storage:
                self.crawl_proxy_ip()
            else:
                time.sleep(self.__crawl_check_seconds)
        self.logger.info('Crawl process close')
        self.pipe[1].send(0)

    def check_proxy_exist(self, proxy_ip):
        """
        Check proxy existed in sqlite
        """
        params_list = (proxy_ip.ip, proxy_ip.port,)
        result_set = self.db_controller.read(
            self.__sql_select_exist, params_list, False)
        return result_set is not None and len(result_set) > 0

    def crawl_proxy_ip(self):
        """
        Run the proxy spider to crawl new proxy ip
        """
        self.logger.info('Crawl proxy start')
        try:
            proxy_ip_list = self.proxy_spider.get_proxy_ip(
                False, self.__proxy_spider_page)
            if self.should_run():
                self.add_proxy_list(proxy_ip_list)
        finally:
            self.logger.info('Crawl proxy done')

    def select_need_check_proxy_list(self, is_main_thread=True):
        """
        Select proxy ip in sqlite
        """
        delta = timedelta(minutes=self.__verify_proxy_minutes)
        verify_time = datetime.now() - delta
        str_verify_time = verify_time.strftime('%Y-%m-%d %H:%M:%S')
        params_list = []
        params_list.append(str_verify_time)
        result_set = self.db_controller.read(
            self.__sql_select_verify, params_list, is_main_thread)
        if result_set is None:
            result_set = []
        proxy_ip_list = []
        for result in result_set:
            proxy_ip = result
            proxy_ip_list.append(proxy_ip)
        return proxy_ip_list

    def verify_storage_process(self):
        """
        Check proxy in db is still available
        """
        while self.should_run():
            self.verify_proxy()
            for i in range(self.__verify_check_seconds / 10):
                if not self.should_run:
                    break
                time.sleep(10)
        self.logger.info('Verify process close')
        self.pipe[1].send(1)

    def verify_proxy(self):
        """
        Check single proxy ip and delete inavaildable ip.
        """
        self.logger.info('Verify proxy start')
        try:
            ip_value_list = self.select_need_check_proxy_list(False)
            proxy_ip_list = self.convert_db_proxy_to_proxy_ip(ip_value_list)
            if self.should_run():
                self.verify_proxy_ip_list(proxy_ip_list)
        except StandardError, error:
            print error.message
        finally:
            self.logger.info('Verify proxy done')

    def verify_proxy_ip_list(self, proxy_ip_list):
        """
        Check proxy ip list.
        """
        pool = threadpool.ThreadPool(self.__verify_pool_max)
        requests = threadpool.makeRequests(
            self.verify_proxy_ip_thread, proxy_ip_list)
        [pool.putRequest(request) for request in requests]
        pool.wait()

    def verify_proxy_ip_thread(self, proxy_ip):
        """
        Check single proxy ip and delete inavaildable ip.
        """
        if self.check_proxy(proxy_ip):
            proxy_ip.verify_time = time.strftime(
                '%Y-%m-%d %H:%M:%S', time.localtime(time.time()))
            self.update_proxy_db(proxy_ip, False)
        else:
            self.delete_proxy_db(proxy_ip, False)

    def add_black_list(self, proxy_ip, is_main_thread=True):
        """
        Add fake ip to sqlite. To not get any more
        """
        proxy_ip.available = 0
        self.update_proxy_db(proxy_ip, is_main_thread)

    def clear_stop_file(self):
        """
        Delete stop file
        """
        if self.check_process_stop_file():
            try:
                os.remove(self.__process_stop_file)
            except Exception, ex:
                self.logger.warning('Delete stop file failed. Reason: {0}', ex)

    def should_run(self):
        """
        Process should be running
        """
        return not self.check_process_stop_file()

    def check_process_stop_file(self):
        """
        Check stop file exist
        """
        return os.path.exists(self.__process_stop_file)

    def dispose(self):
        """
        Release resource.
        """
        stop_file = open(self.__process_stop_file, "w")
        stop_file.close()
        for i in range(2):
            message = self.pipe[0].recv()
            if message == 0:
                self.logger.debug("Recieve crawl process stop.")
            elif message == 1:
                self.logger.debug("Recieve verify process stop.")
        self.clear_stop_file()
        self.db_controller.dispose_db_connection()
        self.logger.dispose()


if __name__ == '__main__':
    controller = ProxyController()
# ip_set = controller.get_proxy()
    time.sleep(120)
    controller.dispose()
    while True:
        time.sleep(30)
