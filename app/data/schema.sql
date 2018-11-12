CREATE DATABASE if not exists datafriends_db;

USE datafriends_db;

CREATE TABLE IF NOT EXISTS users(
    id INT(10) NOT NULL AUTO_INCREMENT
    , name VARCHAR(45) NOT NULL
    , photo VARCHAR(200) NOT NULL
    , scores VARCHAR (40) NOT NULL
    , PRIMARY KEY (id)
);
