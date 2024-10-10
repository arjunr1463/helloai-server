//modules
const { Router } = require("express");
const route = Router();

//components
const verifyToken = require("../../middleware/jwt");
const { createController, getController } = require("../controller/conversation");

const conversationRoute = (app) => {
  app.use("/api/v1/conversation", route);

  route.post("/create", verifyToken, createController);
  route.get("/all", verifyToken, getController);
};

module.exports = conversationRoute;
