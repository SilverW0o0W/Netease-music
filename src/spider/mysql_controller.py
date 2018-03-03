# coding=utf-8
"""
This file work for controlling mysql
"""

from datetime import datetime
import mysql.connector as connector


class MysqlController(object):
    """
    This is a class for controlling mysql
    """

    def __init__(self, user, password, database, host=None, port=None):
        self.user = user
        self.password = password
        self.database = database
        self.host = host
        self.port = port
        self.connect_time = datetime.now()
        self.connection = self.connect()

    def connect(self):
        """
        Establish mysql connection.
        Return: connection
        """
        self.connect_time = datetime.now()
        if self.port:
            return connector.connect(user=self.user, password=self.password, database=self.database,
                                     host=self.host, port=self.port)
        else:
            return connector.connect(user=self.user, password=self.password, database=self.database)

    def close(self):
        """
        Close db connection
        """
        if self.connection is not None:
            self.connection.close()

    def set_encoding(self, charset):
        """
        For mysql utf8 emoji
        """
        cursor = self.connection.cursor()
        sql = str.format("SET NAMES {0}", charset)
        cursor.execute(sql)
        self.connection.commit()

    def write(self, sql, params=None):
        """
        Execute sql. For write.
        """
        cursor = None
        try:
            cursor = self.connection.cursor()
            cursor.execute(sql) if not params else cursor.execute(sql, params)
        except connector.DatabaseError, ex:
            self.connection.rollback()
            print ex.msg
            raise ex
        else:
            self.connection.commit()
        finally:
            if cursor is not None:
                cursor.close()

    def write_list(self, sql, params_list):
        """
        Execute sql. For write.
        """
        cursor = None
        try:
            cursor = self.connection.cursor()
            cursor.executemany(sql, params_list)
        except Exception, ex:
            self.connection.rollback()
            raise ex
        else:
            self.connection.commit()
        finally:
            if cursor is not None:
                cursor.close()

    def read(self, sql, params_list=None):
        """
        Execute sql. For read.
        """
        cursor = None
        try:
            connect = self.connection
            cursor = connect.cursor()
            if params_list is None:
                cursor.execute(sql)
            else:
                cursor.execute(sql, params_list)
            result_set = cursor.fetchall()
            return result_set
        finally:
            if cursor is not None:
                cursor.close()
