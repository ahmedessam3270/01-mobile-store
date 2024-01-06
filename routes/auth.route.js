const express = require("express");
const router = express.Router();
const authControl = require("../controllers/auth.control");
const { registerationSchema } = require("../validations/auth.validate");
const validate = require("../services/validate.service");

router.post("/register", validate(registerationSchema), authControl.register);

module.exports = router;
