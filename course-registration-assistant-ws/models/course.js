const { Schema, model } = require('mongoose');

const daysSchema = new Schema({
    day: {
        type: Schema.Types.String,
        required: false
    },
    time: {
        type: Schema.Types.String,
        required: false
    },
    building: {
        type: Schema.Types.String,
        required: false
    },
    rom: {
        type: Schema.Types.String,
        required: false
    }
});

var courseSchema = new Schema({
    crn: {
        type: Schema.Types.String,
        required: [true, "Please provide unique UUID or the CRN"]
    },
    subject: {
        type: Schema.Types.String,
        required: [true, "Subject is required"]
    },
    credit: {
        type: Schema.Types.Number,
        required: [true, "Credit is required"]
    },
    title: {
        type: Schema.Types.String,
        required: [true, "title is required"]
    },
    max: {
        type: Schema.Types.Number,
        required: false
    },
    enrolled: {
        type: Schema.Types.Number,
        required: false
    },
    remain: {
        type: Schema.Types.Number,
        required: false
    },
    wait: {
        type: Schema.Types.Number,
        required: false
    },
    status: {
        type: Schema.Types.String,
        required: false
    },
    startEnd: {
        type: Schema.Types.String,
        required: false
    },
    campus: {
        type: Schema.Types.String,
        required: false
    },
    instructor: {
        type: Schema.Types.String,
        required: [true, "Instructor is required"]
    },
    prerequisites: {
        type: Schema.Types.String,
        required: false
    },
    days: {
        type: [daysSchema],
        required: [true, "Day is required"]
    },
    sessionnote: {
        type: Schema.Types.String,
        required: false
    }
});


const Course = model('Course', courseSchema);

exports.courseSchema = courseSchema;

module.exports = Course