# coding=utf-8
import unittest
from proxy_alchemy import ProxyWorker
from proxy import Proxy
from datetime import datetime, timedelta


class TestAlchemy(unittest.TestCase):
    test_con_string = 'sqlite:///test/test.db'

    def test_merge(self):
        worker = ProxyWorker(self.test_con_string)
        proxy = Proxy('123.123.123.123', '80', False)
        worker.merge([proxy, ])

    def test_delete(self):
        worker = ProxyWorker(self.test_con_string)
        worker.delete(1)

    def test_query_available(self):
        worker = ProxyWorker(self.test_con_string)
        time = datetime.now() - timedelta(hours=10)
        all = worker.query_available(time, False)
        print(len(all))

    def test_query_expired(self):
        worker = ProxyWorker(self.test_con_string)
        time = datetime.now() + timedelta(hours=10)
        all = worker.query_expired(time, False)
        print(len(all))

    def test_available_count(self):
        worker = ProxyWorker(self.test_con_string)
        count = worker.available_count(False)
        print(count)


if __name__ == '__main__':
    unittest.main()
