// Schema
const chat = require("../../../models/chat");

//module
const mongoose = require("mongoose");

const chatService = {
  createService: async (data) => {
    const userId = id;
    const newChat = await chat.create({
      ...data,
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
