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

// function that receives an array and an element to be removed from the source array and returns the filtered array without affecting the original given array
const without = function(source, itemsToRemove) {
  let subset = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      subset.push(source[i]);
    }
  }

  return subset;
};

// testing
assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
assertArraysEqual(without([4, 5, 5], [5]),[4]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
