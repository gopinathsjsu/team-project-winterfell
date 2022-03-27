const express = require('express');
const config = require('./config/config');
const route = express.Router();


route.use('/', require('./v1/web'));


module.exports = route;
