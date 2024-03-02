const express = require('express');

const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');

const router = express.Router();

router.use('/cities', cityRoutes);
router.use('/airplane', airplaneRoutes);
router.get('/info', InfoController.info);


module.exports = router;