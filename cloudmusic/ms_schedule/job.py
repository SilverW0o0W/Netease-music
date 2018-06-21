# coding=utf-8


class Mission(object):
    def __init__(self, mission_id):
        self.mission_id = mission_id
        self.jobs = []


class Job(object):
    _str = '{0};{1}'

    def __init__(self, job_id, job_type, args=[]):
        self.job_id = job_id
        self.job_type = job_type
        self.args = args

    def __str__(self):
        params = ','.join(str(arg) for arg in self.args)
        return self._str.format(self.job_type, params)

    @staticmethod
    def init(job_id, string):
        job_type, params = string.split(';')
        args = params.split(',')
        return Job(job_id, job_type, args=args)
