const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const { Schedule } = require('../models/index');

const findByUsername = async (username) => {
    return Schedule.find({ username: username }).exec();
}

const createNewSchedule = async (schedule) => {
  const new_schedule = new Schedule({
    username: schedule.username,
    name: schedule.name,
    semester: schedule.semester,
    courses: []
  });
  return new_schedule.save();
}

const updateSchedule = async (schedule) => {
  return Schedule.updateOne({ _id: mongoose.Types.ObjectId(schedule._id) }, schedule);
}

const scheduleService = { findByUsername, createNewSchedule, updateSchedule };

module.exports = scheduleService;
