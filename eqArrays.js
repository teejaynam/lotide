const assertEqual = function(actual, expected) {
  let outcome = actual === expected ? `🟢 Assertion Passed: ${actual} === ${expected}` : `🔴 Assertion Failed: ${actual} !== ${expected}`;
  console.log(outcome);
};

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


// testing

if (eqArrays([1, 2, 3], [1, 2, 3])) {
  console.log("true");
} else {
  console.log("false");
} // => true

if (eqArrays([1, 2, 3], [1, 2, "3"])) {
  console.log("true");
} else {
  console.log("false");
} // => false


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
