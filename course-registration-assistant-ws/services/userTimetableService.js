const { UserTimetable } = require('../models/index')
const mongoose = require('mongoose');
const { updateOne } = require('../models/timetable');

const createNewTimetable = async (newTimetable) => {
  const userTimetable = await UserTimetable.findOne({
    userId: new mongoose.Types.ObjectId(newTimetable.userId)
  });
  console.log("found user:", userTimetable);
  if (userTimetable !== null) {

    userTimetable.timetable.push(newTimetable);
    await UserTimetable.updateOne({
      "_id": new mongoose.Types.ObjectId(userTimetable._id)
    }, { $set: userTimetable });
    console.log("updated:");
    return UserTimetable.findOne({
      userId: new mongoose.Types.ObjectId(newTimetable.userId)
    });
  } else {

    const newUserTimetable = await UserTimetable.create(newTimetable);
    console.log("newUserTimetable", newUserTimetable);
    newUserTimetable.timetable.push(newTimetable);
    await UserTimetable.updateOne({
      "_id": new mongoose.Types.ObjectId(newUserTimetable._id)
    }, { $set: newUserTimetable });
    console.log("updated:");
    return UserTimetable.findOne({
      "_id": new mongoose.Types.ObjectId(newUserTimetable._id)
    });
  }

}

const getAllTimetable = async () => {
  return UserTimetable.find();
}

const getAllTimetableByUserId = async (userId) => {
  return UserTimetable.findOne({ "userId": new mongoose.Types.ObjectId(userId) });
}

const updateTimetable = async (id, newTimetable) => {
  return UserTimetable.updateOne({
    timetable: { $elemMatch: { "_id": new mongoose.Types.ObjectId(id) } }
  }, {
    $set: {
      "timetable.$.courses": newTimetable.courses,
      // "timetable.$.name": newTimetable.name,
      // "timetable.$.year": newTimetable.year,
      // "timetable.$.semester": newTimetable.semester
    }
  })

}

module.exports = {
  createNewTimetable,
  getAllTimetable,
  getAllTimetableByUserId,
  updateTimetable
}
