const { Router } = require('express');
const express = require('express');

const Route = express.Router();

Route.use('/admin', require('./admin/adminroutes.js'));

module.exports = Route;
