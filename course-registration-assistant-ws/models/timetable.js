const { Schema, model } = require('mongoose');
const { courseSchema } = require('./course');

const timetableItemSchema = Schema({
  timetable_id: {
    type: Schema.Types.ObjectId,
    require: true
  },
  name: {
    type: Schema.Types.String,
    required: false
  },
  year: {
    type: Schema.Types.String,
    required: false
  },
  semester: {
    type: Schema.Types.String,
    required: false
  },
  courses: {
    type: [courseSchema],
    required: false
  }
})

const userTimetableSchema = Schema({
  userId: {
    type: Schema.Types.String,
    required: [true, "UserId is required"]
  },
  timetable: {
    type: [timetableItemSchema],
    required: [true, "Timetable is required"]
  },
});


const UserTimetable = model('UserTimetable', userTimetableSchema);

module.exports = UserTimetable;
