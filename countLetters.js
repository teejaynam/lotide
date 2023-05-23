const assertEqual = function(actual, expected) {
  let outcome = actual === expected ? `🟢 Assertion Passed: ${actual} === ${expected}` : `🔴 Assertion Failed: ${actual} !== ${expected}`;
  console.log(outcome);
};

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

// testing
const test = countLetters("lighthouse in the house");
//{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }

assertEqual(test["i"],2);
assertEqual(test["h"],4);
assertEqual(test.h,3);
assertEqual(test.e,3);