const multer = require("multer");
const path = require("path");

const { v4: uuidV4 } = require("uuid");

const storeStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/store");
  },
  filename: function (req, file, callback) {
    if (file) {
      console.log(file);
      let fileExt = path.extname(file.originalname);
      callback(null, uuidV4() + fileExt);
    } else {
      callback(null, false);
    }
  },
});

const imageUpload = multer({
  storage: storeStorage,
  fileFilter: function (req, file, callback) {
    const fileTypes = /jpeg|jpg|png|svg|gif/;
    let validFile = fileTypes.test(path.extname(file.originalname));
    if (file.mimetype.startsWith("image") && validFile) {
      callback(null, true);
    } else {
      callback("Unsupported file format", false);
    }
  },
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = { imageUpload };
