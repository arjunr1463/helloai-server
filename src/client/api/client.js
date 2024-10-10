const chatRoute = require("../routes/chat");
const conversationRoute = require("../routes/conversation");
const userRoute = require("../routes/user");

const client = (app) => {
  conversationRoute(app);
  userRoute(app);
  chatRoute(app);
};

module.exports = client;
