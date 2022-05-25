'use strict';
module.exports = {
  async up ( queryInterface, Sequelize )
  {
    await queryInterface.createTable( 'Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      total: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },

      is_paid: {
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
    } );
  },
  async down ( queryInterface, Sequelize )
  {
    await queryInterface.dropTable( 'Orders' );
  }
};