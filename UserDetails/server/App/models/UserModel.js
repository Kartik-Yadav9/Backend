const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: false,
  },
});

let UserModel = mongoose.model("detail", userSchema);

module.exports = UserModel;
