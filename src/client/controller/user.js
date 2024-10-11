//components
const userService = require("../services/user");

const loginController = async (req, res, next) => {
  try {
    const result = await userService.loginService(req.body);
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
    const result = await userService.getService();
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

module.exports = {
  loginController,
  getController,
};
