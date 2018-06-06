# coding=utf-8
"""
For process control
"""

import threading
from multiprocessing import Pipe
import functools

LOCK = threading.Lock()


class StopSignal(object):
    """
    Stop the message receive process
    """

    def __init__(self, message):
        self.message = message


def process_checker(func):
    @functools.wraps(func)
    def wrapper(self, *args, **kwargs):
        pipe = args[0]
        func(self, *args, **kwargs)
        pipe.send(StopSignal('Stop'))

    return wrapper


class ProcessHandler(object):
    """
    For controlling process start and close.
    """

    def __init__(self, name=None, stop_signal=False):
        self.name = name
        self.stop_signal = stop_signal and not name
        self.sub_pipe, self.main_pipe = Pipe()
        self.allow_sending = True

    @staticmethod
    def receive_stop(message):
        """
        Check message is stop signal
        :return: message
        """
        return isinstance(message, StopSignal)

    def dispose(self, message=None):
        """
        Send close message to log process.
        """
        with LOCK:
            if self.allow_sending:
                self.main_pipe.send(StopSignal(message))
            self.allow_sending = False
        self.join()

    def send(self, message):
        """
        Send message to pipe
        """
        if not self.allow_sending or message is None:
            return
        with LOCK:
            if self.allow_sending:
                self.main_pipe.send(message)

    def join(self):
        while True:
            message = self.main_pipe.recv()
            if self.receive_stop(message):
                break
