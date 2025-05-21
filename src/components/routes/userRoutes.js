// imports
const express = require("express");
const { signUpController } = require("../controllers/signUpController");
const { signInController } = require("../controllers/signInController");
const { Authorization } = require("../controllers/authController");

// initialize
const router = express.Router();

// routes
router.post("/signup", signUpController);
router.post("/signin", signInController);
router.get("/users");

// exports
module.exports = router;
