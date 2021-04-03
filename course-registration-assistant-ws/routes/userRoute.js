
const { userController } = require('../controllers/index');
const express = require("express");

const userRoute = express.Router();

userRoute.post('/login', userController.login);

//Sign up for the first time
userRoute.post('/signup', userController.createUser);

// get all users
userRoute.get('/', userController.getAll)

// get by id
userRoute.get('/:id', userController.getById)

// create a user during signup
userRoute.post('/', userController.createUser)

// delete
userRoute.delete('/:id', userController.deleteById);

// update 
userRoute.put('/:id', userController.updateById);

module.exports = userRoute;
