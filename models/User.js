const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model("user", userSchema);