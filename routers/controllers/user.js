const userModel = require("./../../db/models/user");
require("dotenv").config();


const jwt = require("jsonwebtoken");
const SECRETKEY = process.env.SECRETKEY;

const bcrypt = require("bcrypt");
const SALT = Number(process.env.SALT);

const signUp = async (req, res) => {
  const { email, password, role } = req.body;
  const saveEmail = email.toLowerCase();
  const savePass = await bcrypt.hash(password, SALT);

  const newUser = new userModel({
    email: saveEmail,
    password: savePass,
    role,
  });

  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const logIn = (req, res) => {
  const { email, password } = req.body;
  const saveEmail = email.toLowerCase();

  userModel
    .findOne({ email: saveEmail })
    .then(async (result) => {
      if (result) {
        if (saveEmail == result.email) {
          const savePass = await bcrypt.compare(password, result.password);
          console.log(savePass);
          if (savePass) {
            const payload = {
              role: result.role,
              userId: result._id,
            };
            const token = await jwt.sign(payload, SECRETKEY);
            console.log(token);
            res.status(200).json({ result, token });
          } else {
            res.status(400).json("invalid email or password");
          }
        } else {
          res.status(400).json("invalid email or password");
        }
      } else {
        res.status(404).json("not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  userModel
    .findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json("Deleted");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updateUser = (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  userModel
    .findByIdAndUpdate(id, { $set: { email: email } })
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
module.exports = { signUp, logIn, deleteUser, updateUser };
