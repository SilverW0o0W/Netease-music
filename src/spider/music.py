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


class Comment(object):
    """
    For comment content
    """

    @classmethod
    def convert_details(cls, song_comment):
        """
        Convert SongComment to CommentDetail
        """
        details = []
        for comment in song_comment.comments:
            detail = Comment(song_comment.song_id, comment)
            details.append(detail)
        return details


class Comment(object):
    """
    For single comment
    """

    def __init__(self, song_id, comment_id=None, comment=None):
        self.comment_id = comment['commentId'] if 'commentId' in comment else None
        be_replied = comment['beReplied'] if 'beReplied' in comment else None
        self.get_replied(be_replied)
        self.content = comment['content'] if 'content' in comment else None
        self.time = long(comment['time']) if 'time' in comment else None
        self.liked_count = comment['likedCount'] if 'likedCount' in comment else None
        self.user_id = self.get_user_id(comment)

    def get_replied(self, be_replied):
        if not be_replied:
            self.replied_user_id = None
            self.replied_content = None
        else:
            be_replied = be_replied[0]
            self.replied_user_id = self.get_user_id(be_replied)
            self.replied_content = be_replied['content'] if 'content' in be_replied else None

    def get_user_id(self, data):
        user = data['user'] if 'user' in data else None
        return user['userId'] if user != None and 'userId' in user else None


class Lyric(object):
    """
    For lyric.
    """

    def __init__(self, song_id):
        self.song_id = song_id
        self.song = None
        self.lyric = None
        self.tlyric = None
