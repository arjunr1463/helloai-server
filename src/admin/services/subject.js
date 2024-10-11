// Schema
const subject = require("../../../models/subject");

const subjectService = {
  createService: async (data) => {
    const newSubject = await subject.create(data);
    return {
      status: true,
      data: newSubject,
    };
  },

  getService: async () => {
    const subjects = await subject.find();
    return {
      status: true,
      data: subjects,
    };
  },
};

module.exports = subjectService;
