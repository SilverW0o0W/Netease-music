# coding=utf-8
"""
This file work for controlling mysql connection pool.
"""

import traceback
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
        self.max_usage = 10
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
        with LOCK:
            if self.pool_dispose:
                raise Exception('Pool close.')
            connection = self.queue_available.get(timeout=timeout)
            self.connection_busy += 1
        return connection

    def close(self):
        """
        Close available connection.
        """
        with LOCK:
            self.pool_dispose = True
            while self.queue_available.qsize() > 0:
                try:
                    controller = self.queue_available.get()
                    controller.real_close()
                except Exception:
                    print(traceback.format_exc())


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
        self.usage_times = 0

    # def connect(self):
    #     pass

    def check_available(self):
        """
        Check the instance connection reference and expire
        """
        if self.pool.pool_dispose:
            return False
        if self.usage_times >= self.pool.max_usage:
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
