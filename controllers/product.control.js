const asyncHandler = require("express-async-handler");
const Product = require("../models/product.model");

const productController = {
  addProduct: asyncHandler(async (req, res) => {
    let data = res.body;
    let newProduct = new Product(data);
    await newProduct.save();
    res.status(201).send({
      message: "Product created !!",
    });
  }),

  getAllProducts: asyncHandler(async (req, res) => {
    let data = await Product.find();
    res.send(data);
  }),
};

module.exports = productController;
