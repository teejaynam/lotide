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


const takeUntil = function(array, callback) {
  const result = [];

  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      break;
    }
  }

  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[1,2,5,7,2]);
assertArraysEqual(results2,["I've","been","to","Hollywood"]);

const data3 = ["I","Am","Iron","Man","Three"];
assertArraysEqual(takeUntil(data3, x => x === 'Three'),["I","Am","Iron","Man"]);