# coding=utf-8
from redis import ConnectionPool, StrictRedis


class Worker(object):

    def __init__(self):
        pass

    def connect(self, url):
        pool = ConnectionPool.from_url(url)
        redis = StrictRedis(connection_pool=pool)
