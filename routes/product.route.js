const express = require("express");
const router = express.Router();
const { validate } = require("../services/validate.service");
const {
  authorizeAdmin,
  authorizeUser,
} = require("../services/authenticate.service");
const productController = require("../controllers/product.control");

router.post("/add-product", authorizeAdmin, productController.addProduct);
router.get("/all-products", authorizeUser, productController.getAllProducts);

module.exports = router;
