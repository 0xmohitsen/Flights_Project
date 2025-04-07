"use strict";
const { Op } = require("sequelize");
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
    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "airbus340",
        capacity: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "boeing777",
        capacity: 450,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "airbus320ceo",
        capacity: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "atr722",
        capacity: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "boeing787",
        capacity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "airbus321neo",
        capacity: 240,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "boeing737max",
        capacity: 220,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "airbus319",
        capacity: 160,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "boeing767",
        capacity: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Airplanes", null, {});
  },
};
