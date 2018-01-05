#coding = utf-8
"""
Download lyric and convert to .lrc file.
"""
import os
import platform
import sys
import requests
from bs4 import BeautifulSoup
from music import SongLyric, SongInfo

reload(sys)
sys.setdefaultencoding('utf8')

headers = {
    'Host': 'music.163.com',
    'Connection': 'keep-alive',
    'Origin': 'http://music.163.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9'
}


class InfoSpider(object):
    """
    Crawl song base info.
    """
    url = 'http://music.163.com/api/song/detail?ids=[{0}]'

    def send_request(self, url):
        """
        Send comment request.
        """
        session = requests.Session()
        try:
            response = session.post(url, headers=headers)
            content = response.json()
        except BaseException, error:
            print error.message
        finally:
            session.close()
        return content

    def generate_info(self, song_id, content):
        """
        Generate info from data.
        """
        info = SongInfo(song_id=song_id)
        try:
            song = content['songs'][0]
            # Crawl song name
            info.song_name = song['name']
            # Crawl artists
            self.get_artists(song['artists'], info)
            # Crawl album
            album = song['album']
            info.album_id = album['id']
            info.album_name = album['name']
        except BaseException, ex:
            print ex.message
        return info

    def get_artists(self, artists, info):
        """
        Get artists info.
        """
        artists_tuple = ([], [])
        for artist in artists:
            artist_id = artist['id']
            artist_name = artist['name']
            artists_tuple[0].append(artist_id)
            artists_tuple[1].append(artist_name)
        info.artists = artists_tuple

    def request_info(self, song_id):
        """
        Crawl song information.
        """
        url = str.format(self.url, song_id)
        content = self.send_request(url)
        return self.generate_info(song_id, content)


class LyricSpider(object):
    """
    Crawl song lyric and export to file.
    """

    # lyric_url = 'http://music.163.com/api/song/lyric?id={0}&lv=1&kv=1&tv=1'
    url = 'http://music.163.com/api/song/lyric?id={0}&lv=1&tv=1'
    extension_name = '{0}.lrc'
    default_name_format = '{0} - {1}'

    def __init__(self, export_dir=None, name_format=default_name_format):
        self.export_dir = export_dir
        self.name_format = name_format

    def send_request(self, url):
        """
        Send comment request.
        """
        session = requests.Session()
        try:
            response = session.post(url, headers=headers)
            content = response.json()
        except BaseException, error:
            print error.message
        finally:
            session.close()
        return content

    def generate_lyric(self, song_id, song_info, content):
        """
        Generate lyric from data.
        """
        song_lyric = SongLyric(song_id, info=song_info)
        song_lyric.lyric = content['lrc']['lyric']
        song_lyric.tlyric = content['tlyric']['lyric']
        return song_lyric

    def request_lyric(self, song_id, song_info=None):
        """
        Send request and analysis response
        """
        url = str.format(self.url, song_id)
        content = self.send_request(url)
        lyric = self.generate_lyric(song_id, song_info, content)
        self.export(lyric, self.export_dir)
        return lyric

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

    def export(self, song_lyric, export_path=None):
        """
        Write lyric to file.
        If song info doesn't exist, file name: song_id.lrc
        If song info exists, default file name: artists_name[,] - song_name.lrc
        """
        file_name = self.get_export_path(song_lyric.info, export_path)
        with open(unicode(file_name, 'utf-8'), 'w') as lrc_file:
            lyric = song_lyric.lyric
            if platform.system() == 'Windows':
                lyric = lyric.encode('mbcs')
            lrc_file.write(lyric)


if __name__ == '__main__':
    # main_spider = LyricSpider()
    # main_lyric = main_spider.request_lyric('108931')

    # info_spider = InfoSpider()
    # # main_info = main_spider.request_info('108931')
    # main_info = info_spider.request_info('520461943')

    # lyric_spider = LyricSpider('D:/lyric')
    # main_lyric = lyric_spider.request_lyric('520461943', main_info)

    info_spider = InfoSpider()
    main_info = info_spider.request_info('567602')

    lyric_spider = LyricSpider('D:/lyric', name_format='{1} - {0}')
    main_lyric = lyric_spider.request_lyric('567602', main_info)
