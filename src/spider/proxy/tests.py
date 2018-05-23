# coding=utf-8
import unittest
from datetime import datetime, timedelta
from proxy_alchemy import ProxyWorker
from proxy import Proxy


class TestAlchemy(unittest.TestCase):
    test_con_string = 'sqlite:///test/test.db'
    worker = ProxyWorker(self.test_con_string)

    def test_merge(self):
        proxy1 = Proxy('123.123.123.123', '80', False, available=False)
        proxy2 = Proxy('123.123.123.123', '81', False, available=True)
        self.worker.merge([proxy1, proxy2])

    def test_delete(self):
        self.worker.delete(1)

    def test_query_available(self):
        time = datetime.now() - timedelta(hours=10)
        all = self.worker.query_available(time)
        print(len(all))

    def test_query_expired(self):
        time = datetime.now() + timedelta(hours=10)
        all = self.worker.query_expired(time)
        print(len(all))

    def test_available_count(self):
        count = self.worker.available_count()
        print(count)


if __name__ == '__main__':
    unittest.main()
