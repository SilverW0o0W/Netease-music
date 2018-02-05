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
    return match_id(pattern, url)


def match_playlist_id(url):
    """
    Get playlist id from url
    https://music.163.com/playlist?id=11111111&userid=11111111
    """
    pattern = r'playlist\?id=\d+'
    return match_id(pattern, url)


def match_user_id(url):
    """
    Get user id from url
    https://music.163.com/song?id=11111111&userid=11111111
    https://music.163.com/playlist?id=11111111&userid=11111111
    """
    pattern = r'userid=\d+'
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
