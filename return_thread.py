"""
This is the class for the thread can return value.
"""

import threading


class ReturnThread(threading.Thread):
    """
    The return value thread class
    """

    def __init__(self, func, args=()):
        super(ReturnThread, self).__init__()
        self.func = func
        self.args = args

    def run(self):
        """
        Overload the run method
        """
        try:
            if self.__target:
                self.result = self.__target(*self.__args, **self.__kwargs)
        finally:
            # Avoid a refcycle if the thread is running a function with
            # an argument that has a member that points to the thread.
            del self.__target, self.__args, self.__kwargs

    def get_result(self):
        """
        Get thread result
        """
        try:
            # need join method
            if self.is_alive():
                return None
            else:
                return self.result
        except Exception:
            return None
