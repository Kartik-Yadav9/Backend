const mongoose = require("mongoose");

const authUserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

let AuthUserModel = mongoose.model("AuthUser", authUserSchema);
module.exports = AuthUserModel;
