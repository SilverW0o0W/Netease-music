# coding=utf-8
"""
This is for crawling proxy ip from ip website.
"""

from datetime import datetime, timedelta

import urllib2
from bs4 import BeautifulSoup
from proxy_ip import ProxyIP


class ProxySpider(object):
    """
    This is the class for crawling ip from proxy site
    """
    __user_agent = 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0'
    __header = {}
    __header['User-Agent'] = __user_agent

    def __init__(self, logger):
        self.last_page = 0
        self.last_crawl_time = None
        self.refresh_minutes = 10
        self.logger = logger

    def get_page_number(self, page_count):
        """
        If not reach proxy's site refresh time. Return next page.
        Else return new page.
        """
        delta = timedelta(minutes=self.refresh_minutes)
        if not self.last_crawl_time or datetime.now() >= self.last_crawl_time + delta:
            self.last_crawl_time = datetime.now()
            self.last_page = 0
        page = self.last_page
        self.last_page += page_count
        return page

    def get_proxy_ip(self, need_https, page_count=2):
        """
        Get proxy ip
        """
        proxy_ip_list = []
        current_page = self.get_page_number(page_count)
        page_count += current_page + 1
        for i in range(current_page + 1, page_count):
            try:
                url = 'http://www.xicidaili.com/nn/' + str(i)
                self.logger.debug('Start to crawl url: %s' % url)
                req = urllib2.Request(url, headers=self.__header)
                res = urllib2.urlopen(req).read()
                soup = BeautifulSoup(res, "html.parser")
                ips = soup.findAll('tr')
                for x in range(1, len(ips)):
                    ip = ips[x]
                    tds = ip.findAll("td")
                    is_https = tds[5].contents[0] == 'HTTPS'
                    ip_temp = ProxyIP(tds[1].contents[0],
                                      tds[2].contents[0], is_https)
                    if need_https == ip_temp.is_https:
                        proxy_ip_list.append(ip_temp)
            except StandardError, error:
                self.logger.warn(error.message)
                continue
        self.logger.debug('Crawl ip count: %s' % len(proxy_ip_list))
        return proxy_ip_list
