"""
This is the file for proxy ip class
"""

from datetime import datetime, timedelta


class ProxyIP(object):
    """
    This is the class for ip information.
    """

    def __init__(self, ip, port, https, available=False, verify_time=None, create_time=None, db_id=None):
        self.db_id = db_id
        self.ip = ip
        self.port = port
        self.https = https
        self.available = available
        self.verify_time = verify_time if verify_time is not None else datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        self.create_time = create_time if create_time is not None else datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    def get_ip_port(self):
        """
        Get ip:port string.
        """
        return self.ip + ':' + self.port


class ProxyIPSet(object):
    """
    This is the set class for proxy ip
    """

    __available_time = 2

    def __init__(self, ip_list=None):
        self.ip_list = [] if ip_list is None else ip_list
        self.create_time = datetime.now()

    def count(self):
        """
        Get set count
        """
        return len(self.ip_list)

    def available(self):
        """
        Check set count and available time
        """
        time_now = datetime.now()
        if self.count() < 1:
            return False
        delta = timedelta(minutes=self.__available_time)
        return time_now < self.create_time + delta

    def append(self, proxy_ip):
        """
        Append proxy ip
        """
        self.ip_list.append(proxy_ip)

    def pop(self):
        """
        Get a proxy ip
        """
        return self.ip_list.pop()
