# coding=utf-8
"""
Request music api
"""
import encrypto
import requests


# from bs4 import BeautifulSoup


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

    def send_request(self, url, data=None, json=True, proxies=None):
        """
        Send comment request.
        """
        with requests.Session() as session:
            try:
                response = session.post(
                    url, headers=self.headers, data=data, proxies=proxies)
                content = response.json() if json else response.content
            except requests.RequestException, ex:
                print ex.message
                content = None
            except ValueError, ex:
                print ex.message
                content = None
            except BaseException, ex:
                print ex.message
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
        Crawl song lyric.
        """
        url = 'http://music.163.com/api/song/lyric?id={0}&lv=1&tv=1'
        url = str.format(url, song_id)
        content = self.send_request(url)
        return content

    # url = 'http://music.163.com/weapi/v3/playlist/detail'
    def request_playlist(self, playlist_id):
        """
        Crawl playlist detail.
        """
        url = 'http://music.163.com/weapi/v3/playlist/detail'
        # data = {'id': playlist_id, 'total': 'true', 'csrf_token': csrf, 'limit': 1000, 'n': 1000, 'offset': 0}
        text = {
            'id': playlist_id,
            'total': 'true',
            # 'limit': 1000,
            'n': 10000
            # 'offset': 0
        }
        data = encrypto.generate_data(text)
        content = self.send_request(url, data)
        return content
