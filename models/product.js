'use strict'
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {})
  product.associate = function (models) {
    // associations can be defined here
  }
  return product
}
