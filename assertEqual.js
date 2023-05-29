// take two variables (primitive), and compare them for strict equality
/*const assertEqual = function(actual, expected) {
  let outcome = actual === expected ? `🟢 Assertion Passed: ${actual} === ${expected}` : `🔴 Assertion Failed: ${actual} !== ${expected}`;
  console.log(outcome);
};*/

const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  }
};

// testing
assertEqual("Lighthouse", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 4);
assertEqual("poppy", "poppy");