const { StatusCodes } = require('http-status-codes');

const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/*
    POST : /airports
    req -> BODY { 
        flightNumber: 'UK 808'
        airplaneId: 1
        arrivalAirportId: BLR
        departureAirportId: DL
        arrivalTime: 24-2-12 09:30:00
        departureTime: 24-2-12 07:30:00
        ticketPrice: 3500
        boardingGate: 
        seatCapacity: 
    }
*/

async function createFlight(req, res){
    try{
        const airport = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureAirportId: req.body.departureAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            ticketPrice: req.body.ticketPrice,
            boardingGate: req.body.boardingGate,
            seatCapacity: req.body.seatCapacity
        });

        SuccessResponse.data = airport;

        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error){
        ErrorResponse.error = error;

        return res
                .status(error.StatusCode)
                .json(ErrorResponse);
    }
}

async function getAllFlights(req, res){
    try {

        const flights = await FlightService.getAllFlights(req.query)
        SuccessResponse.data = flights;

        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getFlight(req, res){
    try {
        const flight = await FlightService.getFlight(req.params.id);
        
        SuccessResponse.data = flight;

        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function updateSeats(req, res){
    try {
        const flight = await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats,
            dec: req.body.dec
        });

        SuccessResponse.data = flight;

        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}