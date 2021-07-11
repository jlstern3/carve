const mongoose = require('mongoose');

const RiderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least three characters long."]
    },
    age: {
        type: Number,
        required: [true, "Name is required"],
    },
    hometown: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Hometown be at least three characters long."]
    }
}, {timestamps: true});

const Rider = mongoose.model("Rider", RiderSchema);

module.exports = Rider;