const Joi = require("joi");
const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
// const myPasswordExp =
//   /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
module.exports = {
  registerationSchema: Joi.object().keys({
    name: Joi.string().min(3).max(30).required().messages({
      "any.required": "Name is required",
    }),
    email: Joi.string().email().min(3).max(30).required().messages({
      "any.required": "Email is required",
      "string.email": "Invalid Email",
    }),
    password: Joi.string().regex(passwordExp).required().messages({
      "any.required": "Password is required",
    }),
    address: Joi.string().min(3).max(30).required().messages({
      "any.required": "Address is required",
    }),
    nationalID: Joi.number().required().messages({
      "any.required": "nationalID is required",
    }),
    phone: Joi.string().required().messages({
      "any.required": "phone is required",
    }),
  }),
};
