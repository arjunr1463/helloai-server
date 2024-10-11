//modules
const { Router } = require("express");
const route = Router();

//components
const {
  createController,
  getController,
  deleteController,
  renameController,
} = require("../controller/chat");
const verifyToken = require("../../middleware/jwt");

const chatRoute = (app) => {
  app.use("/api/v1/chat", route);

  route.post("/create", verifyToken, createController);
  route.get("/all", verifyToken, getController);
  route.put("/rename", verifyToken, renameController);
  route.delete("/delete", verifyToken, deleteController);
};

module.exports = chatRoute;
