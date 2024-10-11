// Schema
const chat = require("../../../models/chat");

//module
const mongoose = require("mongoose");

const chatService = {
  createService: async (data) => {
    const userId = id;
    let counter = 1;
    let name = `chat`;

    const existingChats = await chat.find({
      user: userId,
      subject: data.subject,
      name_lowercase: { $regex: "^chat( \\d+)?$" },
    });

    while (existingChats.some((item) => item.name_lowercase === name)) {
      counter++;
      name = `chat ${counter}`;
    }

    const newChat = await chat.create({
      ...data,
      name: `Chat ${counter}`,
      name_lowercase: name,
      user: userId,
    });

    return {
      status: true,
      data: newChat,
    };
  },

  getService: async (query) => {
    const userId = id;
    const allChat = await chat.aggregate([
      {
        $match: {
          subject: query.subject,
          user: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $sort: {
          created_on: -1,
        },
      },
    ]);
    return {
      status: true,
      data: allChat,
    };
  },
};

module.exports = chatService;
