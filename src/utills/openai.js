//module
const openai = require("../../config/openai");

//utills
const { clearIncompleteSentences } = require("./clearSentence");

const getEmbeddings = async (text) => {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: text,
    });

    return response.data[0].embedding;
  } catch (error) {
    console.error("Error creating embedding:", error);
    throw error;
  }
};

const gptResponse = async (subject, question) => {
  const validationResponse = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are an expert in multiple subjects. Only answer if the question is related to the specified subject. Otherwise, respond with "This question is not related to ${subject}".`
      },
      {
        role: "user",
        content: `Is the following question related to ${subject}: "${question}"?`
      },
    ],
    max_tokens: 50,
  });

  const validation = validationResponse.choices[0].message.content.trim();

  if (validation.toLowerCase().includes(`not related to ${subject.toLowerCase()}`)) {
    return `This question does not seem related to the subject of ${subject}. Please ask a question related to ${subject}.`;
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are an expert in ${subject}. Provide accurate, detailed, and structured explanations specifically related to ${subject}.`
      },
      {
        role: "user",
        content: `Please explain the following in terms of ${subject}: ${question}.`
      },
    ],
    max_tokens: 250,
  });

  return clearIncompleteSentences(response.choices[0].message.content);
};

module.exports = { getEmbeddings, gptResponse };
