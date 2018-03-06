# coding=utf-8
"""
For write comment detail to DB
"""

from multiprocessing import Process
from mysql_connection_pool import ConnectionPool
from process_handler import ProcessHandler


class CommentWriter(ProcessHandler):
    """
    For writing comment to DB
    """
    _sql_insert = 'insert into comment(song_id, user_id, comment_id, replied_user_id, replied_content, content, comment_time, liked_count) values(%s, %s, %s, %s, %s, %s, %s, %s)'

    def __init__(self, logger, flush_count=10):
        ProcessHandler.__init__(self)
        self.flush_count = flush_count
        self.logger = logger
        writer_process = Process(target=self.writing_process, args=(self.pipe[0],))
        writer_process.start()
        self.logger.info("Comment writer start. PID: {0}.", writer_process.pid)

    def writing_process(self, pipe):
        self.logger.info('Writing process start')
        try:
            pool = ConnectionPool(user='', password='', database='', charset='utf8mb4s')
            buffer_comments = []
            buffer_count = 0
            while True:
                message = pipe.recv()
                if not message:
                    if buffer_count != 0:
                        self.add_record(pool, buffer_comments)
                    pool.close()
                    break
                buffer_count += 1
                buffer_comments.append(message)
                if buffer_count >= self.flush_count:
                    self.add_record(pool, buffer_comments)
                    buffer_count = 0
        except BaseException, ex:
            self.logger.error("Writing process error. Reason: {0}.", ex.message)

    def add_record(self, pool, comments):
        """
        Write comment data to db
        :param pool:ConnectPool
        :param comments:a list of comments
        :return:
        """
        try:
            self.logger.debug('Write start.')
            conn = pool.get_connection()
            params_list = []
            for comment in comments:
                params = [comment.song_id, comment.user_id, comment.comment_id,
                          comment.replied_user_id, comment.replied_content,
                          comment.content, comment.time, comment.liked_count]
                params_list.append(params)
            conn.write_list(self._sql_insert, params_list)
            del comments[:]
            self.logger.debug('Write complete.')
        except Exception, ex:
            self.logger.warning(ex.message)
        finally:
            conn.close()
