const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  prompt: String,
  response: String,
  subject: String,
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date, default: Date.now },
});

//indexing
conversationSchema.index({ user: 1, chat: 1, created_on: 1, subject: 1 });

const conversation = mongoose.model("Conversation", conversationSchema);

module.exports = conversation;
