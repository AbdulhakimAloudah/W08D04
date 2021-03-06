const commentModel = require("../../db/models/comment");
const postModel = require("./../../db/models/post");
//ok
const addComment = (req, res) => {
  const { description, userId, postId } = req.body;
  const newcomment = new commentModel({
    description,
    postId,
    userId,
  });
  newcomment
    .save()
    .then((result) => {
      postModel
        .findByIdAndUpdate(postId, { $push: { commentId: result._id } })
        .then((result) => {
          res.status(201).json(result);
        });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//ok
const getComment = (req, res) => {
  commentModel
    .find({})
    .populate("postId", "description -_id")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json("you Don't have authorization");
    });
};

//ok
const getCommentById = (req, res) => {
  const { id } = req.params;
  commentModel
    .find({ _id: id })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json("comment does not exist");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//ok
const deleteComment = async (req, res) => {
  const { id } = req.params;

  commentModel
    .findByIdAndUpdate(id, { $set: { isDel: true } })
    .exec()
    .then((result) => {
      res.status(200).json("Deleted");
    })
    .catch((err) => {
      res.status(400).json("you Don't have authorization");
    });
};

//ok
const updateComment = (req, res) => {
  const { description } = req.body;
  const { id } = req.params;
  commentModel
    .findByIdAndUpdate(id, { $set: { description: description } })
    .then((result) => {
      if (result) {
        res.status(200).json("updated");
      } else {
        res.status(404).json("you Don't have authorization");
      }
    })
    .catch((err) => {
      res.status(400).json("Comment dosnot Exist");
    });
};

module.exports = {
  updateComment,
  deleteComment,
  getCommentById,
  getComment,
  addComment,
};
