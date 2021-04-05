
const { scheduleController } = require('../controllers/index');
const express = require('express');

const scheduleRoute = express.Router();

// get a list of all schedules by username 
scheduleRoute.get('/:username', scheduleController.getAllSchedulesByUsername);

module.exports = scheduleRoute;
