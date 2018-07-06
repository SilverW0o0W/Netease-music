# coding=utf-8
"""
This is for controlling proxy ip
"""

import os
import random
import time
from datetime import datetime, timedelta
import traceback

import threading
from multiprocessing import Process, Pipe
from gevent import monkey, pool as g_pool

import requests

from .spider import Spider
from .alchemy import DBWorker

from bs4 import BeautifulSoup

monkey.patch_socket()
LOCK = threading.Lock()


class Proxy(object):
    """
    This is the class for ip information.
    """

    def __init__(self, ip, port, https, available=False, verified=None, created=None, id=None):
        self.id = id
        self.ip = ip
        self.port = port
        self.https = https
        self.unique_id = self.unique_id()
        self.available = available
        now = datetime.now()
        self.verified = verified if verified else now
        self.created = created if created else now

    def ip_port(self):
        """
        Get ip:port string.
        """
        return self.ip + ':' + self.port

    def unique_id(self):
        unique_id = ''
        nums = self.ip.split('.')
        for num in nums:
            unique_id += num.zfill(3)
        unique_id += self.port
        unique_id += '1' if self.https else '0'
        return unique_id


class ProxyList(object):
    """
    This is the set class for proxy ip
    """

    _EXPIRE_TIME = 20

    def __init__(self, proxies=None):
        self.proxies = [] if not proxies else proxies
        self.create_time = datetime.now()

    def available(self):
        """
        Check set count and available time
        """
        time_now = datetime.now()
        if len(self.proxies) < 1:
            return False
        delta = timedelta(seconds=self._EXPIRE_TIME)
        return time_now < self.create_time + delta

    def append(self, proxy_ip):
        """
        Append proxy ip
        """
        self.proxies.append(proxy_ip)

    def pop(self):
        """
        Get a proxy ip
        """
        return self.proxies.pop()


