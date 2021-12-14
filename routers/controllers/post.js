const postModel = require("../../db/models/post");



//ok
const getPosts = (req, res) => {
  postModel
    .find({ isDeleted: false, user: req.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//ok
const getPostById = (req, res) => {
  const { id } = req.params;
  postModel
    .find({ _id: id, user: req.id })
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


//ok
const deletePost = (req, res) => {
  const { id } = req.params;
  postModel
    .findByIdAndUpdate(id, { $set: { isdel: true } })
    .exec()
    .then((result) => {
      res.status(200).json("Deleted");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


//ok
const updatePost = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  postModel
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
//ok
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
