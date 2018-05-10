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
            db_proxy = self.query(proxy.unique_id, session=session)
            if db_proxy:
                db_proxy.available = proxy.available
                db_proxy.verified = proxy.verified
            else:
                alchemy_proxy = Proxy(
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
        return session.query(Proxy).filter_by(unique_id=unique_id).one_or_none()

    @session_watcher(True)
    def delete(self, id, session=None):
        proxy = session.query(Proxy).get(id)
        session.delete(proxy)

    @session_watcher(False)
    def query_available(self, time, https, count=None, session=None):
        if count:
            return session.query(Proxy).filter(
                Proxy.verified > time,
                Proxy.https == https,
                Proxy.available == True
            ).order_by(desc(Proxy.verified)).limit(count)
        else:
            return session.query(Proxy).filter(
                Proxy.verified > time,
                Proxy.https == https,
                Proxy.available == True
            ).order_by(desc(Proxy.verified)).all()

    @session_watcher(False)
    def query_expired(self, time, https, session=None):
        return session.query(Proxy).filter(
            Proxy.verified < time,
            Proxy.https == https,
            Proxy.available == True
        ).all()

    @session_watcher(False)
    def available_count(self, https, session=None):
        return session.query(func.count(Proxy.id)).filter(
            Proxy.https == https,
            Proxy.available == True
        ).scalar()
