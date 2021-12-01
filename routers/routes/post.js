const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("./../controllers/post");
// const authentication = require("./../middleware/authentication");
// const authorization = require("./../middleware/authorization");
const postRouter = express.Router();
postRouter.post("/add", createPost);
postRouter.get("/getPost", getPosts);
postRouter.get("/getPostById/:id", getPostById);
postRouter.delete("/deletePost/:id", deletePost);
postRouter.put("/updatePost/:id", updatePost);
module.exports = postRouter;
