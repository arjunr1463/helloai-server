const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  coverImage: String,
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date, default: Date.now },
});

const subject = mongoose.model("Subject", subjectSchema);

module.exports = subject;
