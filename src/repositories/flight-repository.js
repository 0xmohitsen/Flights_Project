const CrudRepository = require('./crud-repository');

const { Flight } = require('../models');
const { Airport } = require('../models');

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter, sort){
        let updatedFlights = {};

        const flights = await Flight.findAll({
            where : filter,
            order: sort
        });
        
        const arrivalAirportInfo = await Airport.findOne({
            attributes: ['code', 'name', 'address'],
            where: {
                code: flights.map(data => data.dataValues.arrivalAirportId).join("").slice(0,3)
            }
        })

        const departureAirportInfo = await Airport.findOne({
            attributes: ['code', 'name', 'address'],
            where: {
                code: flights.map(data => data.dataValues.departureAirportId).join("").slice(0,3)
            }
        })
        if(Object.keys(filter).length > 0 ){
            updatedFlights.departureAirportInfo = departureAirportInfo;
            updatedFlights.arrivalAirportInfo = arrivalAirportInfo;
        }
        updatedFlights.flightInfo = flights;

        return updatedFlights;
    }

    async updateRemainingSeat(flightId, seats, dec = true){
        const flight = await Flight.findByPk(flightId);
        if(+dec){
            const response = await flight.decrement('seatCapacity', {by: seats});
            // return response;
        } else {
            const response = await flight.increment('seatCapacity', {by: seats});
            // return response;
        }

        const updatedFlight = await Flight.findByPk(flightId);

        return updatedFlight;
    }
}

module.exports = FlightRepository;