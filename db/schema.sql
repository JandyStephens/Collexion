DROP DATABASE IF EXISTS collexion_db;
CREATE DATABASE collexion_db;
USE collexion_db;

CREATE TABLE categories(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (100) NOT NULL,
    number_of_collections INTEGER NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    image_url VARCHAR(100),
    gender VARCHAR(10),
    discription VARCHAR(150),
    number_of_collections INTEGER NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE collections(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    post_time VARCHAR(100) NOT NULL,
    price INTEGER,
    quantity INTEGER,
    image1_url VARCHAR(100) NOT NULL,
    image2_url VARCHAR(100),
    image3_url VARCHAR(100),
    image4_url VARCHAR(100),
    image5_url VARCHAR(100),
    discription VARCHAR(200) NOT NULL,
    comment VARCHAR(300),
    user_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY(id)
)
