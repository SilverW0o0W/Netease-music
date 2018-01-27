# coding=utf-8
"""
Common method for music
"""
import re


def match_song_id(url):
    """
    Get song id from url
    https://music.163.com/song?id=11111111&userid=11111111
    """
    pattern = r'song\?id=\d+'
    matches = re.search(pattern, url)
    if not matches:
        return None
    return re.search(r'\d+', matches.group()).group()


def match_playlist_id(url):
    """
    Get playlist id from url
    https://music.163.com/playlist?id=11111111&userid=11111111
    """
    pattern = r'playlist\?id=\d+'
    matches = re.search(pattern, url)
    if not matches:
        return None
    return re.search(r'\d+', matches.group()).group()


if __name__ == '__main__':
    test_url = 'https://music.163.com/song?id=11111111&userid=11111111'
    id = match_song_id(test_url)
