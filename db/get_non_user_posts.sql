SELECT * FROM posts
JOIN sim_three_users ON sim_three_users.user_id = posts.user_id
WHERE posts.user_id != $1;
