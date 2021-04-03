const userRoute = require('./userRoute.js');
const courseRoute = require('./courseRoute.js');
const express = require('express');
const { userController } = require('../controllers/index.js');
const routes = express.Router();

// This should be use to log all in-comming request
routes.use((req, res, next) => {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

// This is a public api, dont need authentication and authorization
// routes.use('/signup', userController.createUser);

// Authentication & Authorization here
routes.use((req, res, next)  => {
    const userTokenValid = true; // do the verification stuff here JWT
    if (userTokenValid) {
        req.userTokenValid = userTokenValid;
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});

// The rest routes will be put from here.
routes.use('/users', userRoute);
routes.use('/courses', courseRoute);

module.exports = routes;