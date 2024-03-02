const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares'); 
const router = express.Router();

// /api/v1/cities --POST 
// req.body: {name: 'London'}

router
    .post('/', CityMiddlewares, CityController.createCity);

// /api/v1/cities --DELETE 
// req.body: {}
router
    .delete('/:id', CityController.destroyCity);

// /api/v1/cities --PATCH 
// req.body: {name: 'Chennai'}
router
    .patch('/:id', CityController.updateCity);

module.exports = router;