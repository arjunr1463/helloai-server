const chatService = require("../services/chat");

const createController = async (req, res, next) => {
  try {
    const result = await chatService.createService(req.body);
    if (result.status) {
      return res.status(200).json(result);
    } else {
      return res.status(403).json(result);
    }
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getController = async (req, res, next) => {
  try {
    const result = await chatService.getService(req.query);
    if (result.status) {
      return res.status(200).json(result);
    } else {
      return res.status(403).json(result);
    }
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = { createController, getController };
