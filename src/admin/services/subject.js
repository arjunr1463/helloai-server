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
};

module.exports = subjectService;
