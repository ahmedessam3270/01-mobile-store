const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");
const storeRoutes = require("./store.route");
const productRoutes = require("./product.route");
const orderRoutes = require("./order.route");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/store", storeRoutes);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);

module.exports = router;
