# coding=utf-8
"""
This is for crawling proxy ip from ip website.
"""

import traceback
from datetime import datetime, timedelta

import requests
from bs4 import BeautifulSoup
from .proxy_pool import Proxy


class Spider(object):
    """
    This is the class for crawling ip from proxy site
    """
    _user_agent = 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0'
    _header = {'User-Agent': _user_agent}
    _http_url = 'http://www.xicidaili.com/wt/'
    _https_url = 'http://www.xicidaili.com/wn/'
    _anon_url = 'http://www.xicidaili.com/nn/'

    def __init__(self, logger):
        self.last_page = 0
        self.last_crawl = datetime(year=1970, month=1, day=1)
        self.delta = timedelta(minutes=2)
        self.logger = logger

    def get_page(self):
        """
        If not reach proxy's site refresh time. Return next page.
        Else return new page.
        """
        now = datetime.now()
        if now > self.last_crawl + self.delta or self.last_page > 5:
            self.last_page = 0
        self.last_page += 1
        self.last_crawl = now
        return self.last_page

    def get_proxies(self, https):
        """
        Get proxy ip
        """
        try:
            page = self.get_page()
            url = self._anon_url + str(page)
            self.logger.debug('Start to crawl url: %s' % url)
            response = requests.get(url, headers=self._header)
            if response.status_code != 200:
                self.logger.warn("Response code is {0}.", response.status_code)
            soup = BeautifulSoup(response.text, "html.parser")
            ip_table = soup.find(id='ip_list')
            ips = ip_table.findAll('tr')
            proxies = self.convert_proxies(ips)
            proxies = [proxy for proxy in proxies if proxy.https == https] if https else proxies
            self.logger.info('Crawl ip count: %s' % len(proxies))
            return proxies
        except Exception:
            self.logger.warn(traceback.format_exc())

    @classmethod
    def convert_proxies(cls, ips):
        return list(filter(None, [cls.convert_proxy(ip) for ip in ips[1:]]))

    @staticmethod
    def convert_proxy(ip):
        tds = ip.findAll("td")
        if not tds[4].contents[0] == u'高匿':
            return
        is_https = tds[5].contents[0] == 'HTTPS'
        return Proxy(tds[1].contents[0], tds[2].contents[0], is_https)
