const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
    },
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: 2,
    },
    email: {
        type: String,
        required: [true, "Email is required."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    },
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);
module.exports = User;