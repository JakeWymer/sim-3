const register = (req, res) => {
  let {username, password} = req.body;

  req.app.get('db').add_user([username, password])
    .then(user => {
      req.session.userid = user[0].user_id;
      res.status(200).send(user[0]) 
    })
    .catch(err => res.send(err));
}

const login = (req, res) => {
  let {username, password} = req.body;

  req.app.get('db').get_user([username, password])
    .then(user => {
      req.session.userid = user[0].user_id;
      res.status(200).send(user)
    })
    .catch(err => res.send(err));
}

const logout = (req, res) => {
  req.session.destroy();
  res.send(req.session);
}

const me = (req, res) => {
  req.app.get('db').get_user_by_id(req.session.userid)
    .then(user => {
      if(user[0]) {
        return res.send(user[0])
      }

      return res.send({message: 'Please log in'})
    })
    .catch(err => console.log(err))
}

const getPosts = (req, res) => {
  console.log(req.session);
  let db = req.app.get('db');
  let {search, userposts} = req.query;
  let {userid} = req.session;
  console.log(userid);
  if(!search && !userposts) {
    console.log(1);
    db.get_non_user_posts(userid)
      .then(posts => res.send(posts));
  } else if(search && userposts) {
    db.get_posts_by_search(search)
      .then(posts => res.send(posts))
      .catch(err => console.log(err));
  } else if(search && !userposts) {
    db.get_non_user_posts_by_search([userid, search])
      .then(posts => res.send(posts))
      .catch(err => console.log(err));
  } else {
    db.get_all_posts()
      .then(posts => res.send(posts))
      .catch(err => console.log(err));
  }
}

const getPostById = (req, res) => {
  console.log(req.params);
  req.app.get('db').get_post_by_id(parseInt(req.params.post_id))
    .then(post => res.send(post[0]))
    .catch(err => console.log(err));
}

const createPost = (req, res) => {
  let {title, imageUrl, content} = req.body
  let user_id = req.session.userid;
  req.app.get('db').create_post([user_id, title, imageUrl, content])
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err));
}

module.exports = {
  register,
  login,
  logout,
  me,
  getPosts,
  getPostById,
  createPost
}