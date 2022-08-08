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

    for ( let i = 1; i < 72; i++ )
    {
      var course_id = getRandomArbitrary( 1, 12 )
      var session_id = getRandomArbitrary( 1, 24 )
      var check = arr.find( e => e.course_id == course_id && e.session_id == session_id )
      if ( !check )
      {
        arr.push( {
          course_id: getRandomArbitrary( 1, 12 ),
          session_id: getRandomArbitrary( 1, 24 ),
        } )
      }
    }

    await queryInterface.bulkInsert( 'CourseVsSessions', arr, {} );


  },

  async down ( queryInterface, Sequelize )
  {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete( 'CourseVsSessions', null, {} );
  }
};
