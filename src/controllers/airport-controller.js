const { StatusCodes } = require('http-status-codes');

const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/*
    POST : /airports
    req -> BODY { name: 'Indira Gandhi Nationals', code: 'IGN', cityId: 2}
*/

async function createAirport(req, res){
    try{
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
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

async function getAirports(res, res){
    try {
        const airports = await AirportService.getAirports();

        SuccessResponse.data = airports;

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

async function getAirport(req, res){
    try {
        const airport = await AirportService.getAirport(req.params.id);

        SuccessResponse.data = airport;

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

async function deleteAirport(req, res){
    try {
        const airport = await AirportService.destroyAirport(req.params.id);

        SuccessResponse.data = airport;

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

async function updateAirport(req, res){
    try {
        const airport = await AirportService.updateAirport({
            name: req.body.name,
            code: req.body.code
        }, req.params.id);

        SuccessResponse.data = airport;

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
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
    updateAirport
}