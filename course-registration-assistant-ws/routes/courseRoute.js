
const { courseController } = require('../controllers/index');
const express = require("express");

const courseRoute = express.Router();

// get all users
courseRoute.get('/', courseController.getAll)

// get by id
courseRoute.get('/:id', courseController.getById)

// courseRoute.get('/', courseController.getByCRN)

// create
courseRoute.post('/', courseController.addnew)

// delete
courseRoute.delete('/:id', courseController.deleteCourse);

// update 
courseRoute.put('/:id', courseController.update);

module.exports = courseRoute;
