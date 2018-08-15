const app = require('express')();
const massive = require('massive');
const controller = require('./controller');
const {json} = require('body-parser');
require('dotenv').config();

const port = 5000;

app.use(json());

massive(process.env.DB_URL)
  .then(db => {
    app.set('db', db);
    app.get('db').build_schema()
      .then(() => console.log('SCHEMA BUILT'))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

app.post('/login', controller.login);
app.post('/register', controller.register);

app.get('/posts', controller.getPosts);
app.get('/posts/:post_id', controller.getPostById);

app.post('/posts/create/:user_id', controller.createPost);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});