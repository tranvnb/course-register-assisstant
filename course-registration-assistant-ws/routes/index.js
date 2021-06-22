const userRoute = require('./userRoute');
const courseRoute = require('./courseRoute');
const scheduleRoute = require('./scheduleRoute');
const userTimetableRoute = require('./userTimetableRoute')
const express = require('express');
const { userController } = require('../controllers/index.js');
const routes = express.Router();

// This should be use to log all in-comming request
routes.use((req, res, next) => {
    console.log('%s %s %s', req.method, req.url, req.path, req.params);
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
routes.use('/schedule', scheduleRoute);
routes.use('/timetable', userTimetableRoute);

module.exports = routes;
