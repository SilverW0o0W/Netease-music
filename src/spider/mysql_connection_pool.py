# coding=utf-8
"""
This file work for controlling mysql connection pool.
"""

from Queue import Queue
from datetime import datetime, timedelta

import time
import threading
from mysql_controller import MysqlController

LOCK = threading.Lock()


class ConnectionPool(object):
    """
    For control mysql connection.
    """

    def __init__(self, user, password, database, host=None, port=None, charset=None, max_connection=10):
        self.user = user
        self.password = password
        self.database = database
        self.host = host
        self.port = port
        self.charset = charset
        self.max_connection = max_connection
        self.expire_time = 30
        self.expire_delta = timedelta(minutes=self.expire_time)
        self.max_reference = 10
        self.queue_available = Queue(max_connection)
        self.connection_busy = 0
        self.pool_dispose = False
        self.create_connection(max_connection)
        check_thread = threading.Thread(target=self.check_connection_thread)
        check_thread.setName('connection_checker')
        check_thread.start()

    def check_connection_thread(self):
        """
        Contorl connection number. Connect and dispose.
        """
        while True:
            if self.pool_dispose:
                break
            LOCK.acquire()
            count = self.queue_available.qsize() + self.connection_busy
            LOCK.release()
            if count != self.max_connection:
                self.create_connection(self.max_connection - count)
            time.sleep(5)

    def create_connection(self, number=1):
        """
        Create new connection
        """
        for i in range(number):
            controller = PoolController(self)
            self.append_connection(controller)

    def append_connection(self, controller):
        """
        Add connection to queue
        """
        LOCK.acquire()
        if not self.pool_dispose:
            self.queue_available.put(controller)
        LOCK.release()

    def get_connection(self, timeout=None):
        """
        Get connection.
        """
        connection = None
        LOCK.acquire()
        if self.pool_dispose:
            raise Exception('Pool close.')
        try:
            connection = self.queue_available.get(timeout=timeout)
            self.connection_busy += 1
        finally:
            LOCK.release()
        return connection

    def close(self):
        """
        Close available connection.
        """
        LOCK.acquire()
        self.pool_dispose = True
        while self.queue_available.qsize() > 0:
            try:
                controller = self.queue_available.get()
                controller.real_close()
            except BaseException, exception:
                print exception.message
        LOCK.release()


class PoolController(MysqlController):
    """
    The mysql controller for connection pool
    """

    def __init__(self, pool):
        self.pool = pool
        MysqlController.__init__(
            self, pool.user, pool.password, pool.database, pool.host, pool.port)
        if pool.charset is not None:
            self.set_encoding(pool.charset)
        self.reference_count = 0

    # def connect(self):
    #     pass

    def check_available(self):
        """
        Check the instance connection reference and expire
        """
        if self.pool.pool_dispose:
            return False
        if self.reference_count >= self.pool.max_reference:
            return False
        if self.connect_time + self.pool.expire_delta < datetime.now():
            return False
        return True

    def close(self):
        """
        Close busy connection
        """
        if self.check_available():
            self.pool.append_connection(self)
        else:
            self.real_close()
        LOCK.acquire()
        self.pool.connection_busy -= 1
        LOCK.release()

    def real_close(self):
        """
        Close connection
        """
        super(PoolController, self).close()
