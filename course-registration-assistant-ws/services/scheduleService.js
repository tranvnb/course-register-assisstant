const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const { Schedule } = require('../models/index');

const findByUsername = async (username) => {
    return Schedule.find({ username: username }).exec();
}

const scheduleService = { findByUsername };

module.exports = scheduleService;
