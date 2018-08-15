INSERT INTO sim_three_users(username, password)
VALUES ($1, $2)
RETURNING *;