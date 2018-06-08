# coding=utf-8
from sqlalchemy import Column, String, Integer, Boolean, DateTime
from sqlalchemy import create_engine, func, desc
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()


class ProxyBase(Base):
    __tablename__ = 'proxies'
    id = Column(Integer, primary_key=True)
    unique_id = Column(String(20), unique=True)
    ip = Column(String(15))
    port = Column(String(5))
    https = Column(Boolean)
    available = Column(Boolean)
    created = Column(DateTime, default=datetime.now)
    verified = Column(DateTime, default=datetime.now)


def session_watcher(commit):
    def _session_watcher(func):
        def wrapper(self, *args, **kwargs):
            # If the args contain session, the session will not close.
            has_connected = 'session' in kwargs and kwargs['session']
            if has_connected:
                session = kwargs['session']
            else:
                session = self.session()
                kwargs['session'] = session
            try:
                result = func(self, *args, **kwargs)
            except Exception as ex:
                raise ex
            else:
                if commit:
                    session.commit()
                return result
            finally:
                if not has_connected:
                    session.close()

        return wrapper

    return _session_watcher


class DBWorker(object):
    def __init__(self, con_string):
        self.con_string = con_string
        self.engine = None
        self.Session = None
        self.create_table()

    def session(self):
        if not self.engine:
            self.engine = create_engine(self.con_string, connect_args={'check_same_thread': False})
            self.Session = sessionmaker(bind=self.engine)
        return self.Session()

    def create_table(self):
        engine = create_engine(self.con_string)
        Base.metadata.create_all(engine)
        engine.dispose()

    @session_watcher(True)
    def merge(self, proxies, session=None):
        for proxy in proxies:
            db_proxy = self.query(proxy.unique_id, session=session)
            if db_proxy:
                db_proxy.available = proxy.available
                db_proxy.verified = proxy.verified
            else:
                alchemy_proxy = ProxyBase(
                    id=proxy.id,
                    unique_id=proxy.unique_id,
                    ip=proxy.ip,
                    port=proxy.port,
                    https=proxy.https,
                    available=proxy.available,
                    verified=proxy.verified
                )
                session.add(alchemy_proxy)

    @session_watcher(False)
    def query(self, unique_id, session=None):
        return session.query(ProxyBase).filter_by(unique_id=unique_id).one_or_none()

    @session_watcher(True)
    def delete(self, id, session=None):
        proxy = session.query(ProxyBase).get(id)
        return session.delete(proxy)

    @session_watcher(False)
    def query_available(self, time, count=None, session=None):
        if count:
            return session.query(ProxyBase).filter(
                ProxyBase.verified > time,
                ProxyBase.available == True
            ).order_by(desc(ProxyBase.verified)).limit(count)
        else:
            return session.query(ProxyBase).filter(
                ProxyBase.verified > time,
                ProxyBase.available == True
            ).order_by(desc(ProxyBase.verified)).all()

    @session_watcher(False)
    def query_expired(self, time, session=None):
        return session.query(ProxyBase).filter(
            ProxyBase.verified < time,
            ProxyBase.available == True
        ).all()

    @session_watcher(False)
    def available_count(self, session=None):
        return session.query(func.count(ProxyBase.id)).filter(
            ProxyBase.available == True
        ).scalar()
