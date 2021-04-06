const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const { Schedule } = require('../models/index');

const findByUsername = async (username) => {
    return Schedule.find({ username: username }).exec();
}

const createNewSchedule = async (username, name, semester) => {
  const schedule = new Schedule({
    username: username,
    name: name,
    semester: semester,
    courses: []
  });
  return schedule.save();
}

const scheduleService = { findByUsername, createNewSchedule };

module.exports = scheduleService;
