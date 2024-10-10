const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone_number: {
    type: String,
    unique: true,
  },
  profile_picture: String,
  created_on: { type: Date, default: Date.now },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
