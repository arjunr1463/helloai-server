//modules
const { Router } = require("express");
const route = Router();

//components
const { loginController } = require("../controller/user");

const userRoute = (app) => {
  app.use("/api/v1/user", route);

  route.post("/login", loginController);
};

module.exports = userRoute;
