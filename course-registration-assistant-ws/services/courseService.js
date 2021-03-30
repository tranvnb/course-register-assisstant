const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const { Course } = require('../models/index')

const findAll = async () => {
    return Course.find({});
}

const findById = async (id) => {
    return Course.findById({_id: mongoose.Types.ObjectId(id)});
}

const findByCRN = async (crn) => {
    return Course.find({crn: crn}).exec();
}

const addnew = async (newCourse) => {
    return Course.create(newCourse);
}

const update = async (id, newCourse) => {
    return Course.updateOne({_id: mongoose.Types.ObjectId(id)}, newCourse);
}

const deleteCourse = async (id) => {
    return Course.deleteOne({_id: mongoose.Types.ObjectId(id)});
}

const courseService = {findAll, findById, findByCRN, addnew, update, deleteCourse}

module.exports = courseService;