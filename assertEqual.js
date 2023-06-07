// assertEqual.js

const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  }
};

// export function

module.exports = assertEqual;