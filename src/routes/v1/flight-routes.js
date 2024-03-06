const express = require('express');
const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();

router
    .post('/', FlightMiddlewares ,FlightController.createFlight);

router
    .get('/', FlightController.getAllFlights);

module.exports = router;