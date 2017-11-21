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
    __sql_insert = 'insert into comment(song_id, user_id, comment_id, replied_user_id, replied_content, content, comment_time, liked_count) values(%s, %s, %s, %s, %s, %s, %s, %s)'

    def __init__(self, logger, flush_count=5):
        ProcessHandler.__init__(self)
        self.flush_count = flush_count
        self.logger = logger
        writer_process = Process(target=self._writing_process,
                                 args=(self.pipe[0],))
        writer_process.start()

    def _writing_process(self, pipe):
        self.logger.info('Writing process start')
        conn_pool = ConnectionPool(user='', password='', database='')
        buffer_comments = []
        buffer_count = 0
        while True:
            message = pipe.recv()
            self.logger.debug('get message. Buffer {0}', buffer_count)
            if not message:
                if buffer_count != 0:
                    self._add_record(conn_pool, buffer_comments)
                break
            buffer_count += 1
            buffer_comments.append(message)
            if buffer_count >= self.flush_count:
                self.logger.debug('start append')
                self._add_record(conn_pool, buffer_comments)
                buffer_count = 0

    def _add_record(self, pool, comments):
        """
        Add data to DB
        """
        try:
            self.logger.debug('get conn')
            conn = pool.get_connection()
            self.logger.debug('get conn ok')
            params_list = []
            for comment in comments:
                params = [comment.song_id, comment.user_id, comment.comment_id,
                          comment.replied_user_id, comment.replied_content,
                          comment.content, comment.time, comment.liked_count]
                params_list.append(params)
            conn.write_list(self.__sql_insert, params_list)
            del comments[:]
            self.logger.info('Write complete.')
        except Exception, ex:
            self.logger.warning(ex.message)
        finally:
            conn.close()
