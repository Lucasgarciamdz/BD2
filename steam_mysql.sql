CREATE DATABASE steam_games;

USE steam_games;

CREATE TABLE games (
    game_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    release_date DATE NOT NULL,
    developer VARCHAR(255) NOT NULL,
    platform VARCHAR(255) NOT NULL,
    genres VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    characteristics VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    video_url VARCHAR(255) NOT NULL
);

CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE games_owned (
    user_id INT,
    game_id INT,
    purchase_date DATE,
    PRIMARY KEY (user_id, game_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (game_id) REFERENCES games(game_id)
);

CREATE TABLE wishlist (
    user_id INT,
    game_id INT,
    PRIMARY KEY (user_id, game_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (game_id) REFERENCES games(game_id)
);

CREATE TABLE reviews (
    user_id INT,
    game_id INT,
    rating INT NOT NULL,
    comment TEXT NOT NULL,
    PRIMARY KEY (user_id, game_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (game_id) REFERENCES games(game_id)
);

CREATE TABLE carts (
    user_id INT,
    game_id INT,
    quantity INT NOT NULL,
    PRIMARY KEY (user_id, game_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (game_id) REFERENCES games(game_id)
);

CREATE TABLE library (
    user_id INT,
    game_id INT,
    purchase_date DATE NOT NULL,
    PRIMARY KEY (user_id, game_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (game_id) REFERENCES games(game_id)
);