# coding=utf-8
import unittest
from datetime import datetime
from proxy.spider import Spider
from logger.logger import Logger


class TestSpider(unittest.TestCase):

    def __init__(self):
        unittest.TestCase.__init__(self)
        time_str = datetime.now().strftime("%Y%m%d%H%M%S")
        name = 'test_{}.log'.format(time_str)
        self.logger = Logger(name=name)
        self.spider = Spider(self.logger)

    def test_get_proxies(self):
        count = self.spider.get_proxies(False)
        self.assertGreater(0, count)


def test_spider():
    suite = unittest.TestSuite()
    suite.addTest(TestSpider("test_get_proxies"))
    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(suite)


if __name__ == '__main__':
    test_spider()
