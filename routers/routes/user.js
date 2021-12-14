const express = require("express");
const userSchema = express.Router();

const {
  signUp,
  logIn,
  deleteUser,
  updateUser,
} = require("./../controllers/user");

userSchema.post("/signup", signUp);
userSchema.post("/log", logIn);
userSchema.delete("/delete/:id", deleteUser);
userSchema.post("/updat/:id", updateUser);

module.exports = userSchema;
