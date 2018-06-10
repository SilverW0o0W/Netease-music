import redis


class Slave(object):
    def __init__(self, count):
        self.count = count
