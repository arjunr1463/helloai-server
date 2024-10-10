//modules
const { Router } = require("express");
const route = Router();

//components
const { createController } = require("../controller/subject");

const subjectRoute = (app) => {
  app.use("/api/v1/subject", route);

  route.post("/create", createController);
};

module.exports = subjectRoute;
