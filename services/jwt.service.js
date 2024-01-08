const jwt = require("jsonwebtoken");
const generateToken = (payload) => {
  return jwt.sign({ id: payload }, process.env.SECRET_TOKEN);
};

module.exports = generateToken;
