const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');

/*
    POST : /airplanes
    req -> BODY { modelNumber : 'anc123', capacity: 200}
*/

async function createAirplane(req, res){
    try{
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully created an airplane',
                    data: airplane,
                    error: {}
                });
    } catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    success: true,
                    message: 'Error in creation of airplane',
                    data: {},
                    error: error
        });
    }
}

module.exports = {
    createAirplane
}