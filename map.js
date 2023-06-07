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

// side effect function that returns a pass if eqArrays is true or fail is returns false
const assertArraysEqual = function(actual,expected) {
  eqArrays(actual, expected)
    ? console.log(`🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};


// testing
const words = ["ground", "control", "to", "major", "tom"];
//const results1 = map(words, word => word[0]);
//console.log(results1);
assertArraysEqual(map(words, word => word[0]),['g','c','t','m','t']);

const test1 = ["Friends", "U & ME", "Nee where"];
assertArraysEqual(map(test1, word => word[0]),["F","U","N"]);

const test2 = ["four","five"];
const resultsTest2 = map(test2, element => element.length);

assertArraysEqual(resultsTest2, [4,4]);


const test3 = [1,2,3,4,5,6,7,8,9,10];
const resultsTest3 = test3.filter(num => num % 2 === 0);

assertArraysEqual(resultsTest3,[2,4,6,8,10]);
