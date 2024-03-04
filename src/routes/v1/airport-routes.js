const express = require('express');
const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares');

const router = express.Router();

router
    .post('/', AirportMiddlewares ,AirportController.createAirport);

router
    .get('/', AirportController.getAirports);

router
    .get('/:id', AirportController.getAirport);

router
    .delete('/:id', AirportController.deleteAirport);

router
    .patch('/:id', AirportController.updateAirport);

module.exports = router;