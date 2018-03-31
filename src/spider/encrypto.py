# coding=utf-8
"""
This is the major encrypto algorithm
"""

import os
import base64
import json
from Crypto.Cipher import AES


# https://github.com/darknessomi/musicbox/wiki

def aes_encrypt(text, sec_key):
    """
    AES encrypt
    """
    pad = 16 - len(text) % 16
    text = text + pad * chr(pad)
    encryptor = AES.new(sec_key, 2, '0102030405060708')
    ciphertext = encryptor.encrypt(text)
    ciphertext = base64.b64encode(ciphertext)
    return ciphertext


def rsa_encrypt(text, pub_key, modulus):
    """
    RSA encrypt
    """
    text = text[::-1]
    result = int(text.encode('hex'), 16) ** int(pub_key, 16) % int(modulus, 16)
    return format(result, 'x').zfill(256)


call_count = 10
secret_key = None


def create_secret_key(size, refresh=False):
    """
    Create random 16 key
    """
    global call_count, secret_key
    if call_count >= 10 or refresh:
        secret_key = ''.join(map(lambda xx: (hex(ord(xx))[2:]), os.urandom(size)))[0:16]
        call_count = 0
    else:
        call_count = call_count + 1
    return secret_key


modulus = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
nonce = '0CoJUm6Qyw8W8jud'
pub_key = '010001'


def generate_data(text):
    """
    Generate data
    """
    text = json.dumps(text)
    sec_key = create_secret_key(16)
    enc_text = aes_encrypt(aes_encrypt(text, nonce), sec_key)
    enc_sec_key = rsa_encrypt(sec_key, pub_key, modulus)
    data = {
        'params': enc_text,
        'encSecKey': enc_sec_key
    }
    return data
