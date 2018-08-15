const register = (req, res) => {
  let {username, password} = req.body;

  req.app.get('db').add_user([username, password])
    .then(user => res.status(200).send(user[0]))
    .catch(err => res.send(err));
}

const login = (req, res) => {
  let {username, password} = req.body;

  req.app.get('db').get_user([username, password])
    .then(user => res.status(200).send(user))
    .catch(err => res.send(err));
}

module.exports = {
  register,
  login
}