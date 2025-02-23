'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [
			{
				name: 'Bui Duc Lam',
				email: 'example1@gmail.com',
        password: 'vietnam',
        numberPhone: '0909123123',
        type: 'admin',
        avatar: '',
        createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: 'Tran Duc LOng',
				email: 'example2@gmail.com',
        password: 'vietnam',
        numberPhone: '0909123123',
        type: 'admin',
        avatar: '',
        createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
		], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
