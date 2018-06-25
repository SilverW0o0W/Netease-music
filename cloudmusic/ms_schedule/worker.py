# coding=utf-8
import time
import socket
import datetime
from .job import Mission, Job
from .linker import Linker
from cloudmusic.spider.comment_spider import CommentSpider
from cloudmusic.common.logger.logger import Logger


class Worker(object):
    _ready_queue = 'ready_list'
    _waiting_queue = 'waiting_set'
    _check_queue = 'check_set'
    _ip_address = socket.gethostbyname(socket.gethostname())

    def __init__(self, url):
        self.linker = Linker(url)

    @staticmethod
    def mark_check(mission_id):
        return 'check:{}'.format(mission_id)


# add jobs
# receive slave and add new jobs

class Master(Worker):

    def __init__(self, url):
        super(Master, self).__init__(url)
        log_name = 'master_{}.log'.format(self._ip_address)
        self.logger = Logger(log_name)

    def add_mission(self):
        mission = self.mission_job(3158)
        self.write_mission(mission)

    def mission_job(self, total):
        mission_id = datetime.datetime.now().strftime('%Y%m%d%H%M%S%f')[0:-3]
        self.logger.info('New mission id : {0}.', mission_id)
        step = 1000
        mission = Mission(mission_id)
        mission.jobs = [
            self.job(mission.mission_id, '30482372', i, total if total < i + step else i + step)
            for i in range(0, total, step)
        ]
        self.logger.debug('Mission {0} job total: {1}.', mission_id, len(mission.jobs))
        return mission

    @staticmethod
    def job(job_id, object_id, index, end):
        sub_job_id = '{0}:{1}'.format(job_id, str(index).zfill(8))
        return Job(sub_job_id, 1, args=[object_id, index, end])

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
        time.sleep(5)

    def test_job(self):
        self.add_mission()
        self.logger.info('Job has done.')
        self.logger.dispose()


class Slave(Worker):

    def __init__(self, url):
        super(Slave, self).__init__(url)
        log_name = 'slave_{}.log'.format(self._ip_address)
        self.logger = Logger(log_name)

    def get_job(self):
        redis = self.linker.connect()
        data_tuple = redis.blpop(self._ready_queue, timeout=3)
        job_id = None
        if data_tuple is not None:
            job_id = data_tuple[1]
            redis.sadd(self._waiting_queue, job_id)
        self.logger.debug('Response new job. Id : {0}.', job_id)
        return None if not job_id else Job.init(job_id, redis.get(job_id))

    def run_spider(self, job):
        spider = CommentSpider(use_proxy=True,
                               con_string='')
        args = job.args
        self.logger.debug('Start new job. Id : {0}.', job.job_id)
        spider.write_in_slave(args[0], args[1], args[2], False)
        spider.dispose()

    def work(self):
        while True:
            job = self.get_job()
            if not job:
                break
            self.logger.info('Get new job. Id : {0}.', job.job_id)
            mission_id = job.job_id.split(':')[0]
            self.run_spider(job)
            redis = self.linker.connect()
            redis.srem(self._waiting_queue, job.job_id)
            redis.srem(self.mark_check(mission_id), job.job_id)
            self.logger.debug('Remove job {0} in waiting queue.', job.job_id)

        self.logger.info('Job has done.')
        self.logger.dispose()
