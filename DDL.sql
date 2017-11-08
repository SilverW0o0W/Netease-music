-- proxy_ip.db
create table proxy_ip(id INTEGER primary key autoincrement, ip VARCHAR(20), port VARCHAR(10),https TINYINT,available TINYINT,verify_time TIMESTAMP default (datetime('now', 'localtime')), create_time TIMESTAMP default (datetime('now', 'localtime')))


-- comment.db
-- type: MySQL
-- temp
create table comment(id int primary key AUTO_INCREMENT, song_id varchar(20), user_id varchar(20), comment_id varchar(30), be_replied varchar(30), content varchar(200), comment_time timestamp, liked_count int, create_time timestamp default CURRENT_TIMESTAMP)