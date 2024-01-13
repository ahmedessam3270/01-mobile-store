const authRoutes = require("./auth.route");
const express = require("express");
const router = express.Router();
const userRoutes = require("./user.route");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
