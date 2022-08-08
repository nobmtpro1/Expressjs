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

    for ( let i = 1; i < 12; i++ )
    {
      arr.push( {
        course_category_id: getRandomArbitrary( 1, 5 ),
        name: 'Course ' + i,
        price:  i * 200000 ,
        is_active: getRandomArbitrary(0,1)
      } )
    }

    await queryInterface.bulkInsert( 'Courses', arr, {} );
  },

  async down ( queryInterface, Sequelize )
  {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete( 'Courses', null, {} );
  }
};
