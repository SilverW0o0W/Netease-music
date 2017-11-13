# coding=utf-8
"""
For write comment detail to DB
"""

from multiprocessing import Process
from mysql_connection_pool import ConnectionPool
from music import CommentDetail
from process_handler import ProcessHandler


class CommentWriter(ProcessHandler):
    """
    For writing comment to DB
    """

    __sql_insert = 'insert into comment values(null, ?, ?, ?, ?, ?, ?, ?)'

    def __init__(self, flush_count=5):
        ProcessHandler.__init__(self)
        self.flush_count = flush_count
        writer_process = Process(target=self._writing_process,
                                 args=(self.pipe[0],))
        writer_process.start()

    def _writing_process(self, pipe):
        conn_pool = ConnectionPool(user='', password='', database='')
        buffer_comments = []
        buffer_count = 0
        while True:
            message = pipe.recv()
            if not message:
                if buffer_count != 0:
                    self._add_record(conn_pool.get_connection(),
                                     buffer_comments)
                    conn_pool.close()
                break
            buffer_count += 1
            buffer_comments.append(message)
            if buffer_count >= self.flush_count:
                self._add_record(conn_pool.get_connection(), buffer_comments)
                buffer_count = 0

    def _add_record(self, conn, comments):
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
