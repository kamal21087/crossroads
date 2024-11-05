const { DataTypes } = require('sequelize'); // import the DataTypes object from sequelize.
const sequelize = require('../config/db'); // import the sequelize object from the db.js file in the config folder.

const Restaurant = sequelize.define('Restaurant', { // define the Restaurant model with the specified fields.
  name: { 
    type: DataTypes.STRING, 
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rooftop: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Restaurant; // export the Restaurant model.
