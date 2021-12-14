const express = require("express");
const {
  updateComment,
  deleteComment,
  getCommentById,
  getComment,
  addComment,
} = require("./../controllers/comment");

const commentRouter = express.Router();
commentRouter.post("/addComment", addComment);
commentRouter.get("/getComment", getComment);
commentRouter.get("/getCommentById/:id", getCommentById);
commentRouter.delete("/deleteComment/:id", deleteComment);
commentRouter.put("/updateComment/:id", updateComment);

module.exports = commentRouter;
