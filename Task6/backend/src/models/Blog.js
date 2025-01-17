import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Blog = sequelize.define('blogs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  comments: {
    type: DataTypes.TEXT,
  },
  likesCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  viewersCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'blogs'
});

export default Blog;