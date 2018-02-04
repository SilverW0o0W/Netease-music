# coding=utf-8
"""
For test api
"""

from spider.music_spider import MusicSpider
from lyric_exporter import LyricExporter


def music_spider():
    music_spider = MusicSpider()
    # main_info = music_spider.request_info('567602')
    # main_lyric = music_spider.request_lyric('567602')
    main_playlist = music_spider.request_playlist('307232987')


def lyric_exporter():
    exporter = LyricExporter('D:/lyric', name_format='{1} - {0}')
    # exporter.export('567602')
    # exporter.export_playlist('88966839')


if __name__ == '__main__':
    # music_spider()
    lyric_exporter()
