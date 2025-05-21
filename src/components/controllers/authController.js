//imports
const jwt = require("jsonwebtoken");
require("dotenv").config();

//middleware
const Authorization = (req, res, next) => {
  try {
    //extract token from header
    const authHeader = req.get["authorization"];

    //check if token is present
    if (!authHeader) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    //extract token
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized, token format is invalid",
      });
    }

    //verify token with secret key
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!decodedToken) {
      return res.status(401).json({
        message: "Unauthorized, token is invalid",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

//export the middleware
module.exports = Authorization;
