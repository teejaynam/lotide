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

// function that returns a flattened version of a given array
const flatten = function(source) {
  return source.flat();
};

// testing
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
