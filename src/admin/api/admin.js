const subjectRoute = require("../routes/subject");

const admin = (app) => {
  subjectRoute(app);
};

module.exports = admin;
