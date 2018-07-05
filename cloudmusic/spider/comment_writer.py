# coding=utf-8
"""
For write comment detail to DB
"""

import traceback
from multiprocessing import Process
from .process_handler import ProcessHandler, process_checker
from . import alchemy as alchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class CommentWriter(ProcessHandler):
    """
    For writing comment to DB
    """

    def __init__(self, logger, con_string):
        ProcessHandler.__init__(self)
        self.logger = logger
        self.con_string = con_string
        writer_process = Process(target=self.process, args=(self.sub_pipe,))
        writer_process.start()
        self.logger.info("Comment writer start. PID: {0}.", writer_process.pid)

    @process_checker
    def process(self, pipe):
        try:
            self.logger.info('Writing process start')
            engine = create_engine(self.con_string)
            alchemy.Base.metadata.create_all(engine)
            DBSession = sessionmaker(bind=engine)
            while True:
                message = pipe.recv()
                if self.receive_stop(message):
                    self.logger.info('Receive dispose.')
                    engine.dispose()
                    break
                self.add_record(DBSession, message)
        except Exception:
            self.logger.error("Writing process error. Reason: {0}.", traceback.format_exc())
        self.logger.info('Writer dispose.')

    def add_record(self, session, comments):
        """
        Write comment list to db
        :param session: session
        :param comments:a list of comments
        :return:
        """
        session = session()
        for comment in comments:
            try:
                sql_comment = alchemy.Comment(
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
                session.merge(sql_comment)
            except Exception:
                self.logger.warning(traceback.format_exc())
            else:
                session.commit()
        session.close()

# def add_record(self, DBSession, comments):
#     """
#     Write comment list to db
#     :param DBSession: session
#     :param comments:a list of comments
#     :return:
#     """
#     self.logger.debug('Write start.')
#     session = DBSession()
#     try:
#         session.bulk_insert_mappings(
#             alchemy.Comment,
#             [
#                 dict(
#                     comment_id=comment.comment_id,
#                     song_id=comment.song_id,
#                     user_id=comment.user.user_id,
#                     content=comment.content,
#                     liked=comment.liked,
#                     liked_count=comment.liked_count,
#                     time=comment.time,
#                     replied_user=comment.be_replied.user.user_id if comment.be_replied else None,
#                     replied_content=comment.be_replied.content if comment.be_replied else None
#                 )
#                 for comment in comments
#             ]
#         )
#         session.commit()
#     except Exception, ex:
#         self.logger.warning(ex.message)
#         session.rollback()
#     finally:
#         session.close()
#     self.logger.debug('Write complete.')
