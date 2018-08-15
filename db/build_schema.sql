CREATE TABLE IF NOT EXISTS sim_three_users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50),
    profile_pic TEXT
);

CREATE TABLE IF NOT EXISTS posts(
    post_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES sim_three_users(user_id),
    title VARCHAR(100),
    image TEXT,
    content TEXT
);