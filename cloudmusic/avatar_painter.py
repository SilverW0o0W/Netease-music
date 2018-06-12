# coding=utf-8
"""
Download song playlist album picture.
"""

import os
import requests

from spider import api
import spider.utils as utils


class Avatar(object):
    def __init__(self, avatar_id, url, avatar_type):
        self.avatar_id = avatar_id
        self.url = url
        self.avatar_type = avatar_type
        self.extension = 'jpg'
        self.short_name = '{0}_{1}.{2}'.format(avatar_type, avatar_id, self.extension)


class AvatarPainter(object):

    def __init__(self, path):

        self.path = path

    def album(self, album_id):
        content = api.request_album(album_id)
        pic_url = content['album']['picUrl']
        return Avatar(album_id, pic_url, 'album')

    def playlist(self, playlist_id):
        content = api.request_playlist(playlist_id)
        pic_url = content['playlist']['coverImgUrl']
        return Avatar(playlist_id, pic_url, 'playlist')

    def artist(self, artist_id):
        content = api.request_artist(artist_id)
        pic_url = content['artist']['picUrl']
        return Avatar(artist_id, pic_url, 'artist')

    def download(self, avatar):
        pic_name = '{0}/{1}'.format(self.path, avatar.short_name)
        if not os.path.isdir(self.path):
            os.makedirs(self.path)
        with open(pic_name, 'wb') as pic_file:
            pic_file.write(requests.get(avatar.url).content)

    def paint(self, url):
        url_dict = utils.match_url(url)
        url_type = url_dict['type']
        if url_type & 0b00100 == 0b00100:
            avatar = self.playlist(url_dict['id'])
        elif url_type & 0b01000 == 0b01000:
            avatar = self.album(url_dict['id'])
        elif url_type & 0b10000 == 0b10000:
            avatar = self.artist(url_dict['id'])
        else:
            return
        self.download(avatar)