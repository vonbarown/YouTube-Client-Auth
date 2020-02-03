DROP DATABASE IF EXISTS youtube_client;

CREATE DATABASE youtube_client;

\c youtube_client;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL
);