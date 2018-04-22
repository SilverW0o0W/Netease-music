# coding=utf-8
"""
Download song playlist album picture.
"""
from spider.music_spider import MusicSpider
import spider.music_utils as utils
import requests
import os


class Avatar(object):
    def __init__(self, avatar_id, url, avatar_type):
        self.avatar_id = avatar_id
        self.url = url
        self.avatar_type = avatar_type
        self.extension = 'jpg'
        self.short_name = '{0}_{1}.{2}'.format(avatar_type, avatar_id, self.extension)


class AvatarPainter(object):

    def __init__(self, path):
        self.spider = MusicSpider()
        self.path = path

    def album(self, album_id):
        content = self.spider.request_album(album_id)
        pic_url = content['album']['picUrl']
        return Avatar(album_id, pic_url, 'album')

    def playlist(self, playlist_id):
        content = self.spider.request_playlist(playlist_id)
        pic_url = content['playlist']['coverImgUrl']
        return Avatar(playlist_id, pic_url, 'playlist')

    def artist(self, artist_id):
        content = self.spider.request_artist(artist_id)
        pic_url = content['artist']['picUrl']
        return Avatar(artist_id, pic_url, 'artist')

    def download(self, avatar):
        pic_name = '{0}/{1}'.format(self.path, avatar.short_name)
        if not os.path.isdir(self.path):
            os.makedirs(self.path)
        with open(pic_name, 'wb') as pic_file:
            pic_file.write(requests.get(avatar.url).content)

    def paint(self, url):
        url_type = utils.match_type(url)
        if url_type & 0b00100 == 0b00100:
            avatar = self.playlist(utils.match_playlist_id(url))
        elif url_type & 0b01000 == 0b01000:
            avatar = self.album(utils.match_album_id(url))
        elif url_type & 0b10000 == 0b10000:
            avatar = self.artist(utils.match_artist_id(url))
        else:
            return
        self.download(avatar)
