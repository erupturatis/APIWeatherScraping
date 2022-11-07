const requests = require('./requestsHandler');

exports.GetCityCoords = async (req, res, next) => {
  // searching a city name and getting lan and lon for it
  let responseWeb = await requests.searchForCityOpenWeather(
    req.query.city
  );
  let lat = responseWeb.coord.lat;
  let lon = responseWeb.coord.lon;
  res.send({
    lat,
    lon,
  });
  next();
};
exports.GetCoordsWeather = async (req, res, next) => {
  // getting weather data for specific coords langitude and longitude

  let responseWeb = await requests.GetCoordData1(
    req.query.lat,
    req.query.lon
  );

  responseWeb = { city: req.query.city, ...responseWeb };
  res.send({
    ...responseWeb,
  });
  next();
};

exports.GetCityData = async (req, res, next) => {
  // searching a city name and getting lan and lon for it
  try {
    let responseWeb = await requests.searchForCityOpenWeather(
      req.query.city
    );
    res.status(200).json({
      ...responseWeb,
    });
  } catch (err) {
    return next(err);
  }
};

exports.ProcessCityRawData = async (req, res, next) => {
  let responseWeb = await requests.searchForCityOpenWeather(
    req.query.city
  );
  let lat = responseWeb.coord.lat;
  let lon = responseWeb.coord.lon;
  req.query.lat = lat;
  req.query.lon = lon;
  next();
};
