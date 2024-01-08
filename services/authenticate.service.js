const User = require("../models/user.model");

const authenticate = async function (req, res, next) {};

const adminAuth = function (req, res, next) {};
module.exports = {
  authorizeUser: authenticate,
  authorizeAdmin: adminAuth,
};
