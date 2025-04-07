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
    await queryInterface.bulkInsert("Flights", [
      {
        flightNumber: "AI101",
        airplaneId: 1, // airbus340
        departureAirportId: 1, // New Delhi
        arrivalAirportId: 2, // Mumbai
        departureTime: new Date("2025-05-01T10:00:00Z"),
        arrivalTime: new Date("2025-05-01T12:30:00Z"),
        price: 5000,
        boardingGate: "A5",
        totalSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flightNumber: "AI102",
        airplaneId: 2, // boeing777
        departureAirportId: 3, // Bengaluru
        arrivalAirportId: 4, // Chennai
        departureTime: new Date("2025-05-01T14:00:00Z"),
        arrivalTime: new Date("2025-05-01T16:30:00Z"),
        price: 4500,
        boardingGate: "B3",
        totalSeats: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flightNumber: "AI103",
        airplaneId: 3, // airbus320ceo
        departureAirportId: 5, // Kolkata
        arrivalAirportId: 6, // Hyderabad
        departureTime: new Date("2025-05-01T18:00:00Z"),
        arrivalTime: new Date("2025-05-01T20:30:00Z"),
        price: 4000,
        boardingGate: "C1",
        totalSeats: 220,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flightNumber: "AI104",
        airplaneId: 4, // atr722
        departureAirportId: 7, // Pune
        arrivalAirportId: 8, // Ahmedabad
        departureTime: new Date("2025-05-01T09:30:00Z"),
        arrivalTime: new Date("2025-05-01T11:45:00Z"),
        price: 3500,
        boardingGate: "D2",
        totalSeats: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flightNumber: "AI105",
        airplaneId: 5, // boeing787
        departureAirportId: 9, // Jaipur
        arrivalAirportId: 10, // Surat
        departureTime: new Date("2025-05-01T15:00:00Z"),
        arrivalTime: new Date("2025-05-01T17:30:00Z"),
        price: 6000,
        boardingGate: "E4",
        totalSeats: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flightNumber: "AI106",
        airplaneId: 6, // airbus321neo
        departureAirportId: 1, // New Delhi
        arrivalAirportId: 4, // Chennai
        departureTime: new Date("2025-05-02T12:00:00Z"),
        arrivalTime: new Date("2025-05-02T14:30:00Z"),
        price: 7000,
        boardingGate: "F1",
        totalSeats: 240,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flightNumber: "AI107",
        airplaneId: 7, // boeing737max
        departureAirportId: 3, // Bengaluru
        arrivalAirportId: 6, // Hyderabad
        departureTime: new Date("2025-05-02T17:00:00Z"),
        arrivalTime: new Date("2025-05-02T19:00:00Z"),
        price: 5000,
        boardingGate: "G2",
        totalSeats: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Flights", null, {});
  },
};
