"use strict";

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
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Indira Gandhi International Airport",
        code: "DEL",
        address: "New Delhi, India",
        cityId: 1, // Assuming New Delhi has the ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        code: "BOM",
        address: "Mumbai, India",
        cityId: 2, // Assuming Mumbai has the ID 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kempegowda International Airport",
        code: "BLR",
        address: "Bengaluru, India",
        cityId: 3, // Assuming Bengaluru has the ID 3
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chennai International Airport",
        code: "MAA",
        address: "Chennai, India",
        cityId: 4, // Assuming Chennai has the ID 4
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Netaji Subhash Chandra Bose International Airport",
        code: "CCU",
        address: "Kolkata, India",
        cityId: 5, // Assuming Kolkata has the ID 5
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rajiv Gandhi International Airport",
        code: "HYD",
        address: "Hyderabad, India",
        cityId: 6, // Assuming Hyderabad has the ID 6
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pune International Airport",
        code: "PNQ",
        address: "Pune, India",
        cityId: 7, // Assuming Pune has the ID 7
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sardar Vallabhbhai Patel International Airport",
        code: "AMD",
        address: "Ahmedabad, India",
        cityId: 8, // Assuming Ahmedabad has the ID 8
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jaipur International Airport",
        code: "JAI",
        address: "Jaipur, India",
        cityId: 9, // Assuming Jaipur has the ID 9
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Surat International Airport",
        code: "STV",
        address: "Surat, India",
        cityId: 10, // Assuming Surat has the ID 10
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Airports", null, {});
  },
};
