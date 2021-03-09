const { userService } = require('../services/index');
const express = require("express");

const userRoute = express.Router();

userRoute.post('/login', (req, res, next) => {
    const username = req.body["username"];
    const password = req.body["password"];
    userService.findOne(username, password)
    .then(result => {
		if (result) {
			res.json({message: 'success', user: result});
		} else {			
			res.status(401).json();
		}
    })
    .catch((err, doc) => {
        res.status(500).send('Internal Server Error');
    })
})

// get all users
userRoute.get('/', (req, res, next) => {
    userService.findAll()
    .then(result => {
        console.log('find all',result);
        res.json(result);
    });
})

// get by id
userRoute.get('/:id', (req, res, next) => {
    userService.findById(req.params.id)
    .then(result => {
        res.json(result);
    })
    .catch((err, doc) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
})

// create
userRoute.post('/', (req, res, next) => {
    userService.createUser(req.body['username'], req.body['password'])
    .then(result => {
        res.status(201).json();
    })
    .catch((err, doc) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
})

// delete
userRoute.delete('/:id', (req, res, next) => {
    userService.deleteUser(req.params.id)
    .then(result => {
        res.status(204).json(result);
    })
    .catch((err, doc) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
})


// update 
userRoute.put('/:id', (req, res, next) => {
    userService.updateUser(req.params.id, req.body)
    .then(result => {
        res.status(204).json();
    })
    .catch((err, doc) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
})

module.exports = userRoute;
