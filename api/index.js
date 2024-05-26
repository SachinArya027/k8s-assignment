import express from 'express';
import './db/index.js';
import Todo from './models/Todo.js';

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

app.get('/heartbeat', (req, res) => {
  res.send('❤️❤️❤️');
});

app.post('/todo', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).send(todo);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/todo/:id', async (req, res) => {
  try {
    const todo = await Todo.destroy({
      where: {
        id: req.params.id
      }
    });
    if (todo) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Todo not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/todo', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.send(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/todo/:id', async (req, res) => {
  try {
    const todo = await Todo.destroy({
      where: {
        id: req.params.id
      }
    });
    if (todo) {
      res.send();
    } else {
      res.status(404).send({ message: 'Todo not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/extraload', (req, res) => {
  let result = 0;
  for (let i = 0; i < 1e5; i++) {
    result++;
  }
  res.send(`Extra Load result ${result}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
