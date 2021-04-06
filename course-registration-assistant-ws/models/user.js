const { Schema, model } = require('mongoose');
const { courseSchema } = require('./course.js');
// course => Data access object
// courseSchema => schema of a course collection in database
// const courses, {courseSchema} = coursesExport.userCourses;

const timeTableSchema = new Schema({
        name:{
            type:Schema.Types.String,
            required: [true, "Time table name is required"]
        },
        year: {
            type: Schema.Types.String,
            required: [true, "Year is required"]
        },
        semester: {
            type: Schema.Types.String,
            required: [true, "Semester is required"]
        },
        courses: {
            type: [courseSchema],
            required: false
        }
});

var userSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: [true, "Username is required"]
    },
    password: {
        type: Schema.Types.String,
        required: [true, "Password is required"]
    },
    timeTable:{
        type: [timeTableSchema],
        required: false
    }
});


const User = model('User', userSchema);

module.exports = User;