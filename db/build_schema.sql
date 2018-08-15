CREATE TABLE IF NOT EXISTS sim_three_users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50),
    profile_pic TEXT
);