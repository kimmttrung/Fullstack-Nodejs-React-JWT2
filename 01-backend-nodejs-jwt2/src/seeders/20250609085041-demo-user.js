'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('User',
      [
        {
          email: 'trung@gmail.com',
          password: '123456',
          username: 'Trung Mai',
        },
        {
          email: 'fake1@gmail.com',
          password: '123',
          username: 'Fake1',
        },
        {
          email: 'fake2@gmail.com',
          password: '123',
          username: 'Fake2',
        },

      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
