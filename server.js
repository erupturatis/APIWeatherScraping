const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const router = require('./WeatherAPI/routeHandler');
const globalErrorHandler = require('./WeatherAPI/errorController');

const app = express();

app.use('/api/v1', router);

const port = process.env.PORT || 3000;

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
