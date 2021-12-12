const express = require("express");
const { likePost, checkLike } = require("./../controllers/like");
const authentication = require("./../middleware/authentication");

const likesRouter = express.Router();

likesRouter.get("/:onPost", authentication, checkLike);
likesRouter.put("/", authentication, likePost);
module.exports = likesRouter;
