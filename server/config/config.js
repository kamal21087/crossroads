require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};

// ChatGPT recommends the following...
// --------------------------------------------
  // const { Sequelize } = require('sequelize');

  // const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  //   host: process.env.DB_HOST,
  //   dialect: 'postgres',
  // });

  // module.exports = sequelize;
// --------------------------------------------