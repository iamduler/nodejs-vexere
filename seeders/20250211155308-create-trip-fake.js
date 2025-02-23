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
		await queryInterface.bulkInsert('trips', [
			{
				fromStation: 1,
				toStation: 2,
				startTime: "2025-10-10 08:30:00",
				price: 500000,
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				fromStation: 3,
				toStation: 4,
				startTime: "2025-11-10 08:30:00",
				price: 600000,
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				fromStation: 1,
				toStation: 3,
				startTime: "2025-11-10 10:30:00",
				price: 650000,
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
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

		await queryInterface.bulkDelete('trips', null, {});
	}
};
