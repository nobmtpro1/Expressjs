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

    await queryInterface.bulkInsert( 'Tickets', [
      {
        type: 0,
        image: "1653415285178.svg",
        name: "Digital Category",
        date: "2022-05-25",
        from: "13:00:00",
        to: "15:00:00",
        quantity: 250,
        address: "http://event.aimacademy.vn/livestream",
        price: 500000,
        link_video: "https://www.youtube.com/watch?v=COkQVvie0jc&ab_channel=EmergencyAwesome",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor neque elit, eget molestie purus laoreet quis. Morbi luctus urna vitae nibh feugiat, in varius velit semper. Curabitur euismod elit magna, vel condimentum eros cursus vel. Fusce vest",
        is_active: 1,
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
    await queryInterface.bulkDelete( 'Tickets', null, {} );
  }
};
