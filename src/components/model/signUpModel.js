//imports
const mongoose = require("mongoose");

//ceate a schema
const Schema = mongoose.Schema;
const signUpSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

//create a model and connect to schema
const SignUpModel = mongoose.model("SignUp", signUpSchema);

//export the model
module.exports = SignUpModel;
