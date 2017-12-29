import json
import requests
import encrypto

referer = 'http://music.163.com/song?id='

headers = {
    'Host': 'music.163.com',
    'Connection': 'keep-alive',
    'Origin': 'http://music.163.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*',
    'Referer': 'http://music.163.com/song?id=520461943',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9'
}


def send_request(url, headers, data):
    """
    Send comment request.
    """
    session = requests.Session()
    try:
        response = session.post(url, data=data, headers=headers)
        content = response.content
    except BaseException, error:
        print error.message
    finally:
        session.close()
    return content


def generate_data():
    """
    Generate data
    """
    text = {
        'username': '',
        'password': '',
        'rememberLogin': 'true',
        'id': '520461943',
        'lyric': '',
        'nolyric': 'false'
    }

    modulus = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    nonce = '0CoJUm6Qyw8W8jud'
    pub_key = '010001'
    text = json.dumps(text)
    sec_key = encrypto.create_secret_key(16)
    enc_text = encrypto.aes_encrypt(encrypto.aes_encrypt(text, nonce), sec_key)
    enc_sec_key = encrypto.rsa_encrypt(sec_key, pub_key, modulus)
    data = {
        'params': enc_text,
        'encSecKey': enc_sec_key
    }
    return data


def request_comment(song_id):
    """
    Send request and analysis response
    """
    data = generate_data()
    # referer_url = referer + song_id
    # real_headers = headers['Referer'] = referer_url
    url = 'http://music.163.com/weapi/song/lyric?csrf_token= HTTP/1.1'
    content = send_request(url, headers, data)
    return content


if __name__ == '__main__':
    text = request_comment('')
    print 'done'
