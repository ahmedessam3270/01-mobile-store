const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: string, required: true, trim: true },
  email: { type: string, required: true, trim: true },
  password: { type: string, required: true, trim: true },
  address: { type: string, required: true, trim: true },
  nationalId: { type: string, required: true, trim: true },
  phone: { type: string, required: true, trim: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
