// schema
const user = require("../../../models/user");

// module
const jwt = require("jsonwebtoken");

const userService = {
  loginService: async (data) => {
    const findUser = await user.findOne({ email: data.email });
    let token;
    if (findUser) {
      token = jwt.sign({ userId: findUser._id }, process.env.JWT_SECRET);
    } else {
      const newUser = await user.create(data);
      token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
    }
    return {
      status: true,
      data: token,
    };
  },

  getService: async () => {
    const userId = id;
    const findUser = await user.findById(userId);
    if (!findUser) {
      return {
        status: false,
        message: "User not found",
      };
    }
    return {
      status: true,
      data: findUser,
    };
  },
};

module.exports = userService;
