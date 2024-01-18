const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fs = require("fs");
const storeSchema = Schema({
  name: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  logo: { type: String, trim: true, default: "/api/images/store/default.png" },
});

storeSchema.pre("findOneAndDelete", async function (next) {
  const document = await this.model.findOne(this.getQuery());
  if (document && document.logo) {
    const logo = document.logo;
    const imgName = logo.split("/").at(-1);
    console.log(imgName);
    fs.unlink("./uploads/store/" + imgName, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Image Deleted!!");
      }
    });
  }

  next();
});

const Store = mongoose.model("store", storeSchema);

module.exports = Store;
