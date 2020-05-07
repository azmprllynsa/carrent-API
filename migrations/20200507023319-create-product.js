'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rentaller_id: {
        type: Sequelize.INTEGER
      },
      car_images: {
        type: Sequelize.STRING
      },
      car_title: {
        type: Sequelize.STRING
      },
      price_per_day: {
        type: Sequelize.INTEGER
      },
      transmission_id: {
        type: Sequelize.INTEGER
      },
      baggage_capacity: {
        type: Sequelize.INTEGER
      },
      engine_type: {
        type: Sequelize.STRING
      },
      engine_capacity: {
        type: Sequelize.INTEGER
      },
      additional_driver: {
        type: Sequelize.INTEGER
      },
      person_capacity: {
        type: Sequelize.INTEGER
      },
      doors: {
        type: Sequelize.INTEGER
      },
      manufacturing_year: {
        type: Sequelize.STRING
      },
      avg_fuel_consumption: {
        type: Sequelize.INTEGER
      },
      srs_airbag: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
}
