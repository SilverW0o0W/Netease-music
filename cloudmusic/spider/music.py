# coding=utf-8
"""
This is music information class
"""


class Song(object):
    """
    Song
    """

    def __init__(self, song_id):
        self.song_id = song_id
        self.name = None
        self.artists = ()
        self.album = None


class Playlist(object):
    """
    Playlist
    """

    def __init__(self, playlist_id):
        self.playlist_id = playlist_id
        self.name = None
        self.creator = None
        self.track_count = -1
        self.tracks = ()


class Artist(object):
    """
    Artist
    """

    def __init__(self, artist_id):
        self.artist_id = artist_id
        self.name = None
        self.music_size = -1
        self.album_size = -1
        self.mv_size = -1
        # self.alias = None
        self.brief_desc = None
        self.hot_songs = ()


class Album(object):
    """
    Album
    """

    def __init__(self, album_id):
        self.album_id = album_id
        self.name = None
        self.artists = ()
        self.size = -1
        self.songs = ()


class User(object):
    """
    User
    """

    def __init__(self, user_id):
        self.user_id = user_id
        self.nickname = None
        self.gender = None
        self.signature = None
        self.avatar_url = None


class CommentSet(object):
    """
    Comment set
    """

    def __init__(self, song_id):
        self.song_id = song_id
        self.comments = ()
        self.hot_comments = ()
        self.more = False
        self.more_hot = False
        self.total = -1
        self.offset = -1


class HotCommentSet(object):
    """
    Hot comment set
    """

    def __init__(self, song_id):
        self.song_id = song_id
        self.has_more = False
        self.hot_comments = ()
        self.total = -1
        self.offset = -1


class Comment(object):
    """
    Comment
    """

    def __init__(self, comment_id, song_id):
        self.comment_id = comment_id
        self.song_id = song_id
        self.be_replied = None
        self.content = None
        self.liked = False
        self.liked_count = -1
        self.time = -1
        self.user = None


class Lyric(object):
    """
    For lyric.
    """

    def __init__(self, song_id):
        self.song_id = song_id
        self.song = None
        self.lyric = None
        self.tlyric = None
