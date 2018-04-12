# coding=utf-8
"""
For write comment detail to DB
"""

from multiprocessing import Process
from process_handler import ProcessHandler
from music_alchemy import Comment as DBComment
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class CommentWriter(ProcessHandler):
    """
    For writing comment to DB
    """

    def __init__(self, logger, flush_count=10):
        ProcessHandler.__init__(self)
        self.flush_count = flush_count
        self.logger = logger
        writer_process = Process(target=self.process, args=(self.pipe[0],))
        writer_process.start()
        self.logger.info("Comment writer start. PID: {0}.", writer_process.pid)

    def process(self, pipe):
        self.logger.info('Writing process start')
        try:
            engine = create_engine('mysql+mysqlconnector://root:aptx4869@localhost:3306/test2')
            DBSession = sessionmaker(bind=engine)
            buffer_comments = []
            buffer_count = 0
            while True:
                message = pipe.recv()
                if not message:
                    if buffer_count != 0:
                        self.add_record(DBSession, buffer_comments)
                        engine.dispose()
                    break
                buffer_count += 1
                buffer_comments.append(message)
                if buffer_count >= self.flush_count:
                    self.add_record(DBSession, buffer_comments)
                    buffer_count = 0
        except BaseException, ex:
            self.logger.error("Writing process error. Reason: {0}.", ex.message)

    def add_record(self, DBSession, comments):
        """
        Write comment data to db
        :param pool:ConnectPool
        :param comments:a list of comments
        :return:
        """
        self.logger.debug('Write start.')
        session = DBSession()
        try:
            while len(comments) > 0:
                try:
                    comment = comments.pop(0)
                    sql_comment = DBComment(
                        comment_id=comment.comment_id,
                        song_id=comment.song_id,
                        user_id=comment.user.user_id,
                        content=comment.content,
                        liked=comment.liked,
                        liked_count=comment.liked_count,
                        time=comment.time,
                        replied_user=comment.be_replied.user.user_id if comment.be_replied else None,
                        replied_content=comment.be_replied.content if comment.be_replied else None
                    )
                    session.add(sql_comment)
                except Exception, ex:
                    self.logger.warning(ex.message)
                else:
                    session.commit()
        finally:
            session.close()
        self.logger.debug('Write complete.')
