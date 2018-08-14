const app = require('express')();
const massive = require('massive');

require('dotenv').config();

const port = 5000;

massive(process.env.DB_URL)
  .then(db => {
    app.set('db', db);
    console.log('DB CONNECTED');
  })
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});