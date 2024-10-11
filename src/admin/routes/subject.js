//modules
const { Router } = require("express");
const route = Router();

//components
const { createController, getController } = require("../controller/subject");

const subjectRoute = (app) => {
  app.use("/api/v1/subject", route);

  route.post("/create", createController);
  route.get("/", getController);
};

module.exports = subjectRoute;
