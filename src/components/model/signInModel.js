//imports
const mongoose = require("mongoose");

//ceate a schema
const Schema = mongoose.Schema;
const signInSchema = new Schema({
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
const SignInModel = mongoose.model("SignIn", signInSchema);

//export the model
module.exports = SignInModel;
