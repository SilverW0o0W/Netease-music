# coding=utf-8
"""
For test api
"""

import time
from spider.music_spider import MusicSpider
from spider.mysql_connection_pool import ConnectionPool
from spider.mysql_controller import MysqlController
from spider.proxy_controller import ProxyController
from lyric_exporter import LyricExporter
from spider.comment_spider import CommentSpider


def music_spider():
    music_spider = MusicSpider()
    # main_info = music_spider.request_info('567602')
    # main_lyric = music_spider.request_lyric('567602')
    main_playlist = music_spider.request_playlist('307232987')


def lyric_exporter():
    exporter = LyricExporter('D:/lyric', name_format='{1} - {0}')
    # exporter.export('567602')
    # exporter.export_playlist('88966839')


def mysql_connection_pool():
    if __name__ == '__main__':
        main_pool = ConnectionPool('username', 'password', 'database_name')
    # main_pool = ConnectionPool('username', 'password', 'database_name', 'host', 'port')

    # main_pool = ConnectionPool('username', 'password', 'database_name', max_connection=2
    main_controller = main_pool.get_connection()
    main_controller.close()
    main_controller = main_pool.get_connection()
    main_controller.close()
    main_controller2 = main_pool.get_connection()
    main_controller = main_pool.get_connection()
    main_controller.close()
    main_controller2.close()
    main_controller2 = main_pool.get_connection()
    main_controller = main_pool.get_connection()
    main_controller3 = main_pool.get_connection(timeout=5)


def mysql_controller():
    # controller = MysqlController('username', 'password', 'database_name')
    main_controller = MysqlController(
        'username', 'password', 'database_name', 'host', 'port')
    main_sql = 'select * from table'
    main_result = main_controller.read(main_sql)


def proxy_controller():
    controller = ProxyController(False)
    time.sleep(120)
    controller.dispose()


def comment_spider():
    spider = CommentSpider(True)
    # 70+ hot comment
    # comment_list = spider.get_song_hot_comment('26584163', True)
    # 60 total
    # comment_list = spider.get_song_comment('26620939', True)
    # spider.write_song_comment('26620939', True)
    spider.write_song_comment_multithread('26620939', True)
    # comment_dict = spider.get_song_comment_multithread('26620939', True)
    # 17xxk total
    # comment_list = spider.get_song_all_comment('186016', True)


if __name__ == '__main__':
    # music_spider()
    # lyric_exporter()
    # mysql_connection_pool()
    # mysql_controller()
    proxy_controller()
    # comment_spider()
    print('done')