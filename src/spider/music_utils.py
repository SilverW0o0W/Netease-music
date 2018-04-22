# coding=utf-8
"""
Common method for music
"""
import re


def match_type(url):
    """
    Get id type in url.
    User:     0b00001
    Song:     0b00010
    Playlist: 0b00100
    Album:    0b01000
    Artist:   0b10000
    :param url:
    :return:The bit signal of type
    """
    id_type = 0b0
    if match_user_id(url):
        id_type = id_type | 0b00001
    if match_song_id(url):
        id_type = id_type | 0b00010
    elif match_playlist_id(url):
        id_type = id_type | 0b00100
    elif match_album_id(url):
        id_type = id_type | 0b01000
    elif match_artist_id(url):
        id_type = id_type | 0b10000
    return id_type


def match_user_id(url):
    """
    Get user id from url
    https://music.163.com/song?id=11111111&userid=11111111
    https://music.163.com/playlist?id=11111111&userid=11111111
    """
    pattern = r'userid=\d+'
    return match_id(pattern, url)


def match_song_id(url):
    """
    Get song id from url
    https://music.163.com/song?id=11111111&userid=11111111
    """
    pattern = r'song\?id=\d+'
    return match_id(pattern, url)


def match_playlist_id(url):
    """
    Get playlist id from url
    https://music.163.com/playlist?id=11111111&userid=11111111
    """
    pattern = r'playlist\?id=\d+'
    return match_id(pattern, url)


def match_album_id(url):
    """
    Get album id from url
    http://music.163.com/album?id=11111&userid=11111111
    """
    pattern = r'album\?id=\d+'
    return match_id(pattern, url)


def match_artist_id(url):
    """
    Get artist id from url
    http://music.163.com/#/artist?id=11111
    """
    pattern = r'artist\?id=\d+'
    return match_id(pattern, url)


def match_id(pattern, url):
    """
    Get id from url
    """

    def in_match(pattern, value):
        """
        Match value
        """
        match = re.search(pattern, value)
        match = None if not match else match.group()
        return match

    matched_id = in_match(pattern, url)
    if not matched_id:
        return None
    return in_match(r'\d+', matched_id)
