//imports
const signUpModel = require("../model/signUpModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//controller
const signUpController = (req, res) => {
  const { fullname, email, username, password } = req.body;
  try {
    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        const newUser = signUpModel({
          fullname,
          email,
          username,
          password: hashedPassword,
        });
        newUser
          .save()
          .then((newUser) => {
            res.status(201).json({
              message: "User created successfully",
              data: newUser,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

//export the controller
module.exports = signUpController;
