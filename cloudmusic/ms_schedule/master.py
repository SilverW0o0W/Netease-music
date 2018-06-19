# coding=utf-8
import datetime
from .job import Job, SubJob
from .worker import Worker


# add jobs
# receive slave and add new jobs

class Master(object):
    _ready_queue = 'ready_queue'

    def __init__(self, url):
        self.worker = Worker(url)

    def add_job(self):
        job = self.create_job(100)
        self.write_job(job)

    def create_job(self, total):
        job_id = datetime.datetime.now().strftime('%Y%m%d%H%M%S%f')[0:-3]
        step = 1000
        job = Job(job_id)
        job.sub_jobs = [
            self.sub_job(job.job_id, i, total if total < i + step else i + step)
            for i in range(0, total, step)
        ]
        return job

    @staticmethod
    def sub_job(job_id, object_id, index, end):
        sub_job_id = '{0}{1}'.format(job_id, str(index).zfill(8))
        return SubJob(sub_job_id, 1, args=[object_id, index, end])

    def write_job(self, job):
        redis = self.worker.connect()
        pipe = redis.pipeline()
        # Add sub job information and checking status set
        for sub_job in job.sub_jobs:
            # Add key-value pair: sub_job-params for saving sub_job information
            pipe.set(sub_job.sub_job_id, str(sub_job))
            # Add job set for checking job status. If the set is empty, the job is done.
            pipe.sadd(job.job_id, sub_job.sub_job_id)
        pipe.execute()
        # Add sub jobs to ready queue, waiting slave request job.
        for sub_job in job.sub_jobs:
            pipe.lpush(self._ready_queue, sub_job.sub_job_id)
        pipe.execute()
