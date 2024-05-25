import { DataTypes } from 'sequelize';
import db from '../db/index.js';

const Todo = db.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Incomplete'
  }
});

const createTodos = async () => {
  try {
    await Todo.sync();

    const mockData = [
      { title: 'Buy groceries', status: 'Incomplete' },
      { title: 'Do laundry', status: 'Incomplete' },
      { title: 'Finish project', status: 'Incomplete' }
    ];

    await Todo.bulkCreate(mockData);
  } catch (err) {
    console.log('Error creating table or adding data', err);
  }
};

createTodos();

export default Todo;
