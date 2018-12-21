#!/usr/bin/env python
# coding=utf-8

import unittest
from cloudmusic.spider import api


class APITest(unittest.TestCase):

    def test_request_songs(self):
        song_ids = [26584163, 27198673, ]
        songs = api.request_songs(song_ids)
        self.assertTrue(songs)

    def test_request_lyric(self):
        song_id = 26584163
        lyric = api.request_lyric(song_id)
        self.assertTrue(lyric)

    def test_request_playlist(self):
        playlist_id = 616947129
        playlist = api.request_playlist(playlist_id)
        self.assertTrue(playlist)

    def test_request_artist(self):
        artist_id = 16277
        artist = api.request_artist(artist_id)
        self.assertTrue(artist)

    def test_request_album(self):
        album_id = 34720827
        album = api.request_album(album_id)
        self.assertTrue(album)
