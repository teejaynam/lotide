// assertArraysEqual.js

const eqArrays = require('./eqArrays');

// side effect function that returns a pass if eqArrays is true or fail is returns false
const assertArraysEqual = function(actual,expected) {
  eqArrays(actual, expected)
    ? console.log(`🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// export function

module.exports = assertArraysEqual;