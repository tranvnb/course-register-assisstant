const User = require('./user.js');

const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/courses-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

/* Display message in the console if the connection is successful. */
mongoose.connection.on('connected', () => {
    console.log('connected!')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

module.exports = {
    User
}