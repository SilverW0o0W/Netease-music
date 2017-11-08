#coding = utf-8
"""
This is music information class
"""


class SongBase(object):
    """
    For base song information
    """

    def __init__(self, song_id=None, artist_ids=None, album_id=None):
        self.song_id = song_id
        self.artist_ids = artist_ids
        self.album_id = album_id


class SongComment(SongBase):
    """
    For comment content
    """

    def __init__(self, song_id=None, artist_ids=None, album_id=None):
        SongBase.__init__(self, song_id, artist_ids, album_id)
        self.comment_total = 0
        self.offset = 0
        self.comments = None
        self.hot_comments = None
        self.comment_more = False
        self.hot_comment_more = False


class SongHotComment(SongBase):
    """
    For hot comment content
    """

    def __init__(self, song_id=None, artist_ids=None, album_id=None):
        SongBase.__init__(self, song_id, artist_ids, album_id)
        self.comment_total = 0
        self.hot_comments = None
        self.hot_comment_more = False


class CommentDetail(object):
    """
    For single comment
    """

    def __init__(self, song_id, comment):
        self.song_id = song_id
        self.comment_id = comment['commentId'] if 'commentId' in comment else None
        self.be_replied = comment['beReplied'] if 'beReplied'in comment else None
        self.content = comment['content'] if 'content' in comment else None
        self.time = comment['time'] if 'time' in comment else None
        self.liked_count = comment['likedCount'] if 'likedCount' in comment else None
        user = comment['user'] if 'user' in comment else None
        self.user_id = user['userId'] if 'userId' in user else None
