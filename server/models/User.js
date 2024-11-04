module.exports = (sequelize, DataTypes) => { // export a function that defines the User model.
  const User = sequelize.define('User', { // define the User model with the specified fields.
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return User;
};