const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const { Schedule } = require('../models/index');

const findByUsername = async (username) => {
    return Schedule.find({ username: username }).exec();
}

const createNewSchedule = async (username) => {
  const schedule = new Schedule({
    username: username,
    name: "Schedule",
    courses: []
  });
  return schedule.save();
}

const updateSchedule = async (schedule) => {
  return Schedule.updateOne({ _id: mongoose.Types.ObjectId(schedule._id) }, schedule);
}

const scheduleService = { findByUsername, createNewSchedule, updateSchedule };

module.exports = scheduleService;
