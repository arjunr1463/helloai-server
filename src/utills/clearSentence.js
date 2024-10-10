const clearIncompleteSentences = (text) => {
  // Regular expression to match incomplete sentences
  const completeSentenceRegex = /([A-Z][^.!?]*[.!?])/g;
  const completeSentences = text.match(completeSentenceRegex);
  return completeSentences ? completeSentences.join(" ") : "";
};

module.exports = { clearIncompleteSentences };
