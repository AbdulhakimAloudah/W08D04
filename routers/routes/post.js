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
postRouter.post("/addPost", createPost);
postRouter.get("/getPosts", getPosts);
postRouter.get("/getPostById/:id", getPostById);
postRouter.delete("/deletePost/:id", deletePost);
postRouter.put("/updatePost/:id", updatePost);
module.exports = postRouter;
