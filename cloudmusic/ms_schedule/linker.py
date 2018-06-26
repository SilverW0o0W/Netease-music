# coding=utf-8
from redis import ConnectionPool, StrictRedis


class Linker(object):

    def __init__(self, redis_url):
        self.url = redis_url
        self.pool = ConnectionPool.from_url(redis_url)

    def connect(self):
        return StrictRedis(connection_pool=self.pool)

    def reconnect(self):
        self.pool.disconnect()
        self.pool = ConnectionPool.from_url(self.url)
        return self.connect()
