# coding=utf-8
from sqlalchemy import Column, String, Integer, Boolean, BIGINT
# from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Comment(Base):
    __tablename__ = 'comment'
    comment_id = Column(String(20), primary_key=True)
    song_id = Column(String(20))
    user_id = Column(String(10))
    content = Column(String(200))
    liked = Column(Boolean)
    liked_count = Column(Integer)
    time = Column(BIGINT)
    replied_user = Column(String(10))
    replied_content = Column(String(200))
