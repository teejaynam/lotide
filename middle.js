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

const middle = function(source) {
  let middleArray = [];

  if (source.length < 3) {
    return middleArray;
  } else if (source.length % 2 === 0) {
    middleArray.push(source[(source.length / 2) - 1]);
    middleArray.push(source[source.length / 2]);
  } else {
    middleArray.push(source[source.length / 2 | 0]); //bitwise OR operator is like Math.floor, rounds down to nearest whole number
  }

  return middleArray;
};

assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3,4,5]),[3,4]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([3,6,9]),[6]);
