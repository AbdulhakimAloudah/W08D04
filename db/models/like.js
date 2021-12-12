const mongoose = require("mongoose");

const like = new mongoose.Schema({
  by: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  onPost: { type: mongoose.Schema.Types.ObjectId, ref: "post"},
});

module.exports = mongoose.model("like", like);
