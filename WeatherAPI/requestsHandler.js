//handling requests sent to the api's of different websites
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

let searchCallback = (response) => {
  console.log(response.data);
};

exports.searchForCityOpenWeather = async (city) => {
  let response = await axios({
    // searching city and getting lan and lon
    method: 'get',
    url: 'https://openweathermap.org/data/2.5/find',
    params: {
      q: `${city}`,
      appid: `${process.env.APPID}`,
      units: 'metric',
    },
  });
  if (response.data.count === 0) {
    throw new Error('Incorrect city name! Check your spelling');
  }
  return response.data.list[0];
};

exports.GetCoordDataOpenWeather = async (
  lat,
  lon,
  units = 'metric'
) => {
  let response = await axios({
    // searching data for lan and lon
    method: 'get',
    url: 'https://openweathermap.org/data/2.5/onecall',
    params: {
      lat,
      lon,
      appid: `${process.env.APPID}`,
      units,
    },
  });
  delete response.data.minutely;
  // maybe adding exact date and hour for the fields
  return response.data;
};
