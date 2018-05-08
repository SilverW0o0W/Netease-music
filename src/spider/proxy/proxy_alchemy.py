# coding=utf-8
from sqlalchemy import Column, String, Integer, Boolean, DateTime
from sqlalchemy import create_engine, func, desc
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()


class Proxy(Base):
    __tablename__ = 'proxies'
    id = Column(Integer, primary_key=True)
    unique_id = Column(String(20), unique=True)
    ip = Column(String(15))
    port = Column(Integer)
    https = Column(Boolean)
    available = Column(Boolean)
    created = Column(DateTime, default=datetime.now)
    verified = Column(DateTime, default=datetime.now, onupdate=datetime.now)


def session_watcher(commit):
    def _session_watcher(func):
        def wrapper(self, *args, **kwargs):
            session = self.session()
            kwargs['session'] = session
            try:
                func(self, *args, **kwargs)
            except Exception, ex:
                raise ex
            else:
                if commit:
                    session.commit()
            finally:
                session.close()
            return wrapper

    return _session_watcher


class ProxyWorker(object):
    def __init__(self, con_string):
        self.con_string = con_string
        self.engine = create_engine(self.con_string)
        Base.metadata.create_all(self.engine)
        self.Session = sessionmaker(bind=self.engine)

    def session(self):
        return self.Session()

    @session_watcher(True)
    def merge(self, proxies, session=None):
        for proxy in proxies:
            alchemy_proxy = Proxy(
                id=proxy.id,
                unique_id=proxy.unique_id,
                ip=proxy.ip,
                port=proxy.port,
                https=proxy.https,
                available=proxy.available,
                verified=proxy.verified
            )
            session.merge(alchemy_proxy)

    @session_watcher(False)
    def query(self, unique_id, session=None):
        return session.query(Proxy).filter_by(Proxy.unique_id == unique_id).one_or_none()

    @session_watcher(True)
    def delete(self, id, session=None):
        return session.query(Proxy).get(id).delete()

    @session_watcher(False)
    def filter(self, session=None, *criterion):
        return session.filter(criterion).all()

    def query_available(self, time, https, count=None):
        criterion = Proxy.verified > time, Proxy.https == https, Proxy.available == True
        if count:
            return self.filter(criterion).order_by(desc(Proxy.verified)).limit(count)
        else:
            return self.filter(criterion).order_by(desc(Proxy.verified)).all()

    def query_expired(self, time, https):
        criterion = Proxy.verified < time, Proxy.https == https, Proxy.available == True
        return self.filter(criterion).all()

    @session_watcher(False)
    def count(self, session=None, *criterion):
        return session.query(func.count(Proxy.id)).filter(criterion).scalar()

    def available_count(self, https):
        return self.count(Proxy.https == https)
