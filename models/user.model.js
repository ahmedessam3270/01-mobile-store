const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  nationalID: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
});

userSchema.pre("save", async function (next) {
  try {
    let user = this;
    if (!user.isModified("password")) {
      let hashedPassord = await bcrypt.hash(user.password, 8);
      user.password = hashedPassord;
      next();
    }
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
