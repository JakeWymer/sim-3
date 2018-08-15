SELECT * FROM posts
JOIN sim_three_users users ON users.user_id = posts.user_id
WHERE post_id = $1;