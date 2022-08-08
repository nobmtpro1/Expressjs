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

    for ( let i = 1; i < 6; i++ )
    {
      arr.push( {
        name: 'Course category ' + i,
        is_active: getRandomArbitrary( 0, 1 )
      } )
    }

    await queryInterface.bulkInsert( 'CourseCategories', arr, {} );
  },

  async down ( queryInterface, Sequelize )
  {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete( 'CourseCategories', null, {} );
  }
};
