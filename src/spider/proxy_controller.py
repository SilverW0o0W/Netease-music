# coding=utf-8
"""
This is for controlling proxy ip
"""

import os
import random
import time
from datetime import datetime, timedelta

import threading
from multiprocessing import Process, Pipe
import requests
from logging_controller import LoggingController

import threadpool

from sqlite_controller import SqliteController
from proxy_ip import ProxyIP, ProxyIPSet
from proxy_spider import ProxySpider
from bs4 import BeautifulSoup

LOCK = threading.Lock()


class ProxyController(object):
    """
    This is a class for crawling proxy ip
    """
    _instance = None

    _http_url = 'http://info.cern.ch/'
    _http_title = '<title>http://info.cern.ch</title>'
    _https_url = 'https://github.com/'
    _https_title = ''
    _thread_list_split = 3

    _process_stop_file = 'process.stop'

    _crawl_check_seconds = 30
    _crawl_pool_max = 20

    _verify_check_seconds = 300
    _verify_proxy_minutes = 5
    _verify_pool_max = 30

    _proxy_spider_page = 2

    _sql_create_table = "create table proxy_ip(id INTEGER primary key autoincrement, ip VARCHAR(20), port VARCHAR(10),https TINYINT,available TINYINT,verify_time TIMESTAMP default (datetime('now', 'localtime')), create_time TIMESTAMP default (datetime('now', 'localtime')))"
    _sql_insert = "insert into proxy_ip values(null, ?, ?, ?, ?, datetime('now', 'localtime'), datetime('now', 'localtime'))"
    _sql_delete = 'delete from proxy_ip where id = ?'
    _sql_update = 'update proxy_ip set ip = ?, port = ?, https = ?, available = ?, verify_time = ? where id = ?'
    _sql_select_exist = 'select * from proxy_ip where ip = ? and port = ?'
    _sql_select_verify = 'select * from proxy_ip where verify_time < datetime(?) and https = ? and available = 1'
    _sql_select_available_all = 'select * from proxy_ip where verify_time > datetime(?) and https = ? and available = 1 order by verify_time desc'
    _sql_select_available_limit = 'select * from proxy_ip where verify_time > datetime(?) and https = ? and available = 1 order by verify_time desc limit ? offset ?'
    _sql_select_available_count = 'select count(*) from proxy_ip where https = ? and available = 1'

    _db_path = 'proxy_ip.db'

    _min_storage = 20
    _min_available = 10

    def __init__(self, https):
        self.logger = LoggingController()
        self.https = https
        self.db_https = 1 if https else 0
        self.proxy_spider = ProxySpider(self.logger)
        self.db_controller = SqliteController(self._sql_create_table, self._db_path)
        self.db_controller.init_db()
        self.clear_stop_file()
        self.pipe = Pipe(duplex=False)
        # check_process = Process(name="ProxyCheck", target=self.check_storage_process)
        # check_process.start()
        # self.logger.info("ProxyCheck start. Name: {0}, PID: {1}.",
        #                  check_process.name, check_process.pid)
        verify_process = Process(name="ProxyVerify", target=self.verify_storage_process)
        verify_process.start()
        self.logger.info("ProxyVerify start. Name: {0}, PID: {1}.",
                         verify_process.name, verify_process.pid)

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            try:
                LOCK.acquire()
                # double check
                if not cls._instance:
                    cls._instance = super(ProxyController, cls).__new__(
                        cls, *args, **kwargs)
            finally:
                LOCK.release()
        return cls._instance

    def check_proxy(self, proxy_ip):
        """
        Check proxy available. Timeout: 15s. Retry: 3 times.
        """
        transfer_method = 'https' if proxy_ip.is_https else 'http'
        ip_port = proxy_ip.ip + ':' + proxy_ip.port
        proxies = {transfer_method: ip_port}
        url = self._https_url if proxy_ip.is_https else self._http_url
        requests.adapters.DEFAULT_RETRIES = 5
        session = requests.Session()
        session.keep_alive = False
        headers = {'Connection': 'False'}
        try:
            response = session.get(url, proxies=proxies, timeout=5, headers=headers)
            result = self.check_response(response, url)
        except requests.exceptions.RequestException, ex:
            result = False
        finally:
            session.close()
            time.sleep(0.1)
        proxy_ip.available = result
        return result

    def check_response(self, response, url):
        """
        Check response content
        :param response:
        :return: is valid proxy
        """
        # Check 1st: response status == 200 and url is right
        if response.status_code != 200 or response.url != url:
            return False
        # Check 2nd: response content is real
        soup = BeautifulSoup(response.text, "html.parser")
        title = soup.title
        check_title = self._https_title if self.https else self._http_title
        return title is not None and title == check_title

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
        split_num = self._thread_list_split
        times = len(proxy_ip_list) // split_num
        proxy_ip_split_list = []
        for i in range(times + 1):
            pre = i * split_num
            last = (i + 1) * split_num if i < times else len(proxy_ip_list)
            proxy_ip_split_list.append(proxy_ip_list[pre:last])
        pool = threadpool.ThreadPool(self._crawl_pool_max)
        pool_requests = threadpool.makeRequests(
            self.add_proxy_list_thread, proxy_ip_split_list)
        [pool.putRequest(request) for request in pool_requests]
        pool.wait()

    def add_proxy_list_thread(self, proxy_ip_list):
        """
        Multi-Threading check proxy.
        """
        insert_list = []
        for proxy_ip in proxy_ip_list:
            if self.check_proxy(proxy_ip):
                if self.check_proxy_exist(proxy_ip):
                    continue
                else:
                    insert_list.append(proxy_ip)
        self.logger.debug('Ready to write db. Count: {0}', len(insert_list))
        self.insert_proxy_list_db(insert_list, False)

    def get_proxy(self, count=10, is_main_thread=True):
        """
        Get proxy list from splite and check available
        """
        ip_value_list = self.select_proxy_db(count, is_main_thread)
        ip_list = self.convert_proxy_ip(ip_value_list)
        random.shuffle(ip_list)
        return ProxyIPSet(ip_list)

    def insert_proxy_db(self, proxy_ip, is_main_thread=True):
        """
        Insert proxy ip info to sqlite db file.
        """
        sql = self._sql_insert
        params_list = (proxy_ip.ip, proxy_ip.port,
                       1 if proxy_ip.is_https else 0, 1 if proxy_ip.available else 0)
        return self.db_controller.write(sql, params_list, is_main_thread)

    def insert_proxy_list_db(self, proxy_ip_list, is_main_thread=True):
        """
        Insert proxy ip info to sqlite db file.
        """
        ip_params_list = []
        sql = self._sql_insert
        for proxy_ip in proxy_ip_list:
            ip_params = (proxy_ip.ip, proxy_ip.port,
                         1 if proxy_ip.is_https else 0, 1 if proxy_ip.available else 0)
            ip_params_list.append(ip_params)
        return self.db_controller.write_list(sql, ip_params_list, is_main_thread)

    def delete_proxy_db(self, proxy_ip, is_main_thread=True):
        """
        Delete proxy ip info from sqlite db file.
        """
        sql = self._sql_delete
        params_list = []
        params_list.append(proxy_ip.db_id)
        return self.db_controller.write(sql, params_list, is_main_thread)

    def update_proxy_db(self, proxy_ip, is_main_thread=True):
        """
        Update proxy ip info in sqlite db file.
        """
        sql = self._sql_update
        params_list = (proxy_ip.ip, proxy_ip.port, 1 if proxy_ip.is_https else 0,
                       1 if proxy_ip.available else 0, proxy_ip.verify_time, proxy_ip.db_id)
        return self.db_controller.write(sql, params_list, is_main_thread)

    def convert_proxy_ip(self, ip_value_list):
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
        delta = timedelta(minutes=self._verify_proxy_minutes)
        available_time = datetime.now() - delta
        str_available_time = available_time.strftime('%Y-%m-%d %H:%M:%S')
        if count is None:
            sql = self._sql_select_available_all
            params_list = (str_available_time, self.db_https,)
        else:
            sql = self._sql_select_available_limit
            params_list = (str_available_time, self.db_https, count, 0,)
        result_set = self.db_controller.read(sql, params_list, is_main_thread)
        if not result_set or len(result_set) < self._min_available:
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
        params_list = (self.db_https,)
        result_set = self.db_controller.read(self._sql_select_available_count, params_list, is_main_thread)
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
            if count < self._min_storage:
                self.crawl_proxy_ip()
            else:
                time.sleep(self._crawl_check_seconds - 5)
            time.sleep(5)
        self.logger.info('Crawl process close')
        self.pipe[1].send(0)

    def check_proxy_exist(self, proxy_ip):
        """
        Check proxy existed in sqlite
        """
        params_list = (proxy_ip.ip, proxy_ip.port,)
        result_set = self.db_controller.read(
            self._sql_select_exist, params_list, False)
        return result_set is not None and len(result_set) > 0

    def crawl_proxy_ip(self):
        """
        Run the proxy spider to crawl new proxy ip
        """
        self.logger.info('Crawl proxy start')
        try:
            proxy_ip_list = self.proxy_spider.get_proxy_ip(self.https, self._proxy_spider_page)
            if self.should_run():
                self.add_proxy_list(proxy_ip_list)
        except Exception, ex:
            self.logger.warn('Crawl proxy exception. Reason: {0}.', ex.message)
        finally:
            self.logger.info('Crawl proxy done')

    def select_need_check_proxy_list(self, is_main_thread=True):
        """
        Select proxy ip in sqlite
        """
        delta = timedelta(minutes=self._verify_proxy_minutes)
        verify_time = datetime.now() - delta
        str_verify_time = verify_time.strftime('%Y-%m-%d %H:%M:%S')
        params_list = []
        params_list.append(str_verify_time)
        params_list.append(self.db_https)
        result_set = self.db_controller.read(self._sql_select_verify, params_list, is_main_thread)
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
            for i in range(self._verify_check_seconds / 10):
                if not self.should_run():
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
            proxy_ip_list = self.convert_proxy_ip(ip_value_list)
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
        pool = threadpool.ThreadPool(self._verify_pool_max)
        pool_requests = threadpool.makeRequests(
            self.verify_proxy_ip_thread, proxy_ip_list)
        [pool.putRequest(request) for request in pool_requests]
        pool.wait()

    def verify_proxy_ip_thread(self, proxy_ip):
        """
        Check single proxy ip and delete unreachable ip.
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
                os.remove(self._process_stop_file)
            except BaseException, ex:
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
        return os.path.exists(self._process_stop_file)

    def dispose(self):
        """
        Release resource.
        """
        stop_file = open(self._process_stop_file, "w")
        stop_file.close()
        for i in range(2):
            message = self.pipe[0].recv()
            if message == 0:
                self.logger.debug("Receive crawl process stop.")
            elif message == 1:
                self.logger.debug("Receive verify process stop.")
        self.clear_stop_file()
        self.db_controller.dispose_db_connection()
        self.logger.dispose()
