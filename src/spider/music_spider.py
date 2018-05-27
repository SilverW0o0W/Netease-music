# coding=utf-8
"""
Request music api
"""
from __future__ import print_function
import traceback
import requests
from . import encrypto


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
        'Referer': 'http://music.163.com/search/',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9'
    }

    def __init__(self, timeout=15):
        self.timeout = timeout

    def send_request(self, method, url, data=None, json=True, proxies=None):
        """
        Send comment request.
        """
        with requests.Session() as session:
            try:
                response = session.request(
                    method=method,
                    url=url,
                    headers=self.headers,
                    data=data,
                    proxies=proxies,
                    timeout=self.timeout
                )
                content = response.json() if json else response.content
            except (requests.RequestException, ValueError) as ex:
                print(proxies, end=''),
                print(ex.message)
                content = None
            except Exception:
                print(traceback.format_exc())
        return content

    # url = 'http://music.163.com/api/song/detail?ids=[{}]'
    def request_song(self, song_id):
        """
        Crawl song information.
        """
        url = 'http://music.163.com/api/song/detail?ids=[{}]'.format(song_id)
        content = self.send_request(method='POST', url=url)
        return content

    # url = 'http://music.163.com/api/song/lyric?id={0}&lv=1&tv=1'
    def request_lyric(self, song_id):
        """
        Crawl song lyric.
        """
        url = 'http://music.163.com/api/song/lyric?id={0}&lv=1&tv=1'
        url = str.format(url, song_id)
        content = self.send_request(method='POST', url=url)
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
        content = self.send_request(method='POST', url=url, data=data)
        return content

    # url = 'http://music.163.com/api/artist/{}'
    def request_artist(self, artist_id):
        """
        Crawl song information.
        """
        url = 'http://music.163.com/api/artist/{}'.format(artist_id)
        content = self.send_request(method='GET', url=url)
        return content

    # url = 'http://music.163.com/api/album/{}'
    def request_album(self, album_id):
        """
        Crawl album information.
        :param album_id:
        :return: JSON content
        """
        url = 'http://music.163.com/api/album/{}'.format(album_id)
        content = self.send_request(method='GET', url=url)
        return content
