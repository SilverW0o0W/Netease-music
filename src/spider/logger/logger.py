# coding=utf-8
"""
This file for controlling multi-process logging 
"""

import logging
import logging.config
from multiprocessing import Process
from .process_handler import ProcessHandler

CRITICAL = 50
FATAL = CRITICAL
ERROR = 40
WARNING = 30
WARN = WARNING
INFO = 20
DEBUG = 10
NOTSET = 0


class Logger(ProcessHandler):
    """
    Wrapper logging instance.
    """

    def __init__(self, name='log.log', config=None):
        ProcessHandler.__init__(self)
        self.name = name
        self.config = config
        log_process = Process(target=self.run_logger,
                              args=(self.pipe[0], self.name, self.config,))
        log_process.start()

    def run_logger(self, pipe, name, config):
        if config:
            logging.config.dictConfig(config)
        else:
            logging.basicConfig(format='%(asctime)s %(levelname)s %(message)s',
                                datefmt='%d %b %Y %H:%M:%S',
                                filemode='a',
                                filename=name,
                                level='DEBUG')
        logger = logging.getLogger(name) if name else logging.getLogger()
        while True:
            message = pipe.recv()
            if self.receive_stop(message):
                break
            logger.log(message[0], message[1])

    # def setLevel(self, level):
    #     """
    #     Set the logging level of this logger.
    #     """
    #     pass

    def debug(self, msg, *args, **kwargs):
        """
        Debug level
        """
        self.log(DEBUG, msg, *args, **kwargs)

    def info(self, msg, *args, **kwargs):
        """
        Info level
        """
        self.log(INFO, msg, *args, **kwargs)

    def warn(self, msg, *args, **kwargs):
        """
        Warning level
        """
        self.log(WARNING, msg, *args, **kwargs)

    def warning(self, msg, *args, **kwargs):
        """
        Warning level
        """
        self.log(WARNING, msg, *args, **kwargs)

    def error(self, msg, *args, **kwargs):
        """
        Error level
        """
        self.log(ERROR, msg, *args, **kwargs)

    def exception(self, msg, *args, **kwargs):
        """
        Exception level
        """
        kwargs['exc_info'] = 1
        self.error(msg, *args, **kwargs)

    def critical(self, msg, *args, **kwargs):
        """
        Critical level
        """
        self.log(CRITICAL, msg, *args, **kwargs)

    def log(self, level, msg, *args, **kwargs):
        """
        Logger level
        """
        if not self.is_run:
            return
        msg = msg.format(*args, **kwargs)
        message = [level, msg]
        self.send_message(message)
