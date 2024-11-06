const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Restaurant = sequelize.define('Restaurant', {
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  rooftop: { type: DataTypes.BOOLEAN, allowNull: false },
  website: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  imgUrl: { type: DataTypes.STRING },
});

module.exports = Restaurant;