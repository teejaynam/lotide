// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let outcome = actual === expected ? `🟢 Assertion Passed: ${actual} === ${expected}` : `🔴 Assertion Failed: ${actual} !== ${expected}`;
  console.log(outcome);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 4);
assertEqual("poppy", "poppy");