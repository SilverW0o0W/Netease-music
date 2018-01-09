# coding=utf-8
"""
Download lyric and convert to .lrc file.
"""
import requests
from bs4 import BeautifulSoup


class MusicSpider(object):
    """
    Base spider
    """

    headers = {
        'Host': 'music.163.com',
        'Connection': 'keep-alive',
        'Origin': 'http://music.163.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9'
    }

    def send_request(self, url, data=None, json=True):
        """
        Send comment request.
        """
        session = requests.Session()
        try:
            response = session.post(url, headers=self.headers, data=data)
            content = response.json() if json else response.content
        except BaseException, error:
            print error.message
        finally:
            session.close()
        return content

    # url = 'http://music.163.com/api/song/detail?ids=[{0}]'
    def request_info(self, song_id):
        """
        Crawl song information.
        """
        url = 'http://music.163.com/api/song/detail?ids=[{0}]'
        url = str.format(url, song_id)
        content = self.send_request(url)
        return content

    # url = 'http://music.163.com/api/song/lyric?id={0}&lv=1&tv=1'
    def request_lyric(self, song_id):
        """
        Send request and analysis response
        """
        url = 'http://music.163.com/api/song/lyric?id={0}&lv=1&tv=1'
        url = str.format(url, song_id)
        content = self.send_request(url)
        return content


if __name__ == '__main__':
    music_spider = MusicSpider()
    main_info = music_spider.request_info('567602')
    main_lyric = music_spider.request_lyric('567602')
