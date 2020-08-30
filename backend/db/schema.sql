DROP DATABASE IF EXISTS my_tik_tok;
CREATE DATABASE my_tik_tok;

\c my_tik_tok;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS hashtags;

CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    userName TEXT NOT NULL UNIQUE,
    bio VARCHAR,
    profile_pic_url VARCHAR
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    poster_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    video_url VARCHAR/* VARBINARY(MAX)*/,
    caption VARCHAR(250)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    commentor_id VARCHAR REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    body VARCHAR(250)
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    liker_id VARCHAR REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE hashtags (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    body TEXT
);

INSERT INTO users (id, firstName, lastName, userName, bio, profile_pic_url) 
VALUES 
    ('1', 'Tessa', 'Barrett', 't_time', 'Tessa in the house!', 'https://images.photowall.com/products/44013/daisy-close-up.jpg?h=699&q=85'),
    ('2', 'Rocky', 'Queen', 'rocket', 'Off this!', 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    ('3', 'Jade', 'Moon', 'Jbabyyy', 'I am eternal.', 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    ('4', 'Lamina', 'Williams', 'memo67', 'I just want to be happy.', 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    ('5', 'Maria', 'Martinez', 'marializa', 'Im a bad ass baker!', 'https://images.pexels.com/photos/3115708/pexels-photo-3115708.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    ('6', 'Marvin', 'Thompson', 'earrocker', 'I breathe music!', 'https://images.pexels.com/photos/2240766/pexels-photo-2240766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    ('7', 'Henry', 'Nunez', 'theflashwishes', 'Try and outrun me if you can.', 'https://images.pexels.com/photos/4006567/pexels-photo-4006567.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');

INSERT INTO posts (id, poster_id, video_url, caption)
VALUES
    ('1', '1', 'https://www.joe.ie/life-style/9-of-the-best-60-seconds-or-less-youtube-videos-551969', 'HAHA'),
    ('2', '2', 'https://www.youtube.com/watch?v=i5DjkBBonlo', 'This is weird'),
    ('3', '3', 'https://www.youtube.com/watch?v=hcKtMjrZ0Dg', 'Ummmm...'),
    ('4', '4', 'https://www.buzzfeed.com/lyapalater/youtube-videos-under-60-seconds-long-that-you-need-to', 'Whaaaaat?!'),
    ('5', '5', 'https://www.youtube.com/watch?v=H1gHwfFGtcg', 'What just happened?'),
    ('6', '6', 'https://www.youtube.com/watch?v=Y8KiYqg077w', 'That was cool'),
    ('7', '7', 'https://www.youtube.com/watch?v=eQqebq_gfzM', 'Awwww'),
    ('8', '4', 'https://www.pinterest.com/pin/309692911869563856/', 'Take it or leave it.'),
    ('9', '6', 'https://www.youtube.com/watch?v=sjG_XLaOXf4', 'I does this!!'),
    ('10', '5', 'https://www.youtube.com/watch?v=kY3qxdTBXOU', 'Try it!'),
    ('11', '7', 'https://www.youtube.com/watch?v=p2vEoNuRvrA', 'Really?!');
    