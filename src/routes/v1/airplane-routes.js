const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/airplane -- POST 
router.post('/', AirplaneMiddlewares ,AirplaneController.createAirplane);

// /api/v1/airplane -- GET
router.get('/', AirplaneController.getAirplanes);

// /api/v1/airplane --GET
router.get('/:id', AirplaneController.getAirplane);

// /api/v1/airplane --DELETE
router.delete('/:id', AirplaneController.deleteAirplane);

// /api/v1/airplane --PATCH ( for partial change)
router.patch('/:id', AirplaneController.updateAirplane);

module.exports = router;