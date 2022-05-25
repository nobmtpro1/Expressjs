'use strict';
module.exports = {
  async up ( queryInterface, Sequelize )
  {
    await queryInterface.createTable( 'SoldTickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticket_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'tickets'
          },
          key: 'id'
        },
      },
      code: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    } );
  },
  async down ( queryInterface, Sequelize )
  {
    await queryInterface.dropTable( 'SoldTickets' );
  }
};