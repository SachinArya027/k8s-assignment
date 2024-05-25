const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 8080;

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD
});

app.get('/test', (req, res) => {
  res.send('hi there !!!');
});

app.get('/', (req, res) => {
  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ result: result.rows });
    }
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
