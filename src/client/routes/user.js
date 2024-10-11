//modules
const { Router } = require("express");
const route = Router();

//components
const { loginController, getController } = require("../controller/user");
const verifyToken = require("../../middleware/jwt");

const userRoute = (app) => {
  app.use("/api/v1/user", route);

  route.post("/login", loginController);
  route.get("/",verifyToken, getController);
};

module.exports = userRoute;
