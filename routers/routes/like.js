const express = require("express");
const { addLike, deleteLike } = require("./../controllers/like");

const likeRouter = express.Router();

likeRouter.post("/addLike", addLike);
likeRouter.delete("/deleteLike/:id", deleteLike);

module.exports = likeRouter;
