# coding=utf-8
"""
This is the file for proxy ip class
"""

from datetime import datetime, timedelta


class Proxy(object):
    """
    This is the class for ip information.
    """

    def __init__(self, ip, port, https, available=False, verified=None, created=None, id=None):
        self.id = id
        self.ip = ip
        self.port = port
        self.https = https
        self.unique_id = self.unique_id()
        self.available = available
        now = datetime.now()
        self.verified = verified if verified else now
        self.created = created if created else now

    def ip_port(self):
        """
        Get ip:port string.
        """
        return self.ip + ':' + self.port

    def unique_id(self):
        unique_id = ''
        nums = self.ip.split('.')
        for num in nums:
            unique_id += num.zfill(3)
        unique_id += self.port
        unique_id += '1' if self.https else '0'
        return unique_id


class ProxySet(object):
    """
    This is the set class for proxy ip
    """

    _EXPIRE_TIME = 20

    def __init__(self, proxies=None):
        self.proxies = [] if not proxies else proxies
        self.create_time = datetime.now()

    def available(self):
        """
        Check set count and available time
        """
        time_now = datetime.now()
        if len(self.proxies) < 1:
            return False
        delta = timedelta(seconds=self._EXPIRE_TIME)
        return time_now < self.create_time + delta

    def append(self, proxy_ip):
        """
        Append proxy ip
        """
        self.proxies.append(proxy_ip)

    def pop(self):
        """
        Get a proxy ip
        """
        return self.proxies.pop()
