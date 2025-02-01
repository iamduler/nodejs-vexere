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
		await queryInterface.bulkInsert('stations', [
			{
				name: "Bến xe Miền Tây",
				address: "395 Đường Kinh Dương Vương, P.An Lạc, Q.Bình Tân, TP. HCM",
				province: "TP. HCM",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Miền Đông cũ",
				address: "292 Đinh Bộ Lĩnh, P.26, Q.Bình Thạnh, TP.Hồ Chí Minh",
				province: "TP. HCM",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Miền Đông mới",
				address: "501 Đường Hoàng Hữu Nam, P.Long Bình, TP.Thủ Đức, TP.Hồ Chí Minh",
				province: "TP. HCM",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Biên Hòa",
				address: "4 Nguyễn Ái Quốc, P. Quang Vinh, TP. Biên Hòa, Tỉnh Đồng Nai",
				province: "Đồng Nai",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Châu Đốc",
				address: "Tuyến tránh Quốc lộ 91, Khóm Hòa Bình, P. Vĩnh Mỹ, TP. Châu Đốc, Tỉnh An Giang",
				province: "An Giang",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Mỹ Đình",
				address: "20 Phạm Hùng, P.Mỹ Đình 2, Q.Nam Từ Liêm, TP. Hà Nội",
				province: "TP. Hà Nội",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Giáp Bát",
				address: "Km6, Đường Giải Phóng, P.Giáp Bát, Q.Hoàng Mai, TP. Hà Nội",
				province: "TP. Hà Nội",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Bãi Cháy",
				address: "17 Đường 279, P. Bãi Cháy, TP. Hạ Long, Quảng Ninh",
				province: "Quảng Ninh",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Hà Giang",
				address: "Đường 9/5, P.Nguyễn Trãi, TP.Hà Giang, Tỉnh Hà Giang",
				province: "Hà Giang",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Vĩnh Niệm",
				address: "15 Bùi Viện, P. Vĩnh Niệm, Q.Lê Chân, TP. Hải Phòng",
				province: "TP. Hải Phòng",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Trung tâm Đà Nẵng",
				address: "148 Tôn Đức Thắng, P. Hòa Minh, Q. Liên Chiểu, TP. Đà Nẵng",
				province: "TP. Đà Nẵng",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe phía Bắc Nha Trang",
				address: "Số 1 Đường 2/4, TP. Nha Trang, Tỉnh Khánh Hòa",
				province: "Khánh Hòa",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe phía Nam Nha Trang",
				address: "6 Đường 23/10, TP. Nha Trang, Tỉnh Khánh Hòa",
				province: "Khánh Hòa",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe Đồng Hới",
				address: "156 Trần Hưng Đạo, P.Đồng Phú, TP.Đồng Hới, Tỉnh Quảng Bình",
				province: "Quảng Bình",
				createdAt: "2025-01-31 05:54:51",
				updatedAt: "2025-01-31 05:54:51",
			},
			{
				name: "Bến xe phía Nam Huế",
				address: "132 Đường Lý Thái Tổ, P.An Hòa, TP. Huế, Tỉnh Thừa Thiên Huế",
				province: "Thừa Thiên Huế",
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

		await queryInterface.bulkDelete('stations', null, {});
	}
};
