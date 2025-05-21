//imports
const signInModel = require("../model/signInModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//controller
const signInController = (req, res) => {
  const { username, password } = req.body;
  try {
    //locating the user
    signInModel
      .find({ username })
      .then((user) => {
        if (user) {
          //compare password
          bcrypt
            .compare(password, user.password)
            .then((isMatch) => {
              res.status(201).json({
                message: "User logged in successfully",
                data: user,
              });
            })
            .catch((err) => {
              res.status(401).json({
                message: "Invalid credentials",
              });
            });

          //Create JWT token
          const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
            expiresIn: "1h",
          });

          //send token to client
          res.status(200).json({
            message: "User logged in successfully",
            token,
            user: {
              id: user._id,
              fullname: user.fullname,
              email: user.email,
              username: user.username,
            },
          });
        } else {
          res.status(404).json({
            message: "User not found",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

//exports
module.exports = signInController;
