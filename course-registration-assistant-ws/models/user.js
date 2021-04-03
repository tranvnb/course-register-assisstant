const { Schema, model } = require('mongoose');

var userSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: [true, "Username is required"]
    },
    password: {
        type: Schema.Types.String,
        required: [true, "Password is required"]
    },
});


const User = model('User', userSchema);

module.exports = User;