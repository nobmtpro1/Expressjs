'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      image: {
        type: Sequelize.STRING,
        allowNull: null,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: null,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: null,
      },
      from: {
        type: Sequelize.TIME,
        allowNull: null,
      },
      to: {
        type: Sequelize.TIME,
        allowNull: null,
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      address: {
        type: Sequelize.STRING,
        allowNull: null,
      },
      price: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      link_video: {
        type: Sequelize.STRING,
        allowNull: null,
      },
      overview: {
        type: Sequelize.STRING,
        allowNull: null,
      },
      is_active: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};