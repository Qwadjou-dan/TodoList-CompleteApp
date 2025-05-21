// imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Routes = require("./src/components/routes/userRoutes");

require("dotenv").config();

// initialize
const TodoListApp = express();
const PORT = process.env.PORT || 4040;

// middleware
TodoListApp.use(bodyParser.json());

// routes
TodoListApp.use(Routes);

// start server
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    TodoListApp.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
