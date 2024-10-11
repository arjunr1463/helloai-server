// Schema
const conversation = require("../../../models/coversation");
const subject = require("../../../models/subject");

//utills
const { gptResponse } = require("../../utills/openai");

//module
const mongoose = require("mongoose");

const conversationService = {
  createService: async (data) => {
    const userId = id;
    if (data.prompt === "") {
      return {
        status: false,
        message: "please write any message",
      };
    }
    if (data.chat === undefined) {
      return {
        status: false,
        message: "chat not found",
      };
    }
    const findSubject = await subject.findOne({ name: data.subject });
    if (!findSubject) {
      return {
        status: false,
        message: "subject not found",
      };
    }
    const response = await gptResponse(data.subject, data.prompt);
    const newConversation = await conversation.create({
      ...data,
      response,
      user: userId,
    });

    return {
      status: true,
      data: newConversation,
    };
  },

  getService: async (query) => {
    const userId = id;
    const allConversation = await conversation.aggregate([
      {
        $match: {
          subject: query.subject,
          user: new mongoose.Types.ObjectId(userId),
          chat: new mongoose.Types.ObjectId(query.chatId),
        },
      },
      {
        $sort: {
          created_on: 1,
        },
      },
    ]);

    return {
      status: true,
      data: allConversation,
    };
  },
};

module.exports = conversationService;
