# coding=utf-8
import datetime
from .job import Job, SubJob


# add jobs
# receive slave and add new jobs

class Master(object):
    def create_job(self, total):
        job_id = datetime.datetime.now().strftime('%Y%m%d%H%M%S%f')[0:-3]
        step = 1000
        job = Job(job_id)
        job.sub_jobs = [
            self.sub_job(i, total if total < i + step else i + step)
            for i in range(0, total, step)
        ]
        return job

    def sub_job(self, start, end):
        return SubJob(1, args=[start, end])
