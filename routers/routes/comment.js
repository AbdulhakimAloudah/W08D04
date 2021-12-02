const express = require("express");
const {
  updateComment,
  deleteComment,
  getCommentById,
  getComment,
  addComment,
} = require("./../controllers/comment");
const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");

const commentRouter = express.Router();
commentRouter.post("/addComment",authentication, addComment);
commentRouter.get("/getComment", authentication, getComment);
commentRouter.get("/getCommentById/:id", getCommentById);
commentRouter.delete("/deleteComment/:id", authentication, deleteComment);
commentRouter.put("/updateComment/:id", authentication, updateComment);

module.exports = commentRouter;
