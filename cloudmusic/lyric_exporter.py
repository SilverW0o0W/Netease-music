# coding=utf-8
"""
Download lyric
"""

import traceback
import os
import sys
from spider import utils as utils
from spider import adapter as adapter
from spider import api

reload(sys)
sys.setdefaultencoding('utf8')


class LyricExporter(object):
    """
    Crawl song lyric and export to file.
    export_dir: The lyric export folder path.
        default: current directory.
    name_format: The format of export file name.
        {0} is artist name.
        {1} is song name.
        default: '{0} - {1}'.
    lang: lyric language
        0b01: source language
            Base language
        0b10: translate language
            If the translate lyric not exist, use source language
        0b11: source + translate language
    """

    extension_name = '{0}.lrc'
    name_format = '{0} - {1}'

    def __init__(self, export_dir=None, name_format=name_format, lang=1):
        self.export_dir = export_dir
        self.name_format = name_format
        self.lang = lang

    def get_export_path(self, song, export_path):
        """
        Concat lyric file name and export dir path.
        """
        full_name = None
        if not song:
            file_name = str.format(self.extension_name, song.song_id)
        else:
            name_list = [artist.name for artist in song.artists]
            artists_name = ','.join(name_list)
            concat_name = str.format(
                self.name_format, artists_name, song.name)
            file_name = str.format(self.extension_name, concat_name)
        if export_path is not None and export_path.strip() != '':
            export_path = export_path.strip()
            if export_path[-1] != '/' and export_path[-1] != '\\':
                export_path += '/'
            if os.path.isdir(export_path):
                full_name = export_path + file_name
            else:
                os.makedirs(export_path)
                full_name = export_path + file_name
        return file_name, full_name

    def create_file(self, lyric, export_path=None):
        """
        Write lyric to file.
        If song info doesn't exist, file name: song_id.lrc
        If song info exists, default file name: artists_name[,] - song_name.lrc
        """
        file_name = self.get_export_path(lyric.song, export_path)
        lyric_txt = self.get_lyric_txt(lyric)
        if not lyric_txt:
            return
        with open(unicode(file_name[1], 'utf-8'), 'w') as lrc_file:
            # if platform.system() == 'Windows':
            #     lyric_txt = lyric_txt.encode('mbcs')
            lrc_file.write(lyric_txt)
            return file_name

    def get_lyric_txt(self, lyric):
        lyric_text = None
        if self.lang == 0b01:
            lyric_text = lyric.lyric
        elif self.lang == 0b10:
            lyric_text = lyric.tlyric if lyric.tlyric else lyric.lyric
        elif self.lang == 0b11:
            lyric_text = lyric.lyric
            if lyric.tlyric:
                lyric_text = lyric_text + lyric.tlyric
        return lyric_text.encode('utf8') if lyric_text else None

    def export(self, song_id, song=None, export_dir=None):
        """
        Export song lyric.
        """
        export_dir = self.export_dir if not export_dir else export_dir
        if not song:
            song_content = api.request_song(song_id)
            song = adapter.adapt_song(song_content, song_id)
        lyric_content = api.request_lyric(song_id)
        lyric = adapter.adapt_lyric(lyric_content, song_id, song=song)
        return self.create_file(lyric, export_dir)

    def export_songs(self, songs, export_dir=None):
        """
        Export songs of list
        :param songs:List of Song object
        :param export_dir:Directory of export path
        :return:Dict of file_name:full_path
        """
        path_dict = {}
        for song in songs:
            try:
                file_name = self.export(song.song_id, song=song, export_dir=export_dir)
                if file_name:
                    path_dict[song.song_id] = file_name
            except Exception:
                print(traceback.format_exc())
        return path_dict

    def export_playlist(self, playlist_id, export_dir=None):
        """
        Export all songs in playlist
        """
        content = api.request_playlist(playlist_id)
        playlist = adapter.adapt_playlist(playlist_id, content)
        return self.export_songs(playlist.tracks, export_dir=export_dir)

    def export_url(self, url, export_dir=None):
        """
        Export file(s) from input url.
        """
        url_dict = utils.match_url(url)
        url_type = url_dict['type']
        if url_type & 0b00100 == 0b00100:
            return self.export_playlist(url_dict['id'], export_dir=export_dir)
        elif url_type & 0b00010:
            return self.export(url_dict['id'], export_dir=export_dir)
        else:
            raise ValueError('ID not found')
