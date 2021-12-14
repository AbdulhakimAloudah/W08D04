const mongoose = require("mongoose");
const comment = new mongoose.Schema({
  description: { type: String, required: true },
  time: { type: Date, default: new Date() },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  isDel: { type: Boolean, default: false },
});
module.exports = mongoose.model("Comment", comment);

