# coding=utf-8
from redis import ConnectionPool, StrictRedis


class Worker(object):

    def __init__(self, url):
        self.url = url
        self.pool = ConnectionPool.from_url(url)

    def connect(self):
        return StrictRedis(connection_pool=self.pool)

    def reconnect(self):
        self.pool.disconnect()
        self.pool = ConnectionPool.from_url(self.url)
        return self.connect()
