# coding=utf-8
from lyric_exporter import LyricExporter

if __name__ == '__main__':
    exporter = LyricExporter('D:/lyric', name_format='{1} - {0}')
    exporter.export('567602')
