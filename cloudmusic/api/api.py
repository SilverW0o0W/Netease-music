# coding=utf-8
"""
Request music api
"""
from __future__ import print_function
import traceback
import requests
from urllib3.exceptions import HTTPError
import platform

from cloudmusic.api import encrypto

_headers = {
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

timeout = 15


def send_request(method, url, data=None, json=True, cookies=None, proxies=None):
    """
    Send comment request.
    """
    with requests.Session() as session:
        try:
            response = session.request(
                method=method,
                url=url,
                headers=_headers,
                data=data,
                proxies=proxies,
                timeout=timeout,
                verify=False,
                cookies=cookies,
            )
            content = response.json() if json else response.content
        except (requests.RequestException, HTTPError, ValueError) as ex:
            print(proxies, end=''),
            print(ex)
            content = None
        except Exception:
            print(traceback.format_exc())
    return content


# url = 'http://music.163.com/api/song/detail?ids=[{}]'
def request_songs(song_ids, proxies=None):
    """
    Crawl song information.
    """
    str_song_ids = ",".join(map(lambda value: str(value), song_ids))
    url = 'http://music.163.com/api/song/detail?ids=[{}]'.format(str_song_ids)
    data = send_request(method='POST', url=url, proxies=proxies)
    return {
        song["id"]: song
        for song in data.get("songs", [])
    }


# url = 'http://music.163.com/api/song/lyric?id={0}&lv=1&tv=1'
def request_lyric(song_id, proxies=None):
    """
    Crawl song lyric.
    """
    url = 'http://music.163.com/api/song/lyric?id={0}&lv=1&tv=1'
    url = str.format(url, song_id)
    content = send_request(method='POST', url=url, proxies=proxies)
    return content


# url = 'http://music.163.com/weapi/v3/playlist/detail'
def request_playlist(playlist_id, proxies=None):
    """
    Crawl playlist detail.
    """
    url = 'https://music.163.com/weapi/v3/playlist/detail'
    # data = {'id': playlist_id, 'total': 'true', 'csrf_token': csrf, 'limit': 1000, 'n': 1000, 'offset': 0}
    text = {
        'id': playlist_id,
        'total': 'true',
        'limit': 1000,
        'n': 1000,
        'offest': 0
    }
    cookies = dict(
        os=platform.system()
    )
    data = encrypto.generate_data(text)
    content = send_request(method='POST', url=url, data=data, cookies=cookies, proxies=proxies)
    return content


# url = 'http://music.163.com/api/artist/{}'
def request_artist(artist_id, proxies=None):
    """
    Crawl song information.
    """
    url = 'http://music.163.com/api/artist/{}'.format(artist_id)
    content = send_request(method='GET', url=url, proxies=proxies)
    return content


# url = 'http://music.163.com/api/album/{}'
def request_album(album_id, proxies=None):
    """
    Crawl album information.
    :param album_id:
    :return: JSON content
    """
    url = 'http://music.163.com/api/album/{}'.format(album_id)
    content = send_request(method='GET', url=url, proxies=proxies)
    return content
