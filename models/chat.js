const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  name: String,
  subject: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date, default: Date.now },
});

//indexing
chatSchema.index({ user: 1, created_on: -1, subject: 1 });

const chat = mongoose.model("Chat", chatSchema);

module.exports = chat;
