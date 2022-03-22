const { DataTypes } = require('@sequelize/core');
const databaseConnection = require('../../config/connection.config');

const Books = databaseConnection.define("books", {
  sbn: DataTypes.TEXT,
  name: DataTypes.TEXT,
  description: DataTypes.TEXT,
  author: DataTypes.TEXT,
  stock: DataTypes.INTEGER
}, { createdAt: false, updatedAt: false });

module.exports = Books