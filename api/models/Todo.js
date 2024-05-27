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

Todo.sync();  

export default Todo;
