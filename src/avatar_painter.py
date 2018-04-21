# coding=utf-8
"""
Download song playlist album picture.
"""
from spider.music_spider import MusicSpider
import requests


class Avatar(object):
    def __init__(self, id, url):
        self.id = id
        self.url = url
        self.extension = 'jpg'


class AvatarPainter(object):

    def __init__(self, path):
        self.spider = MusicSpider()
        self.path = path

    def album(self, album_id):
        content = self.spider.request_album(album_id)
        pic_url = content['album']['picUrl']
        avatar = Avatar(album_id, pic_url)
        return avatar

    def playlist(self, playlist_id):
        content = self.spider.request_playlist(playlist_id)
        pic_url = content['playlist']['coverImgUrl']
        avatar = Avatar(playlist_id, pic_url)
        return avatar

    def paint(self, avatar):
        pic_name = '{0}/{1}.{2}'.format(self.path, avatar.id, avatar.extension)
        with open(pic_name, 'wb') as pic_file:
            pic_file.write(requests.get(avatar.url).content)
