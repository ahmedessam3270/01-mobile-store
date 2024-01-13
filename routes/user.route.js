const express = require("express");
const router = express.Router();
const {
  authorizeUser,
  authorizeAdmin,
} = require("../services/authenticate.service");
const userControl = require("../controllers/user.control");
const { validate, validateParamsId } = require("../services/validate.service");

router.get("/data", authorizeUser, userControl.getUserData);
router.get("/data/all", authorizeAdmin, userControl.getAllUsers);
router.delete("/:id", validateParamsId, authorizeAdmin, userControl.deleteUser);
router.patch("/", authorizeUser, userControl.updateUser);
router.post("/new-user", authorizeAdmin, userControl.addUser);

module.exports = router;
