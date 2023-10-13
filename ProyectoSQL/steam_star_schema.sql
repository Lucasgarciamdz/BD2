CREATE TABLE sales_fact (
    sale_id INT,
    user_id INT,
    game_id INT,
    sale_date DATE,
    price DECIMAL(10,2),
    discount DECIMAL(5,2),
    quantity INT,
    revenue DECIMAL(10,2),
    rating INT,
    PRIMARY KEY (sale_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (game_id) REFERENCES games(game_id),
    FOREIGN KEY (sale_id) REFERENCES sales(sale_id)
);

CREATE TABLE game_dim (
    game_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    release_date DATE NOT NULL,
    developer VARCHAR(255) NOT NULL,
    platform VARCHAR(255) NOT NULL,
    genres VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    characteristics VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    video_url VARCHAR(255) NOT NULL
);

CREATE TABLE user_dim (
    user_id INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(255) NOT NULL,
    registration_date DATE NOT NULL
);

CREATE TABLE sale_dim (
    sale_id INT PRIMARY KEY,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    sale_type VARCHAR(255) NOT NULL,
    discount_type VARCHAR(255) NOT NULL,
    discount_amount DECIMAL(5,2) NOT NULL
);

CREATE TABLE platform_dim (
    platform_id INT PRIMARY KEY,
    platform_name VARCHAR(255) NOT NULL
);

CREATE TABLE genre_dim (
    genre_id INT PRIMARY KEY,
    genre_name VARCHAR(255) NOT NULL
);

CREATE TABLE developer_dim (
    developer_id INT PRIMARY KEY,
    developer_name VARCHAR(255) NOT NULL
);

CREATE TABLE review_dim (
    review_id INT PRIMARY KEY,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    review_date DATE NOT NULL,
    rating INT NOT NULL,
    comment TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_dim(user_id),
    FOREIGN KEY (game_id) REFERENCES game_dim(game_id)
);

CREATE TABLE purchase_dim (
    purchase_id INT PRIMARY KEY,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    purchase_date DATE NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    sale_id INT,
    FOREIGN KEY (user_id) REFERENCES user_dim(user_id),
    FOREIGN KEY (game_id) REFERENCES game_dim(game_id),
    FOREIGN KEY (sale_id) REFERENCES sale_dim(sale_id)
);