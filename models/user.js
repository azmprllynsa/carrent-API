'use strict'
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fullname: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_card: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    rentaller_id: DataTypes.STRING,
    role_id: DataTypes.STRING,
    status: DataTypes.STRING
  }, {})
  user.associate = function (models) {
    // associations can be defined here
  }
  return user
}
