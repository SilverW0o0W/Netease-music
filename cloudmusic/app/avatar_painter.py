# coding=utf-8
"""
Download song playlist album picture.
"""

import os
import requests

from cloudmusic.api import api
import cloudmusic.spider.utils as utils


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

    def download(self, avatar):
        pic_name = '{0}/{1}'.format(self.path, avatar.short_name)
        if not os.path.isdir(self.path):
            os.makedirs(self.path)
        with open(pic_name, 'wb') as pic_file:
            pic_file.write(requests.get(avatar.url).content)

    def paint(self, url):
        url_dict = utils.match_url(url)
        url_type = url_dict['type']
        url_id = url_dict['id']
        if url_type & 0b00100 == 0b00100:
            content = api.request_playlist(url_id)
            pic_url = content['playlist']['coverImgUrl']
        elif url_type & 0b01000 == 0b01000:
            content = api.request_album(url_id)
            pic_url = content['album']['picUrl']
        elif url_type & 0b10000 == 0b10000:
            content = api.request_artist(url_id)
            pic_url = content['artist']['picUrl']
        else:
            return
        avatar = Avatar(url_id, pic_url, url_type)
        self.download(avatar)
