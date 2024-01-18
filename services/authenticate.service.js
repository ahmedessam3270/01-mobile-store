const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const authenticate = asyncHandler(async function (req, res, next) {
  let token = req?.cookies?.["access-token"];
  if (!token) {
    return res.status(401).send({
      message: "Token is required !!",
    });
  }
  token = token.split(" ")[1];
  let secretKey = process.env.SECRET_TOKEN;
  let decode = jwt.verify(token, secretKey);
  if (!decode) {
    return res.status(401).send({
      message: "Token is required !!",
    });
  }

  let user = await User.findById(decode.id);
  req.user = user;
  next();
});

const adminAuth = function (req, res, next) {
  authenticate(req, res, () => {
    let user = req.user;
    if (!user.isAdmin) {
      return res.status(401).send({
        message: "Route is only for Admins !!!",
      });
    } else {
      next();
    }
  });
};
module.exports = {
  authorizeUser: authenticate,
  authorizeAdmin: adminAuth,
};
