const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const { User } = require('../models/index')

const findAll = async () => {
    return User.find({});
}

const findOne = async (username, password) => {
    return User.findOne({username: username, password: password }, 'username').exec();
}

const findById = async (id) => {
    return User.findById(new mongoose.Types.ObjectId(id)).exec();
}

const createUser = async (username, password) => {
    return User.create({ 
        _id: new mongoose.Types.ObjectId(), 
        username: username, 
        password: password
    });
}

const updateUser = async (id, newUser) => {
    return User.updateOne({_id: mongoose.Types.ObjectId(id)}, newUser);
}

const deleteUser = async (id) => {
    return User.deleteOne({_id: mongoose.Types.ObjectId(id)});
}

const userService = {findAll, findOne, findById, createUser, updateUser, deleteUser}

module.exports = userService;