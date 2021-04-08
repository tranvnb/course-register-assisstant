
const { scheduleController } = require('../controllers/index');
const express = require('express');

const scheduleRoute = express.Router();

// get a list of all schedules by username 
scheduleRoute.get('/:username', scheduleController.getAllSchedulesByUsername);

scheduleRoute.post('/', scheduleController.createNewSchedule);

scheduleRoute.post('/update', scheduleController.updateSchedule);

module.exports = scheduleRoute;
