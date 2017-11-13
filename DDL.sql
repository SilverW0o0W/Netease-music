-- proxy_ip.db
create table proxy_ip(id INTEGER primary key autoincrement, ip VARCHAR(20), port VARCHAR(10),https TINYINT,available TINYINT,verify_time TIMESTAMP default (datetime('now', 'localtime')), create_time TIMESTAMP default (datetime('now', 'localtime')))


-- comment.db
-- type: MySQL
-- temp
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `song_id` varchar(20) DEFAULT NULL,
  `user_id` varchar(20) DEFAULT NULL,
  `comment_id` varchar(30) DEFAULT NULL,
  `be_replied` varchar(30) DEFAULT NULL,
  `content` varchar(200) DEFAULT NULL,
  `comment_time` timestamp NULL DEFAULT NULL,
  `liked_count` int(11) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