class ProxyPool(object):
    """
    This is a class for crawling proxy ip
    """
    _instance = None

    _http_url = 'http://info.cern.ch/'
    _http_title = 'http://info.cern.ch'
    _https_url = 'https://cn.bing.com/'
    _https_title = u'微软 Bing 搜索 - 国内版'
    _proxy_split = 3

    _process_stop_file = 'proxy.stop'

    _pool_max = 20
    _crawl_check_seconds = 20
    _verify_check_seconds = 180
    _verify_minutes = 3

    _min_storage = 20

    _cache_proxy_set = ProxyList()

    def __init__(self, logger, https):
        self.logger = logger
        self.https = https
        self.spider = Spider(self.logger)
        self.worker = DBWorker('sqlite:///proxy.db')
        self.clear_stop_file()
        self.pipe = Pipe(duplex=False)

        check_process = Process(target=self.check_storage_process)
        check_process.start()
        self.logger.info("ProxyCheck start. PID: {}.", check_process.pid)

        verify_process = Process(target=self.verify_storage_process)
        verify_process.start()
        self.logger.info("ProxyVerify start. PID: {}.", verify_process.pid)

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            with LOCK:
                if not cls._instance:
                    cls._instance = super(ProxyPool, cls).__new__(cls)
        return cls._instance

    def check_proxy(self, proxy):
        """
        Check proxy available. Timeout: 15s. Retry: 3 times.
        """
        transfer_method = 'https' if self.https else 'http'
        proxies = {transfer_method: proxy.ip_port()}
        url = self._https_url if self.https else self._http_url
        requests.adapters.DEFAULT_RETRIES = 3
        with requests.Session() as session:
            try:
                session.keep_alive = False
                if self.https:
                    response = session.get(url, proxies=proxies, timeout=30, verify=False)
                else:
                    response = session.get(url, proxies=proxies, timeout=15)
                proxy.available = self.check_response(response, url)
            except requests.exceptions.RequestException:
                proxy.available = False
            except Exception as ex:
                print(ex)
        return proxy.available

    def check_response(self, response, url):
        """
        Check response content
        :param response:
        :param url:
        :return: is valid proxy
        """
        # Check 1st: response status == 200 and url is right
        if response.status_code != 200 or response.url != url:
            return False
        # Check 2nd: response content is real
        soup = BeautifulSoup(response.text, "html.parser")
        title = soup.title
        check_title = self._https_title if self.https else self._http_title
        return title is not None and title.string == check_title

    def split_pool(self, func, proxies):
        """
        Check proxy available and add into sqlite db.
        """
        pool = g_pool.Pool(size=self._pool_max)
        for i in range(0, len(proxies), 3):
            pool.spawn(func, proxies[i:i + 3])
        pool.join()

    def add_proxies(self, proxies):
        """
        Multi-Threading check proxy.
        """
        added_proxies = []
        for proxy in proxies:
            if self.check_proxy(proxy):
                if not self.is_recorded(proxy):
                    added_proxies.append(proxy)
        if len(added_proxies) > 0:
            self.logger.debug('Write proxies to db. Count: {0}', len(added_proxies))
            self.worker.merge(added_proxies)

    def get_proxy_set(self, count=10):
        """
        Get proxy list from sqlite and check available
        """
        proxies = self.select_proxies(count)
        proxies = self.convert_proxies(proxies)
        random.shuffle(proxies)
        return ProxyList(proxies)

    def get_proxy(self):
        """
        Get a proxy ip from collection
        """
        first_waiting = True
        with LOCK:
            while not self._cache_proxy_set.available():
                if not first_waiting:
                    time.sleep(3)
                self._cache_proxy_set = self.get_proxy_set()
                first_waiting = False
            proxy = self._cache_proxy_set.pop()
        return proxy

    def convert_proxies(self, sql_proxies):
        """
        Convert data from db to proxy_ip instance
        """
        proxies = [
            Proxy(
                proxy.ip,
                proxy.port,
                proxy.https,
                available=proxy.available,
                verified=proxy.verified,
                created=proxy.created,
                id=proxy.id
            )
            for proxy in sql_proxies
        ]
        return proxies

    def select_proxies(self, count=None):
        """
        Select proxy ip in sqlite
        """
        delta = timedelta(minutes=self._verify_minutes)
        avail_time = datetime.now() - delta
        proxies_set = self.worker.query_available(avail_time, count)
        if not proxies_set:
            proxies_set = []
        return proxies_set

    def get_db_count(self):
        """
        Get total record in db.
        """
        return self.worker.available_count()

    def check_storage_process(self):
        """
        Check db storage status
        """
        while self.should_run():
            if self.get_db_count() < self._min_storage:
                self.crawl_proxy()
                time.sleep(10)
            else:
                for _ in range(0, self._crawl_check_seconds, 5):
                    time.sleep(5)
                    if self.should_run():
                        break
        self.logger.info('Crawl process close')
        self.pipe[1].send(0)

    def is_recorded(self, proxy):
        """
        Check proxy existed in sqlite
        """
        return self.worker.query(proxy.unique_id) is not None

    def crawl_proxy(self):
        """
        Run the proxy spider to crawl new proxy ip
        """
        self.logger.info('Crawl proxy start')
        try:
            proxies = self.spider.get_proxies(self.https)
            if self.should_run():
                self.split_pool(self.add_proxies, proxies)
        except Exception:
            self.logger.warn('Crawl proxy exception. Reason: {0}.', traceback.format_exc())
        self.logger.info('Crawl proxy done')

    def select_expired_proxies(self):
        """
        Select proxy ip in sqlite
        """
        delta = timedelta(minutes=self._verify_minutes)
        verify_time = datetime.now() - delta
        proxies_set = self.worker.query_expired(verify_time)
        if not proxies_set:
            proxies_set = []
        return proxies_set

    def verify_storage_process(self):
        """
        Check proxy in db is still available
        """
        while self.should_run():
            self.verify_proxy()
            for i in range(self._verify_check_seconds // 10):
                if not self.should_run():
                    break
                time.sleep(10)
        self.logger.info('Verify process close')
        self.pipe[1].send(1)

    def verify_proxy(self):
        """
        Check single proxy ip and delete expire ip.
        """
        self.logger.info('Verify proxy start')
        try:
            sql_proxies = self.select_expired_proxies()
            proxies = self.convert_proxies(sql_proxies)
            if self.should_run():
                self.split_pool(self.verify_proxies, proxies)
        except Exception:
            self.logger.error('Unknown error occurred. Reason: {}.', traceback.format_exc())
        finally:
            self.logger.info('Verify proxy done')

    def verify_proxies(self, proxies):
        """
        Check single proxy ip and delete unreachable ip.
        """
        for proxy in proxies:
            if self.check_proxy(proxy):
                proxy.verified = datetime.now()
                self.worker.merge([proxy, ])
            else:
                self.worker.delete(proxy.id)

    def clear_stop_file(self):
        """
        Delete stop file
        """
        if self.check_stop_file():
            try:
                os.remove(self._process_stop_file)
            except Exception:
                self.logger.warning('Delete stop file failed. Reason: {0}.', traceback.format_exc())

    def should_run(self):
        """
        Process should be running
        """
        return not self.check_stop_file()

    def check_stop_file(self):
        """
        Check stop file exist
        """
        return os.path.exists(self._process_stop_file)

    def dispose(self):
        """
        Release resource.
        """
        with open(self._process_stop_file, "w"):
            self.logger.info("Stop signal created")
        for i in range(2):
            message = self.pipe[0].recv()
            if message == 0:
                self.logger.debug("Receive crawl process stop.")
            elif message == 1:
                self.logger.debug("Receive verify process stop.")
        self.clear_stop_file()
