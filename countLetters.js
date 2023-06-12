// countLetters.js

const countLetters = function(sentence) {
  count = {};

  for (const letter of sentence) {
    if (letter === ' ') {
      continue;
    }
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }

  return count;
};

module.exports = countLetters;