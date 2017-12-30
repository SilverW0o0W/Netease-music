#coding = utf-8
"""
Download lyric and convert to .lyc file.
"""
import requests
from music import SongLyric


class LyricSpider(object):
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

    lyric_url = 'http://music.163.com/api/song/lyric?id={0}&lv=1&kv=1&tv=-1'

    def send_request(self, url):
        """
        Send comment request.
        """
        session = requests.Session()
        try:
            response = session.post(url, headers=self.headers)
            content = response.json()
        except BaseException, error:
            print error.message
        finally:
            session.close()
        return content

    def request_comment(self, song_id):
        """
        Send request and analysis response
        """
        url = str.format(self.lyric_url, song_id)
        content = self.send_request(url)
        return content


if __name__ == '__main__':
    spider = LyricSpider()
    lyric_json = spider.request_comment('520461943')
