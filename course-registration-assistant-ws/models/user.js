const { Schema, model } = require('mongoose');

var userSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        unique: true,
        required: [true, "Please provide unique UUID"]
    },
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