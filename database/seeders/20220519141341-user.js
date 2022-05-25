'use strict';
const bcrypt = require( 'bcrypt' );

module.exports = {
  async up ( queryInterface, Sequelize )
  {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert( 'Users', [
      {
        name: 'Admin',
        username: 'admin',
        password: bcrypt.hashSync( '123', bcrypt.genSaltSync( 10 ) )
      }
    ], {} );
  },

  async down ( queryInterface, Sequelize )
  {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete( 'Users', null, {} );
  }
};
