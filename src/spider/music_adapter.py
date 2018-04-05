# coding=utf-8
"""
This is an adapter class to convert request content to music instance.
"""
from music import *


# import functools


# def init_id(func):
#     @functools.wraps(func)
#     def wrapper(*args, **kw):
#         if not kw['object_id']:
#             kw['object_id'] = args['content']['id']
#         return func(*args, **kw)
#
#     return wrapper


def adapt_song(content, object_id):
    """
    Generate info from data.
    """
    try:
        song = Song(object_id)
        song_content = content['songs'][0]
        # Get song name
        song.name = song_content['name']
        # Get artists
        song.artists = _get_artists(song_content['artists'])
        # Get album
        song.album = adapt_album(song_content, song_content['album']['id'], has_songs=False)
    except KeyError, ex:
        print ex.message
    return song


def _get_artists(contents):
    """
    Get artists info.
    """
    artists_list = [
        adapt_artist({'artist': content}, content['id'], all_size=False, hot_songs=False)
        for content in contents
    ]
    return tuple(artists_list)


def adapt_lyric(content, object_id, song=None):
    """
    Generate lyric from data.
    """
    try:
        lyric = Lyric(object_id)
        lyric.song = song
        # uncollected and nolyric
        lyric.lyric = content['lrc']['lyric'] if 'lrc' in content else None
        lyric.tlyric = content['tlyric']['lyric'] if 'tlyric' in content else None
    except KeyError, error:
        print error.message
    return lyric


def adapt_playlist(content, object_id):
    """
    Generate playlist from data.
    """
    try:
        playlist = Playlist(object_id)
        playlist.name = content['playlist']['name']
        playlist.creator = adapt_user(content['playlist']['creator'])
        playlist.track_count = content['playlist']['trackCount']
        playlist.tracks = _get_tracks(content['playlist']['tracks'])
    except KeyError, error:
        print error.message
    return playlist


def adapt_user(content):
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


def _get_tracks(contents):
    """
    Get tracks
    """
    tracks = []
    for content in contents:
        try:
            song = Song(content['id'])
            # Get song name
            song.name = content['name']
            # Get artists
            song.artists = _get_artists(content['ar'])
            # Get album
            album = Album(content['al']['id'])
            album.name = content['al']['name']
            song.album = album
            tracks.append(song)
        except KeyError, error:
            print error.message
    return tuple(tracks)


def _get_comment(content, song_id):
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


def _get_hot_comment(content, song_id):
    """
    Generate hot comment from data.
    """
    try:
        hot_comment = SongHotComment(song_id)
        hot_comment.total = content['total']
        hot_comment.hot_comments = content['hotComments']
        hot_comment.hot_comment_more = content['hasMore']
    except KeyError, error:
        print error.message
    return hot_comment


def adapt_artist(content, object_id, all_size=True, hot_songs=False):
    """
    Generate artist from data.
    :param content: JSON content
    :param object_id: artist id
    :param all_size: get work size
    :param hot_songs: get hot songs
    :return: Artist instance
    """
    try:
        artist = Artist(object_id)
        artist.name = content['artist']['name']
        artist.brief_desc = content['artist']['briefDesc']
        if all_size:
            artist.music_size = content['artist']['musicSize']
            artist.album_size = content['artist']['albumSize']
            artist.mv_size = content['artist']['mvSize']
        artist.hot_songs = _get_hot_songs(content['hot_songs']) if hot_songs else ()
    except KeyError, error:
        print error.message
    return artist


def _get_hot_songs(content):
    hot_songs = dict()
    for song in content:
        pass


def adapt_album(content, object_id, has_songs=True):
    """
    Generate album from data.
    :param content: JSON content
    :param object_id: album id
    :param has_songs: content has 'songs' attribute
    :return: album instance
    """
    try:
        album = Album(object_id)
        album.name = content['album']['name']
        album.size = content['album']['size']
        album.artists = _get_artists(content['album']['artists'])
        album.songs = () if has_songs else ()
    except KeyError, error:
        print error.message
    return album
