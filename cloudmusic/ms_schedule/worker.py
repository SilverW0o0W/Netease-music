# coding=utf-8
import time
import socket
import datetime
from .job import Mission, Job
from .linker import Linker
from cloudmusic.spider.comment_spider import CommentSpider
from cloudmusic.common.logger.logger import Logger
from cloudmusic.common.proxy.controller import Controller


class Worker(object):
    _mission_queue = 'mission_list'
    _completed_queue = 'completed_set'
    _ready_queue = 'ready_list'
    _waiting_queue = 'waiting_set'
    _check_queue = 'check_set'

    # job_id = mission_id:index
    _fmt_job_id = '{0}:{1}'
    # check_mission_id = check:mission_id
    _fmt_mission_id_in_check = 'check:{}'
    # mission_args = type:param_list
    _fmt_mission_args = '{0}:{1}'

    _stop_signal = 'stop_signal'
    _ip_address = socket.gethostbyname(socket.gethostname())

    def __init__(self, redis_url):
        self.linker = Linker(redis_url)
        self.receive_stop = False

    @classmethod
    def mark_check(cls, mission_id):
        return cls._fmt_mission_id_in_check.format(mission_id)

    def check_stop(self, redis):
        result = redis.get(self._stop_signal)
        self.receive_stop = False if not result else bool(result)
        return self.receive_stop


# add jobs
# receive slave and add new jobs

class Master(Worker):

    def __init__(self, url):
        super(Master, self).__init__(url)
        log_name = 'master_{}.log'.format(self._ip_address)
        self.spider = CommentSpider(use_proxy=True)
        self.logger = Logger(log_name)

    @classmethod
    def put_mission(cls, redis, song_id, hot=False):
        mission_id = datetime.datetime.now().strftime('%Y%m%d%H%M%S%f')[0:-3]
        args = [song_id, hot]
        mission_args = cls._fmt_mission_args.format(1, args)
        pipe = redis.pipeline()
        pipe.lpush(cls._mission_queue, mission_id)
        pipe.set(mission_id, mission_args)
        pipe.execute()
        return mission_id

    @classmethod
    def stop(cls, redis):
        redis.set(cls._stop_signal, True)

    def start(self):
        while True:
            redis = self.linker.connect()
            if self.check_stop(redis):
                self.logger.info('Receive stop.')
                break
            self.generate_mission()
            time.sleep(2)
        self.dispose()

    def generate_mission(self):
        redis = self.linker.connect()
        for _ in range(3):
            mission_id = redis.lpop(self._mission_queue)
            if not mission_id:
                break
            mission_args = redis.get(mission_id)
            job_type, args = mission_args.split(':')
            song_id, hot = args[0], bool(args[1])
            total = self.spider.get_comment_total(song_id, hot=hot)
            mission = self.mission_job(song_id, total)
            self.write_mission(mission)

    def mission_job(self, song_id, total):
        mission_id = datetime.datetime.now().strftime('%Y%m%d%H%M%S%f')[0:-3]
        self.logger.info('New mission id : {0}.', mission_id)
        step = 1000
        mission = Mission(mission_id)
        mission.jobs = [
            self.job(mission.mission_id, song_id, 1, i, total if total < i + step else i + step)
            for i in range(0, total, step)
        ]
        self.logger.debug('Mission {0} job total: {1}.', mission_id, len(mission.jobs))
        return mission

    @classmethod
    def job(cls, mission_id, job_type, object_id, index, end):
        job_id = cls._fmt_job_id.format(mission_id, str(index).zfill(8))
        return Job(job_id, job_type, args=[object_id, index, end])

    def write_mission(self, mission):
        redis = self.linker.connect()
        pipe = redis.pipeline()
        # Add sub job information and checking status set
        pipe.sadd(self._check_queue, self.mark_check(mission.mission_id))
        for job in mission.jobs:
            # Add key-value pair: job-params for saving job information
            pipe.set(job.job_id, str(job))
            # Add mission set for checking mission status. If the set is empty, the mission is done.
            pipe.sadd(self.mark_check(mission.mission_id), job.job_id)
        pipe.execute()
        # Add jobs to ready queue, waiting slave request.
        for job in mission.jobs:
            pipe.lpush(self._ready_queue, job.job_id)
        pipe.execute()

    def check_mission_done(self):
        redis = self.linker.connect()
        # check mission string format: 'check:mission_id'
        check_missions = redis.smembers(self._check_queue)
        if check_missions:
            for check_mission in check_missions:
                if redis.scard(check_mission) == 0:
                    redis.srem(self._check_queue, check_mission)
                    mission_id = check_mission.split(':')[1]
                    redis.sadd(self._completed_queue, mission_id)
                    self.logger.info('Mission {0} completed.', mission_id)
        time.sleep(5)

    def dispose(self):
        self.spider.dispose()
        self.logger.dispose()


class Slave(Worker):

    def __init__(self, url):
        super(Slave, self).__init__(url)
        log_name = 'slave_{}.log'.format(self._ip_address)
        self.logger = Logger(log_name)
        self.proxy_logger = Logger('proxy.log')
        self.proxy = Controller(self.proxy_logger, False)

    def get_job(self):
        redis = self.linker.connect()
        if self.check_stop(redis):
            return None
        data_tuple = redis.blpop(self._ready_queue, timeout=3)
        job_id = None
        if data_tuple is not None:
            job_id = data_tuple[1]
            redis.sadd(self._waiting_queue, job_id)
        self.logger.debug('Response new job. Id : {0}.', job_id)
        return None if not job_id else Job.init(job_id, redis.get(job_id))

    def run_spider(self, job):
        spider = CommentSpider(use_proxy=True,
                               con_string='',
                               proxy=self.proxy)
        args = job.args
        self.logger.debug('Start new job. Id : {0}.', job.job_id)
        spider.write_in_slave(args[0], args[1], args[2], False)
        spider.dispose(close_proxy=False)

    def start(self):
        while True:
            job = self.get_job()
            if self.receive_stop:
                break
            if not job:
                time.sleep(3)
                continue
            self.logger.info('Get new job. Id : {0}.', job.job_id)
            mission_id = job.job_id.split(':')[0]
            self.run_spider(job)
            redis = self.linker.connect()
            redis.srem(self._waiting_queue, job.job_id)
            redis.srem(self.mark_check(mission_id), job.job_id)
            self.logger.debug('Remove job {0} in waiting queue.', job.job_id)

        self.logger.info('Job has done.')
        self.logger.dispose()
