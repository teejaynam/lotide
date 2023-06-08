const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual,expected) {
  eqArrays(actual, expected)
    ? console.log(`🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
};

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

// tests
const test = letterPositions('hello');
// h: [0], e: [1], l: [2, 3], o: [4]
assertArraysEqual(test['h'], [0]);
assertArraysEqual(test['e'], [1]);
assertArraysEqual(test['l'], [2, 3]);
assertArraysEqual(test['o'], [4]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
