const assertEqual = function(actual, expected) {
  let outcome = actual === expected ? `🟢 Assertion Passed: ${actual} === ${expected}` : `🔴 Assertion Failed: ${actual} !== ${expected}`;
  console.log(outcome);
};

// function that returns the an array without the first element
const tail = function(array) {
  let newArray = array.slice(1,array.length);
  console.log(newArray);
  return newArray;
};

// testing
const words = ["Yo Yo", "Lighthouse", "Labs"];

// testing that the original array is not affected by the tail function
tail(words);
assertEqual(words.length, 3);

// will fail, cannot compare two arrays
assertEqual(tail(words),["Lighthouse","Labs"]);