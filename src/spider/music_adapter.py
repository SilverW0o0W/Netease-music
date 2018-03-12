# coding=utf-8
"""
This is an adapter class to convert request content to music instance.
"""
from music import *


def adapt_info(song_id, content):
    """
    Generate info from data.
    """
    info = SongInfo(song_id=song_id)
    try:
        song = content['songs'][0]
        # Get song name
        info.song_name = song['name']
        # Get artists
        get_artists(song['artists'], info)
        # Get album
        album = song['album']
        info.album_id = album['id']
        info.album_name = album['name']
    except KeyError, ex:
        print ex.message
    return info


def get_artists(artists, info):
    """
    Get artists info.
    """
    artists_tuple = ([], [])
    for artist in artists:
        artist_id = artist['id']
        artist_name = artist['name']
        artists_tuple[0].append(artist_id)
        artists_tuple[1].append(artist_name)
    info.artists = artists_tuple


def adapt_lyric(song_id, content, song_info):
    """
    Generate lyric from data.
    """
    try:
        song_lyric = SongLyric(song_id, info=song_info)
        # uncollected and nolyric
        song_lyric.lyric = content['lrc']['lyric'] if 'lrc' in content else None
        song_lyric.tlyric = content['tlyric']['lyric'] if 'tlyric' in content else None
    except KeyError, error:
        print error.message
    return song_lyric


def adapt_playlist(playlist_id, content):
    """
    Generate playlist from data.
    """
    try:
        playlist = Playlist(playlist_id)
        playlist.name = content['playlist']['name']
        playlist.creator = get_creator(content['playlist']['creator'])
        playlist.track_count = content['playlist']['trackCount']
        playlist.tracks = get_tracks(content['playlist']['tracks'])
    except KeyError, error:
        print error.message
    return playlist


def get_creator(content):
    """
    Get playlist creator
    """
    try:
        creator = User()
        creator.user_id = content['userId']
        creator.nickname = content['nickname']
        creator.gender = int(content['gender'])
        creator.signature = content['signature']
        creator.avatar_url = content['avatarUrl']
    except KeyError, error:
        print error.message
        creator = None
    return creator


def get_tracks(contents):
    """
    Get tracks
    """
    tracks = []
    for content in contents:
        try:
            song = SongBase(content['id'])
            song.info = SongInfo(song_id=song.song_id)
            get_track_info(content, song.info)
            tracks.append(song)
        except KeyError, error:
            print error.message
    return tracks


def get_track_info(content, info):
    """
    Get track info
    """
    try:
        info.song_name = content['name']
        get_artists(content['ar'], info)
        album = content['al']
        info.album_id = album['id']
        info.album_name = album['name']
    except KeyError, error:
        print error.message


def get_comment(content, song_id):
    """
    Generate comment from data.
    """
    try:
        comment = SongComment(song_id)
        comment.total = content['total']
        comment.comments = content['comments']
        comment.comment_more = content['more']
        if 'hotComments' in content:
            comment.hot_comments = content['hotComments']
            comment.hot_comment_more = content['moreHot']
    except KeyError, error:
        print error.message
    return comment


def get_hot_comment(content, song_id):
    """
    Generate hot comment from data.
    """
    try:
        hot_comment = SongHotComment()
        hot_comment.total = content['total']
        hot_comment.hot_comments = content['hotComments']
        hot_comment.hot_comment_more = content['hasMore']
    except KeyError, error:
        print error.message
    return hot_comment
