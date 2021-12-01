const express = require("express");
const userSchema = express.Router();

const { signUp, logIn } = require("./../controllers/user");

userSchema.post("/signup", signUp);
userSchema.post("/log", logIn); // post for security -- post is more secure than get

module.exports = userSchema;
