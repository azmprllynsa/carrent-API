'use strict'
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    rentaller_id: DataTypes.INTEGER,
    car_images: DataTypes.STRING,
    car_title: DataTypes.STRING,
    price_per_day: DataTypes.INTEGER,
    transmission_id: DataTypes.INTEGER,
    baggage_capacity: DataTypes.INTEGER,
    engine_type: DataTypes.STRING,
    engine_capacity: DataTypes.INTEGER,
    additional_driver: DataTypes.INTEGER,
    person_capacity: DataTypes.INTEGER,
    doors: DataTypes.INTEGER,
    manufacturing_year: DataTypes.STRING,
    avg_fuel_consumption: DataTypes.INTEGER,
    srs_airbag: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {})
  product.associate = function (models) {
    // associations can be defined here
  }
  return product
}
