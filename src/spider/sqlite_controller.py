# coding=utf-8
"""
This is for controlling sqlite
"""

import traceback
import os
import sqlite3


class SqliteController(object):
    """
    This is a class for controlling sqlite
    """

    def __init__(self, sql_create_table, db_path):
        self.sql_create_table = sql_create_table
        self.db_path = db_path
        self.connection = None
        self.init_db(sql_create_table)

    def init_db(self, sql_create_table=None):
        """
        Initialize sqlite db.
        """
        if not sql_create_table:
            sql_create_table = self.sql_create_table
        try:
            db_exist = os.path.exists(self.db_path)
            self.connection = self.connect()
            if not db_exist:
                # Create db table
                return self.write(sql_create_table)
            return True
        except Exception:
            print(traceback.format_exc())
            return False

    def connect(self, check_thread=True):
        """
        Establish sqlite connection.
        Return: connection
        """
        return sqlite3.connect(self.db_path, check_same_thread=check_thread)

    def close(self):
        """
        Close db connection
        """
        if self.connection:
            self.connection.close()
            self.connection = None

    def write(self, sql, params_list=None, is_main_thread=True):
        """
        Execute sqlite sql. For write.
        """
        cursor = None
        connect = None
        try:
            if is_main_thread:
                connect = self.connection
            else:
                connect = self.connect(False)
            cursor = connect.cursor()
            if params_list is None:
                result = cursor.execute(sql)
            else:
                result = cursor.execute(sql, params_list)
            connect.commit()
            return result
        except Exception:
            print(traceback.format_exc())
            return None
        finally:
            if cursor is not None:
                cursor.close()
            if is_main_thread is False and connect is not None:
                connect.close()

    def write_list(self, sql, params_list, is_main_thread=True):
        """
        Execute sqlite sql. For write.
        """
        connect = None
        cursor = None
        row_num = 0
        try:
            if is_main_thread:
                connect = self.connection
            else:
                connect = self.connect()
            cursor = connect.cursor()
            for params in params_list:
                try:
                    result = cursor.execute(sql, params)
                    row_num += result.rowcount
                except Exception:
                    print(traceback.format_exc())
                else:
                    connect.commit()
            return row_num
        except Exception:
            print(traceback.format_exc())
            return None
        finally:
            if cursor is not None:
                cursor.close()
            if is_main_thread is False and connect is not None:
                connect.close()

    def read(self, sql, params_list=None, is_main_thread=True):
        """
        Execute sqlite sql. For read.
        """
        connect = None
        cursor = None
        try:
            if is_main_thread:
                connect = self.connection
            else:
                connect = self.connect()
            cursor = connect.cursor()
            if params_list is None:
                cursor.execute(sql)
            else:
                cursor.execute(sql, params_list)
            result_set = cursor.fetchall()
            return result_set
        except Exception:
            print(traceback.format_exc())
            return None
        finally:
            if cursor is not None:
                cursor.close()
            if is_main_thread is False and connect is not None:
                connect.close()
