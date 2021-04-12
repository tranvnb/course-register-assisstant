const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const { User } = require('../models/index')

const findAll = async () => {
    return User.find({});
}

const findOne = async (username) => {
    return await User.findOne({username: username }).exec();
}

const findById = async (id) => {
    return User.findById(new mongoose.Types.ObjectId(id)).exec();
}

const createUser = async (username, password) => {
    var user = await User.findOne({username: username }).exec();
    console.log(user," user Found");
    if(user === null)
    {
        console.log("creating user");
        return User.create({
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

const userService = {findAll, findOne, findById, createUser, updateUser, deleteUser}

module.exports = userService;
