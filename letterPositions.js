// letterPositions.js

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    if (letter === ' ') {
      continue;
    }

    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }

  return results;
};

// export function

module.exports = letterPositions;