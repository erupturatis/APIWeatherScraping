// handling the api routes
controller = require('./Controllers');
const express = require('express');
const router = express.Router();

router.route('/GetCityCoords').get(controller.GetCityCoords);
router.route('/GetCoordsWeather').get(controller.GetCoordsWeather);
router.route('/GetCityData').get(controller.GetCityData);
router
  .route('/GetCityWeather')
  .get(controller.ProcessCityRawData, controller.GetCoordsWeather);

module.exports = router;
