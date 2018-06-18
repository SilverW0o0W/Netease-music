# coding=utf-8


class Job(object):
    def __init__(self, job_id):
        self.job_id = job_id
        self.sub_jobs = []


class SubJob(object):
    _str = '{0};{1}'

    def __init__(self, job_type, args=[]):
        self.job_type = job_type
        self.args = args

    def __str__(self):
        params = ','.join(str(arg) for arg in self.args)
        self._str.format(self.job_type, params)

    @staticmethod
    def init(string):
        job_type, params = string.split(';')
        args = params.split(',')
        return SubJob(job_type, args=args)
