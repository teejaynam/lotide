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
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) { //if objects are inequal length, return false immediately
    return false;
  }

  for (let key of object1Keys) { //if key from object1 is not included in object2, return false immediately
    if (!object2Keys.includes(key)) {
      return false;
    }

    const value1 = object1[key]; //assign values of object at key into variables in case of nested objects
    const value2 = object2[key];

    if (typeof value1 !== "object") { //if typeof isnt an object, check for equality, return false if not strictly equal
      if (value1 !== value2) {
        return false;
      }
    } else { 
      if (!eqObjects(value1, value2)) { //recursive call of eqObjects, passing our object[key] variables as arguments
        return false;
      }
    }
  }

  return true; //if all checks pass, return true
};

// tests

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const test4 = { size: "medium", color: "blue", sleeveLength: "long" };

const test5 = { color: "blue", sleeveLength: "long", size: "medium" };

assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
assertEqual(eqObjects(longSleeveShirtObject , test4), false);
assertEqual(eqObjects(test4,test5), true);


const test6 = { size: ["medium","L"], color: "blue", sleeveLength: "long" };
const test7 = { color: "blue", sleeveLength: "long", size: ["medium","L"] };
assertEqual(eqObjects(test6,test7), true);



