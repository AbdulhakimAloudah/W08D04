const postModel = require("../../db/models/post");

const getPosts = (req, res) => {
  postModel
    .find({ isDeleted: false, user: req.token.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getPostById = (req, res) => {
  const { id } = req.params;
  taskModel
    .find({ _id: id, user: req.token.id })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json("tPost does not exist");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  taskModel
    .findByIdAndUpdate(id, { $set: { isdel: true } })
    .exec()
    .then((result) => {
      res.status(200).json("Deleted");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updatePost = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  taskModel
    .findByIdAndUpdate(id, { $set: { name: name } })
    .then((result) => {
      if (result) {
        res.status(200).json("updated");
      } else {
        res.status(404).json(err);
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const createPost = (req, res) => {
  const { desc, img, isDeleted } = req.body;
  const newPost = new postModel({ desc, img });
  newPost
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
