# coding=utf-8
"""
This is for crawling proxy ip from ip website.
"""

from datetime import datetime, timedelta

import requests
from bs4 import BeautifulSoup
from proxy import Proxy


class ProxySpider(object):
    """
    This is the class for crawling ip from proxy site
    """
    _user_agent = 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0'
    _header = {}
    _header['User-Agent'] = _user_agent

    def __init__(self, logger):
        self.last_page = 0
        self.last_crawl = datetime(year=1970)
        self.refresh_minutes = 2
        self.logger = logger

    def get_page_number(self, page_count):
        """
        If not reach proxy's site refresh time. Return next page.
        Else return new page.
        """
        delta = timedelta(minutes=self.refresh_minutes)
        if datetime.now() >= self.last_crawl + delta or self.last_page > 10:
            self.last_crawl = datetime.now()
            self.last_page = 0
        page = self.last_page
        self.last_page += page_count
        return page

    def get_proxies(self, https, page_count=2):
        """
        Get proxy ip
        """
        proxies = []
        current_page = self.get_page_number(page_count)
        page_count += current_page + 1
        for i in range(current_page + 1, page_count):
            try:
                url = 'http://www.xicidaili.com/nn/' + str(i)
                self.logger.debug('Start to crawl url: %s' % url)
                response = requests.get(url, headers=self._header)
                if response.status_code != 200:
                    self.logger.warn(
                        "Response code is {0}.", response.status_code)
                soup = BeautifulSoup(response.text, "html.parser")
                ips = soup.findAll('tr')
                for x in range(1, len(ips)):
                    ip = ips[x]
                    tds = ip.findAll("td")
                    is_https = tds[5].contents[0] == 'HTTPS'
                    proxy_temp = Proxy(tds[1].contents[0], tds[2].contents[0], is_https)
                    if https == proxy_temp.https:
                        proxies.append(proxy_temp)
            except StandardError, error:
                self.logger.warn(error.message)
                continue
        self.logger.info('Crawl ip count: %s' % len(proxies))
        return proxies
