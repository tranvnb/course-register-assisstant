const express = require('express');
const {userTimetableController} = require('../controllers/index');
const userTimetableRoute = express.Router();


userTimetableRoute.post("/:userid", userTimetableController.addNewTimetable)

userTimetableRoute.put("/:timetableid", userTimetableController.updateTimetable)

userTimetableRoute.get("/", userTimetableController.getAllTimetable)

module.exports = userTimetableRoute;