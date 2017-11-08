# coding=utf-8
"""
For write comment detail to DB
"""

import threading
from mysql_connection_pool import ConnectionPool
from multiprocessing import Process, Pipe
from music import CommentDetail

LOCK = threading.Lock()


class CommentWriter(object):
    """
    For writing comment to DB
    """

    __sql_insert = 'insert into comment values(null, ?, ?, ?, ?, ?, ?, ?)'

    def __init__(self, flush_count=5):
        self.pipe = Pipe(duplex=False)
        self.flush_count = flush_count
        self.is_run = True

    def _writing_process(self, pipe):
        conn_pool = ConnectionPool(user='', password='', database='')
        buffer_comments = []
        buffer_count = 0
        while True:
            message = pipe.recv()
            if not message:
                if buffer_count != 0:
                    self.add_record(conn_pool.get_connection(),
                                    buffer_comments)
                    conn_pool.close()
                break
            buffer_count += 1
            buffer_comments.append(message)
            if buffer_count >= self.flush_count:
                self.add_record(conn_pool.get_connection(), buffer_comments)
                buffer_count = 0

    def add_record(self, conn, comments):
        """
        Add data to DB
        """
        params_list = []
        for comment in comments:
            params = [comment.song_id, comment.user_id, comment.comment_id,
                      comment.be_replied, comment.content,
                      comment.comment_time, comment.liked_count]
            params_list.append(params)
        conn.write_list(self.__sql_insert, params_list)

    def send(self, data):
        """
        Send data to input process
        """
        if not self.is_run or not data:
            return
        LOCK.acquire()
        if self.is_run:
            self.pipe[1].send(data)
        LOCK.release()

    def dispose(self):
        """
        Close write process
        """
        LOCK.acquire()
        self.pipe[1].send(None)
        self.is_run = False
        LOCK.release()
