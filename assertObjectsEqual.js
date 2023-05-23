const assertEqual = function(actual, expected) {
  let outcome = actual === expected ?
    `🟢 Assertion Passed: ${actual} === ${expected}` :
    `🔴 Assertion Failed: ${actual} !== ${expected}`;
  console.log(outcome);
};

const eqArrays = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) {
      return false;
    }

    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }

    return true;
  }

  return false;
};

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1); // create an array of keys of the given objects
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) { // if they are of inequal length, return false
    return false;
  }

  for (const key of object1Keys) { // for each key in the object key arrays, if its not included in the object 2 keys, return false
    if (!object2Keys.includes(key)) {
      return false;
    }

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // if the key value of both objects are arrays, check if eqArrays is false for the given values
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true; // if key+value conditions all go through, they are equal, and return true
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected)
    ? console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// testing
const test6 = { size: ["medium","L"], color: "blue", sleeveLength: "long" };
const test7 = { color: "blue", sleeveLength: "long", size: ["medium","L"] };
assertObjectsEqual(test6,test7); //PASS CASE
const test4 = { size: "medium", color: "blue", sleeveLength: "long" };
const test5 = { color: "red", sleeveLength: "long", size: "medium" };
assertObjectsEqual(test4,test5); //FAIL CASE