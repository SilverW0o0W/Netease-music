# coding=utf-8
import test_alchemy
import test_spider
from logger.logger import Logger
from proxy.controller import Controller
import time


def tests():
    test_alchemy.test_alchemy()
    test_spider.test_spider()


def test_start():
    log = Logger(name='proxy.log')
    controller = Controller(log, False)
    time.sleep(120)
    proxy = controller.get_proxy()
    controller.dispose()


if __name__ == '__main__':
    tests()
    # test_start()

