const { Sequelize } = require("sequelize");

const CrudRepository = require("./crud-repository");
const { Flight, Airplane, Airport, City } = require("../models");
const db = require("../models");
const { addRowLockOnFlights } = require("./queries");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    let updatedFlights = {};

    const flights = await Flight.findAll({
      where: filter,
      order: sort,
    });

    const arrivalAirportInfo = await Airport.findOne({
      attributes: ["code", "name", "address"],
      where: {
        code: flights
          .map((data) => data.dataValues.arrivalAirportId)
          .join("")
          .slice(0, 3),
      },
    });

    const departureAirportInfo = await Airport.findOne({
      attributes: ["code", "name", "address"],
      where: {
        code: flights
          .map((data) => data.dataValues.departureAirportId)
          .join("")
          .slice(0, 3),
      },
    });
    if (Object.keys(filter).length > 0) {
      updatedFlights.departureAirportInfo = departureAirportInfo;
      updatedFlights.arrivalAirportInfo = arrivalAirportInfo;
    }
    updatedFlights.flightInfo = flights;

    return updatedFlights;
  }

  async updateRemainingSeats(flightId, seats, dec = true) {
    const transaction = await db.sequelize.transaction();
    try {
      await db.sequelize.query(addRowLockOnFlights(flightId));
      const flight = await Flight.findByPk(flightId);
      if (+dec) {
        await flight.decrement(
          "totalSeats",
          { by: seats },
          { transaction: transaction }
        );
      } else {
        await flight.increment(
          "totalSeats",
          { by: seats },
          { transaction: transaction }
        );
      }
      await transaction.commit();
      return flight;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = FlightRepository;
