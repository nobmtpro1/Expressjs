'use strict';

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

     function getRandomArbitrary ( min, max )
     {
       return Math.random() * ( max - min ) + min;
     }

    var arr = []

    for ( let i = 1; i < 24; i++ )
    {
      arr.push( {
        name: 'Session ' + i,
        price:   i * 200000 ,
        is_active: getRandomArbitrary(0,1)
      } )
    }

    await queryInterface.bulkInsert( 'Sessions', arr, {} );


  },

  async down ( queryInterface, Sequelize )
  {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete( 'Sessions', null, {} );
  }
};
