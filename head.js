const assertEqual = function(actual, expected) {
  let outcome = actual === expected ? `🟢 Assertion Passed: ${actual} === ${expected}` : `🔴 Assertion Failed: ${actual} !== ${expected}`;
  console.log(outcome);
};

const head = function(array) {
  return array[0];
};


// testing
assertEqual(head([7,8,7]), 7);
assertEqual(head(["Hello", "World"]), "Hello");
assertEqual(head(["Womp", "Lighthouse", "Labs"]), "Hello");
