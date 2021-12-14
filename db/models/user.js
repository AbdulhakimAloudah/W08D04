const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  isDeleted: { type: Boolean, default: false },
  username: { type: String, required: false },
});

module.exports = mongoose.model("User", userSchema);
