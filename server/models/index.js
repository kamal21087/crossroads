// server/models/index.js
const Sequelize = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(config.development);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./User')(sequelize, Sequelize.DataTypes);
db.Location = require('./location')(sequelize, Sequelize.DataTypes);

// Define associations
db.User.hasMany(db.Location, { foreignKey: 'userId' });
db.Location.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
