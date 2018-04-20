# coding=utf-8
"""
This is an adapter class to convert request content to music instance.
"""
from music import *
import functools


def convert_str_id(func):
    @functools.wraps(func)
    def wrapper(*args, **kw):
        object_id = str(args[1])
        return func(args[0], object_id, **kw)

    return wrapper


@convert_str_id
def adapt_song(content, object_id):
    """
    Generate info from data.
    """
    # For request song
    content = content['songs'][0] if 'songs' in content else content

    try:
        song = Song(object_id)
        # Get song name
        song.name = content['name']
        # Get artists
        song.artists = _get_artists(content['artists'])
        # Get album
        song.album = adapt_album(content, content['album']['id'])
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


@convert_str_id
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


@convert_str_id
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


def adapt_user(content, brief=False):
    """
    Get playlist creator
    """
    try:
        user = User(str(content['userId']))
        user.nickname = content['nickname']
        user.avatar_url = content['avatarUrl']
        if not brief:
            user.gender = content['gender']
            user.signature = content['signature']
    except KeyError, error:
        print error.message
    return user


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


@convert_str_id
def adapt_artist(content, object_id, all_size=True, hot_songs=True):
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
        artist.hot_songs = ()
        if hot_songs:
            artist.hot_songs = tuple(
                [
                    adapt_song(content, content['id'])
                    for content in content['hotSongs']
                ]
            )
    except KeyError, error:
        print error.message
    return artist


@convert_str_id
def adapt_album(content, object_id):
    """
    Generate album from data.
    :param content: JSON content
    :param object_id: album id
    :return: album instance
    """
    try:
        album = Album(object_id)
        album.name = content['album']['name']
        album.size = content['album']['size']
        album.artists = _get_artists(content['album']['artists'])
        album.songs = ()
        if 'songs' in content['album'] and len(content['album']['songs']) > 0:
            album.songs = tuple(
                [
                    adapt_song(song, song['id'])
                    for song in content['album']['songs']
                ]
            )
    except KeyError, error:
        print error.message
    return album


@convert_str_id
def adapt_comment_set(content, object_id):
    """
    Generate comment set from data.
    :param content: JSON content
    :param object_id: song id
    :return: comment set instance
    """
    try:
        comment_set = CommentSet(object_id)
        comment_set.total = content['total']
        comment_set.more = content['more']
        comment_set.comments = adapt_comments(content['comments'], object_id)
        if 'hotComments' in content:
            comment_set.more_hot = content['moreHot']
            comment_set.hot_comments = adapt_comments(content['hotComments'], object_id)
    except KeyError, error:
        print error.message
    return comment_set


@convert_str_id
def adapt_hot_comment_set(content, object_id):
    """
    Generate hot comment set from data.
    :param content: JSON content
    :param object_id: song id
    :return: hot comment set instance
    """
    try:
        hot_comment_set = HotCommentSet(object_id)
        hot_comment_set.total = content['total']
        hot_comment_set.has_more = content['hasMore']
        hot_comment_set.hot_comments = adapt_comments(content['hotComments'], object_id)
    except KeyError, error:
        print error.message
    return hot_comment_set


@convert_str_id
def adapt_comments(contents, song_id):
    return tuple(
        [
            adapt_comment(content, content['commentId'], song_id=song_id)
            for content in contents
        ]
    )


@convert_str_id
def adapt_comment(content, object_id, song_id=None):
    """
    Generate comment from data.
    :param content: JSON content
    :param object_id: comment id
    :param song_id: song id
    :return: comment instance
    """
    try:
        comment = Comment(object_id, song_id)
        comment.be_replied = adapt_replied_comment(content['beReplied'])
        comment.content = content['content']
        comment.liked = content['liked']
        comment.liked_count = content['likedCount']
        comment.time = content['time']
        comment.user = adapt_user(content['user'], brief=True)
    except KeyError, error:
        print error.message
    return comment


def adapt_replied_comment(content):
    """
    Generate replied comment from data.
    :param content: JSON content
    :return: comment instance
    """
    if not content:
        return None
    try:
        comment = Comment(None, None)
        comment.be_replied = None
        comment.content = content[0]['content']
        comment.user = adapt_user(content[0]['user'], brief=True)
    except KeyError, error:
        print error.message
    return comment
