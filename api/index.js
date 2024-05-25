import express from 'express';
import './db/index.js';
import Todo from './models/Todo.js';

const app = express();
const port = process.env.PORT || 8080;

app.get('/heartbeat', (req, res) => {
  res.send('❤️❤️❤️');
});

app.get('/todo', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.send(todos)
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
