const { UserTimetable} = require('../models/index')
const mongoose = require('mongoose')

const createNewTimetable = async (newCourse) => {

  return UserTimetable.create(newCourse);
}

const getAllTimetable = async () => {
  return UserTimetable.find();
}

const updateTimetable = async(id, newTimetable) => {
  return UserTimetable.update({
    timetable: { $elemMatch: {"_id": new mongoose.Types.ObjectId(id)}}
  }, {
    $set: {
      "timetable.$.courses": newTimetable.courses,
      "timetable.$.name": newTimetable.name,
      "timetable.$.year": newTimetable.year,
      "timetable.$.semester": newTimetable.semester
    }
  })

}

module.exports = {
  createNewTimetable,
  getAllTimetable,
  updateTimetable
}
