from setuptools import setup, find_packages

setup(
    name="Cloud Music",
    version="0.2",
    packages=find_packages(),
    zip_safe=False,
    install_requires=[
        'future',
        'pycryptodomex',
        'beautifulsoup4',
        'requests',
		'gevent',
        'sqlalchemy',
        'mysql-connector',
    ],

    url="https://github.com/SilverW0o0W/Netease-music",
    author="Silver",
    author_email="silver.codingcat@gmail.com",
    license='MIT',
    description="",

    entry_points={
    }
)
