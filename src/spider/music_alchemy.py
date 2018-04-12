# coding=utf-8
from sqlalchemy import Column, String, Integer, Boolean, BIGINT, create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Comment(Base):
    __tablename__ = 'comment'
    id = Column(Integer, primary_key=True)
    comment_id = Column(String(20))
    song_id = Column(String(20))
    user_id = Column(String(10))
    content = Column(String(200))
    liked = Column(Boolean)
    liked_count = Column(Integer)
    time = Column(BIGINT)
    replied_user = Column(String(10))
    replied_content = Column(String(200))


if __name__ == '__main__':
    engine = create_engine('mysql+mysqlconnector://root:aptx4869@localhost:3306/test2')
    Base.metadata.create_all(engine)
    DBSession = sessionmaker(bind=engine)
    # session = DBSession()
    # comment = Comment(comment_id='123', content='123435')
    # session.add(comment)
    # session.commit()
    # session.close()
