const { StatusCodes } = require('http-status-codes');
const  { FlightRepository } = require('../repositories');
const { Op } = require('sequelize');
const AppError = require('../utils/errors/app-error');

const flightRepository = new FlightRepository();

async function createFlight(data){
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        console.log(error);
        if(error.name === 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((ele) => {
                explanation.push(ele.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight Object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query){
    

        //trips = 'MUM-BLR'
        //prices = 5000-10000
        const customFilter = {};
        const endingTripTime = " 23:59:00";
        let sortFilter = [];
        
        if(query.trips){
            [departureAirportId, arrivalAirportId] = query.trips.split("-");
            customFilter.departureAirportId = departureAirportId;
            customFilter.arrivalAirportId = arrivalAirportId;
        }

        if(query.prices){
            [minPrice, maxPrice] = query.prices.split("-");
            customFilter.ticketPrice = {
            [Op.between] : [minPrice , (maxPrice == undefined) ? 100000 : maxPrice ]
            } 
        }
        if(query.traveller){
            customFilter.seatCapacity = {
                [Op.gte]: [query.traveller]
            }
        }
        if(query.tripDate){
            customFilter.departureTime = {
                [Op.between]: [query.tripDate, query.tripDate + endingTripTime]
            }
        }
        if(query.sort){
            const params = query.sort.split(",");
            const sortFilters = params.map((param) => param.split("_"));
            sortFilter = sortFilters;
            console.log(sortFilter);
        }

        try {
        const flights = await flightRepository.getAllFlights(customFilter,sortFilter);

        return flights;
    } catch (error) {
        throw new AppError('Cannot fetch data of Flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight,
    getAllFlights
}