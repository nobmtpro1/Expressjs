'use strict';
module.exports = {
  async up ( queryInterface, Sequelize )
  {
    await queryInterface.createTable( 'OrderDetails', {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ticket_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      data: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    } );
  },
  async down ( queryInterface, Sequelize )
  {
    await queryInterface.dropTable( 'OrderDetails' );
  }
};