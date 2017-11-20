# coding=utf-8
"""
This file work for controlling mysql
"""

from datetime import datetime
import mysql.connector


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
        self.connection = self.connect()

    def connect(self):
        """
        Establish mysql connection.
        Return: connection
        """
        self.connect_time = datetime.now()
        if self.port:
            return mysql.connector.connect(user=self.user, password=self.password, database=self.database, host=self.host, port=self.port)
        else:
            return mysql.connector.connect(user=self.user, password=self.password, database=self.database)

    def close(self):
        """
        Close db connection
        """
        if self.connection != None:
            self.connection.close()

    def write(self, sql, params=None):
        """
        Execute sql. For write.
        """
        cursor = None
        connect = None
        try:
            connect = self.connection
            cursor = connect.cursor()
            if not params:
                cursor.execute(sql)
            else:
                cursor.execute(sql, params)
            connect.commit()
        finally:
            if cursor is not None:
                cursor.close()

    def write_list(self, sql, params_list):
        """
        Execute sql. For write.
        """
        connect = None
        cursor = None
        try:
            connect = self.connection
            cursor = connect.cursor()
            for params in params_list:
                cursor.execute(sql, params)
            connect.commit()
        finally:
            if cursor is not None:
                cursor.close()

    def read(self, sql, params_list=None):
        """
        Execute sql. For read.
        """
        connect = None
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


if __name__ == '__main__':
    # controller = MysqlController('username', 'password', 'database_name')
    main_controller = MysqlController(
        'username', 'password', 'database_name', 'host', 'port')
    main_sql = 'select * from table'
    main_result = main_controller.read(main_sql)
