const express = require("express");
const { likePost, checkLike } = require("./../controllers/likes");
const authentication = require("./../middleWhere/authentication");

const likesRouter = express.Router();

likesRouter.get("/:onPost", authentication, checkLike);
likesRouter.put("/", authentication, likePost);
module.exports = likesRouter;
