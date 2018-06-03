# coding=utf-8
"""
Common method for music
"""
import re


def match_url(url):
    """
    Get id type in url.
    0b00001: Song
    0b00010: Playlist
    0b00100: Album
    0b01000: Artist
    :param url:
    :return: dict: 'type' 'id' 'user'
    """
    attr = {}
    url_id = None
    url_type = 0b0
    user = match_user(url)
    for type_index, match in match_mapping.items():
        matched_id = match(url)
        if matched_id:
            url_id = matched_id
            url_type |= type_index
            break
    attr['type'] = url_type
    attr['id'] = url_id
    attr['user'] = user
    return attr


def match_user(url):
    """
    Get user id from url
    https://music.163.com/song?id=11111111&userid=11111111
    https://music.163.com/playlist?id=11111111&userid=11111111
    """
    pattern = r'userid=\d+'
    return match_id(pattern, url)


def match_song(url):
    """
    Get song id from url
    https://music.163.com/song?id=11111111&userid=11111111
    """
    pattern = r'song\?id=\d+'
    return match_id(pattern, url)


def match_playlist(url):
    """
    Get playlist id from url
    https://music.163.com/playlist?id=11111111&userid=11111111
    """
    pattern = r'playlist\?id=\d+'
    return match_id(pattern, url)


def match_album(url):
    """
    Get album id from url
    http://music.163.com/album?id=11111&userid=11111111
    """
    pattern = r'album\?id=\d+'
    return match_id(pattern, url)


def match_artist(url):
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

    def wrapper(p, value):
        """
        Match value
        """
        match = re.search(p, value)
        match = None if not match else match.group()
        return match

    matched_id = wrapper(pattern, url)
    if not matched_id:
        return None
    return wrapper(r'\d+', matched_id)


match_mapping = {
    0b00001: match_song,
    0b00010: match_playlist,
    0b00100: match_album,
    0b01000: match_artist,
}
