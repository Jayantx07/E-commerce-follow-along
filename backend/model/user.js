const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name."],
    },
    email: {
        type: String,
        required: [true, "Please enter your email."],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter your password."],
        minlength: 8,
    },
    avatar: {
        type: String,
        default: "default.jpg",
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
});