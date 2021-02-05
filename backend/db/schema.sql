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
    firstname VARCHAR,
    lastname VARCHAR,
    display_name VARCHAR NOT NULL UNIQUE,
    username VARCHAR NOT NULL UNIQUE,
    bio TEXT,
    profile_pic_url VARCHAR,
    join_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    poster_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    video_url VARCHAR/* VARBINARY(MAX)*/,
    caption VARCHAR(200),
    created_at_timestamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    commentor_id VARCHAR REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    body VARCHAR(300),
    created_at_timestamp TIMESTAMP DEFAULT NOW()

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

INSERT INTO users (id, firstname, lastname, display_name, username, bio, profile_pic_url) 
VALUES 
    ('1', 'Tessa', 'Barrett', 'TessaB', 't_time', 'Tessa in the house!', 'https://images.photowall.com/products/44013/daisy-close-up.jpg?h=699&q=85'),
    ('2', 'Rocky', 'Queen', 'Starstruck', 'rocket', 'Off this!', 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    ('3', 'Jade', 'Moon', 'Jade', 'Jbabyyy', 'I am eternal.', 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    ('4', 'Lamina', 'Williams', 'Mina21', 'memo67', 'I just want to be happy.', 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    ('5', 'Maria', 'Martinez', 'Coding Mom', 'marializa', 'Im a bad ass baker!', 'https://images.pexels.com/photos/3115708/pexels-photo-3115708.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    ('6', 'Marvin', 'Thompson', 'SadBoiPlays', 'earrocker', 'I breathe music!', 'https://images.pexels.com/photos/2240766/pexels-photo-2240766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    ('XFii3S3xEBcv8rFJ9omsWT7Adh93', 'Henry', 'Nunez', 'Honri', 'theflashwishes', 'Try and outrun me if you can.', 'https://images.pexels.com/photos/4006567/pexels-photo-4006567.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');

INSERT INTO posts (poster_id, video_url, caption, created_at_timestamp)
VALUES
    ('1', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2FbloopertestF.MP4?alt=media&token=b1049110-a3fc-4440-a964-dfb2428e4349', 'HAHA', '2021-01-24 17:50:04.349904'),
    ('2', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2Fblooptester4.mov?alt=media&token=ba7f8bce-4e39-446b-a9af-1d64d8310a13', 'This is weird', '2021-01-23 17:50:04.349904'),
    ('3', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2Fblooptester3.MOV.mp4?alt=media&token=83966e7a-4e5b-4019-a9ca-7abecba12972', 'Ummmm...', '2021-01-24 12:50:04.349904'),
    ('4', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2Fblooptester2.MOV?alt=media&token=5f47aef3-fbe0-4695-ace6-71033542a21b', 'Whaaaaat?!', '2021-01-22 17:50:04.349904'),
    ('5', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2Fblooptester.MOV?alt=media&token=b9e3a197-b8cf-454c-835f-f27360b67e77', 'What just happened?', '2021-01-24 12:00:00.349904'),
    ('6', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2FbloopertestD.MP4?alt=media&token=e035c617-c98d-4c7a-aa39-6b22eceed294', 'That was cool', '2021-01-23 09:55:00.349904'),
    ('XFii3S3xEBcv8rFJ9omsWT7Adh93', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2FbloopertestC.MP4?alt=media&token=78edc95a-632a-4edd-b741-29a36f54e9dd', 'Awwww', '2021-01-23 11:35:00.349904'),
    ('4', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2FbloopertestB.mp4?alt=media&token=44632126-8b9b-44f7-8799-f96deaaf13e6', 'Take it or leave it.', '2021-01-25 08:40:04.349904'),
    ('6', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2FbloopertestA.mp4?alt=media&token=706f7581-e377-4ebe-b4d3-dade4e0205ba', 'I does this!!', '2021-01-25 09:10:04.349904'),
    ('5', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2F2520429f744a834d4ad7c28361786445.MOV?alt=media&token=04962abe-8b02-4099-b0af-acf53fab8e86', 'Try it!', '2021-01-25 10:50:04.349904'),
    ('XFii3S3xEBcv8rFJ9omsWT7Adh93', 'https://firebasestorage.googleapis.com/v0/b/my-tik-tok-bf4bd.appspot.com/o/videos%2Fbigbuckbunny.mp4?alt=media&token=961101dd-8877-4c1d-81c3-1ffc04b83e0f', 'Really?!', '2021-01-25 11:50:04.349904')
    ;
    