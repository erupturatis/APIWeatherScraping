// handling the api routes
controller = require('./Controllers');
const express = require('express');
const router = express.Router();

router.route('/getCityCoords').get(controller.GetCityCoords);
router.route('/getCoordsData').get(controller.GetCoordsData);

module.exports = router;
