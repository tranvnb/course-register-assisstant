const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const { User } = require('../models/index')
const { Course } = require('../models/index')

const findAll = async () => {
    return User.find({});
}

const findOne = async (username, password) => {
    return await User.findOne({username: username, password: password }).exec();
}

const findById = async (id) => {
    return User.findById(new mongoose.Types.ObjectId(id)).exec();
}

const createUser = async (username, password) => {
    console.log("username", username, "password", password);
    var user = await User.findOne({username: username, password: password }).exec();
    console.log(user," user Found");
    if(user === null)
    {
        console.log("creating user");
        return User.create({ 
            // _id: new mongoose.Types.ObjectId(), 
            username: username, 
            password: password
        });
    }
    else
    {
        console.log("Found already");
        return null;
    }
}

const updateUser = async (id, newUser) => {
    return User.updateOne({_id: mongoose.Types.ObjectId(id)}, newUser);
}

const deleteUser = async (id) => {
    return User.deleteOne({_id: mongoose.Types.ObjectId(id)});
}

const createTimeTable = async(id,name,year, semester) => {
    console.log("creating timetable", User.timeTable)
    var userD =  await User.findOne({_id: mongoose.Types.ObjectId(id)}).exec()
    var a = {
                name: name,
                year: year,
                semester: semester,
            }

    await User.findOneAndUpdate({_id: mongoose.Types.ObjectId(id)},
    {
       $push: { timeTable: [a]} 
    }, {useFindAndModify: false}).exec();  

    return await User.findOne({_id: mongoose.Types.ObjectId(id)}).exec();
}

// add the courses to timetable
const addCourseInTimetable = async(id , newCourse,timeTableId) => {
    console.log("addCourseInTimetable");

    var userD =  await User.findOne({_id: mongoose.Types.ObjectId(id)}).exec();
    const i = userD.timeTable.findIndex(t =>  t._id == timeTableId);
    console.log("index--",i, " ", userD.timeTable[0]);

    await User.findOneAndUpdate(({_id: mongoose.Types.ObjectId(id), 
    timeTable: {$elemMatch: {_id:mongoose.Types.ObjectId(timeTableId)}}},
   {
       $push: {"timeTable.$.courses" : [newCourse]}
   }, {userFindAndModify: false})).exec();

   return await User.findOne(({_id: mongoose.Types.ObjectId(id), 
    "timeTable._id" : timeTableId})).exec();

   //select only a specific time table
//    const d =  await User.findOne({_id: mongoose.Types.ObjectId(id)})
//    .select({timeTable: {$elemMatch: {_id:mongoose.Types.ObjectId(timeTableId)}}}).exec();
//    d.courses.push(newCourse);  
}

const userService = {findAll, findOne, findById, createUser, updateUser, deleteUser, createTimeTable, addCourseInTimetable}

module.exports = userService;