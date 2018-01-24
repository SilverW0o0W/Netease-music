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
    pattern = 'song\?id=\d+'
    return re.search(pattern, url)


def match_playlist_id(url):
    """
    Get playlist id from url
    https://music.163.com/playlist?id=11111111&userid=11111111
    """
    pattern = 'playlist\?id=\d+'
    return re.search(pattern, url)
