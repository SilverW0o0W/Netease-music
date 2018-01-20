# coding=utf-8
"""
This is an adapter class to convert request content to music instance.
"""
from spider.music import SongInfo, SongLyric, Playlist


def adapt_info(song_id, content):
    """
    Generate info from data.
    """
    info = SongInfo(song_id=song_id)
    try:
        song = content['songs'][0]
        # Get song name
        info.song_name = song['name']
        # Get artists
        get_artists(song['artists'], info)
        # Get album
        album = song['album']
        info.album_id = album['id']
        info.album_name = album['name']
    except BaseException, ex:
        print ex.message
    return info


def get_artists(artists, info):
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


def adapt_lyric(song_id, content, song_info):
    """
    Generate lyric from data.
    """
    try:
        song_lyric = SongLyric(song_id, info=song_info)
        song_lyric.lyric = content['lrc']['lyric']
        song_lyric.tlyric = content['tlyric']['lyric']
    except ValueError, error:
        print error.message
    return song_lyric


def adapt_playlist(playlist_id, content):
    """
    Generate playlist from data.
    """
    try:
        playlist = Playlist(playlist_id)
        playlist.track_count = content['playlist']['trackCount']
        # playlist.tracks = content['playlist'][]
    except ValueError, error:
        print error.message
    return playlist

def get_tracks(content):
    """
    Get tracks
    """
    pass