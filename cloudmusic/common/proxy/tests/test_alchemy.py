# coding=utf-8
import unittest
from datetime import datetime, timedelta
from proxy.alchemy import DBWorker
from proxy.proxy_pool import Proxy


class TestAlchemy(unittest.TestCase):
    def __init__(self):
        unittest.TestCase.__init__(self)
        time_str = datetime.now().strftime("%Y%m%d%H%M%S")
        test_con_string = 'sqlite:///test_{}.db'.format(time_str)
        self.worker = DBWorker(test_con_string)

    def test_merge(self):
        proxy1 = Proxy('123.123.123.123', '80', False, available=False)
        proxy2 = Proxy('123.123.123.123', '81', False, available=True)
        proxy3 = Proxy('123.123.123.123', '82', False, available=True)
        self.failUnlessRaises(self.worker.merge([proxy1, proxy2, proxy3]))

    def test_delete(self):
        self.failUnlessRaises(self.worker.delete(1))

    def test_query_available(self):
        time = datetime.now() - timedelta(hours=10)
        all = self.worker.query_available(time)
        self.assertEqual(2, len(all))

    def test_query_expired(self):
        time = datetime.now() + timedelta(hours=10)
        all = self.worker.query_expired(time)
        self.assertEqual(2, len(all))

    def test_available_count(self):
        count = self.worker.available_count()
        self.assertEqual(2, count)


def test_alchemy():
    suite = unittest.TestSuite()
    suite.addTest(TestAlchemy("test_merge"))
    suite.addTest(TestAlchemy("test_delete"))
    suite.addTest(TestAlchemy("test_query_available"))
    suite.addTest(TestAlchemy("test_query_expired"))
    suite.addTest(TestAlchemy("test_available_count"))
    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(suite)


if __name__ == '__main__':
    test_alchemy()
