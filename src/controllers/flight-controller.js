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

module.exports = {
    createFlight
}