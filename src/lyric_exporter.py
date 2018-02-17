# coding=utf-8
"""
Download lyric
"""
import os
import sys
import platform
from spider import music_utils as utils
from spider import music_adapter as adapter
from spider.music_spider import MusicSpider
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
    """

    extension_name = '{0}.lrc'
    name_format = '{0} - {1}'

    def __init__(self, export_dir=None, name_format=name_format, need_info=True):
        self.export_dir = export_dir
        self.name_format = name_format
        self.need_info = need_info
        self.spider = MusicSpider()

    def get_export_path(self, song_info, export_path):
        """
        Concat lyric file name and export dir path.
        """
        if not song_info:
            file_name = str.format(self.extension_name, song_info.song_id)
        else:
            is_first = True
            for artist in song_info.artists[1]:
                if is_first:
                    artists_name = artist
                    is_first = False
                else:
                    artists_name += ',' + artist
            concat_name = str.format(
                self.name_format, artists_name, song_info.song_name)
            file_name = str.format(self.extension_name, concat_name)
        if export_path is not None and export_path.strip() != '':
            export_path = export_path.strip()
            if export_path[-1] != '/' and export_path[-1] != '\\':
                export_path += '/'
            if os.path.isdir(export_path):
                file_name = export_path + file_name
            else:
                try:
                    os.makedirs(export_path)
                    file_name = export_path + file_name
                except OSError, e:
                    print e.message
        return file_name

    def create_file(self, song_lyric, export_path=None):
        """
        Write lyric to file.
        If song info doesn't exist, file name: song_id.lrc
        If song info exists, default file name: artists_name[,] - song_name.lrc
        """
        file_name = self.get_export_path(song_lyric.info, export_path)
        lyric = song_lyric.lyric
        if not lyric:
            return
        with open(unicode(file_name, 'utf-8'), 'w') as lrc_file:
            if platform.system() == 'Windows':
                lyric = lyric.encode('mbcs')
            lrc_file.write(lyric)
            return file_name

    def export(self, song_id, song_info=None, export_dir=None):
        """
        Export song lyric.
        """
        export_dir = self.export_dir if not export_dir else export_dir
        if not song_info:
            if self.need_info:
                info_content = self.spider.request_info(song_id)
                song_info = adapter.adapt_info(song_id, info_content)
        lyric_content = self.spider.request_lyric(song_id)
        song_lyric = adapter.adapt_lyric(song_id, lyric_content, song_info)
        return self.create_file(song_lyric, export_dir)

    def export_playlist(self, playlist_id, export_dir=None):
        """
        Export all songs in playlist
        """
        content = self.spider.request_playlist(playlist_id)
        playlist = adapter.adapt_playlist(playlist_id, content)
        path_dict = {}
        for song in playlist.tracks:
            try:
                path = self.export(song.song_id, song_info=song.info,
                                   export_dir=export_dir)
                path_dict[song.song_id] = path
            except BaseException, ex:
                print ex.message
        return path_dict

    def export_url(self, url, playlist=False, export_dir=None):
        """
        Export file(s) from input url.
        """
        url_id = utils.match_playlist_id(url)
        if not url_id:
            if playlist:
                raise ValueError('ID not found')
            else:
                url_id = utils.match_song_id(url)
                is_playlist = False
                if not url_id:
                    raise ValueError('ID not found')
        else:
            is_playlist = True
        if is_playlist:
            return self.export_playlist(url_id, export_dir)
        else:
            return self.export(url_id, export_dir)
