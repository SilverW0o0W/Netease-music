# coding=utf-8
"""
For process control
"""

import threading
from multiprocessing import Pipe

LOCK = threading.Lock()


class StopSignal(object):
    """
    Stop the message receive process
    """

    def __init__(self, message):
        self.message = message


class ProcessHandler(object):
    """
    For controling process start and close.
    """

    def __init__(self, name=None, stop_signal=False):
        self.name = name
        self.stop_signal = stop_signal and not name
        self.pipe = Pipe(duplex=False)
        self.is_run = True

    def receive_stop(self, message):
        """
        Check message is stop signal
        :return: message
        """
        return isinstance(message, StopSignal)

    def dispose(self, message=None):
        """
        Send close message to log process.
        """
        LOCK.acquire()
        if self.is_run:
            self.pipe[1].send(StopSignal(message))
        self.is_run = False
        LOCK.release()

    def send_message(self, message):
        """
        Send message to pipe
        """
        if not self.is_run or not message:
            return
        LOCK.acquire()
        if self.is_run:
            self.pipe[1].send(message)
        LOCK.release()
