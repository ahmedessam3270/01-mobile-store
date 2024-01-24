const express = require("express");
const router = express.Router();
const { validate } = require("../services/validate.service");
const {
  authorizeAdmin,
  authorizeUser,
} = require("../services/authenticate.service");

const orderController = require("../controllers/order.control");

router.post("/add-order", authorizeUser, orderController.addOrder);
router.get("/all-orders", authorizeUser, orderController.getAllOrders);

module.exports = router;
