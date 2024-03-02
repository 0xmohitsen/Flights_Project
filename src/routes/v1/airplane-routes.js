const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/airplane -- POST 
router.post('/', AirplaneMiddlewares ,AirplaneController.createAirplane);

// /api/v1/airplane -- GET
router.get('/', AirplaneController.getAirplanes);

module.exports = router;