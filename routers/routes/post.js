const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("./../controller/post");
const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");
const postRouter = express.Router();
postRouter.post("/addPost", authentication, authorization, createPost);
postRouter.get("/getPost", authentication, authorization, getPosts);
postRouter.get("/getPostById/:id", authentication, authorization, getPostById);
postRouter.delete("/deletePost/:id", authentication, authorization, deletePost);
postRouter.put("/updatePost/:id", authentication, authorization, updatePost);
module.exports = postRouter;
