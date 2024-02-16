const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config(); 

const environment = process.env.NODE_ENV || 'development';
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dialect = process.env.DB_DIALECT;
const host = process.env.DB_HOST;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = sequelize;
