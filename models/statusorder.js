'use strict'
module.exports = (sequelize, DataTypes) => {
  const statusOrder = sequelize.define('statusOrder', {
    status: DataTypes.STRING
  }, {})
  statusOrder.associate = function (models) {
    // associations can be defined here
  }
  return statusOrder
}
