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
  const object1Keys = Object.keys(object1).sort();
  const object2Keys = Object.keys(object2).sort();

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const keys of object1Keys) {
    console.log(object1[keys]);
    if (!object2Keys.includes(keys) || object1[keys] !== object2[keys]) {
      return false;
    }

    if ((Array.isArray(object1[keys])) && (Array.isArray(object2[keys]))) {
      console.log(object1[keys]);
      if (!eqArrays(object1[keys],object2[keys])) {
        return false;
      }
    }
  }

  return true;
};

// tests
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
//eqObjects(shirtObject , anotherShirtObject); // => true
//assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const test4 = { size: "medium", color: "blue", sleeveLength: "long" };
const test5 = { color: "blue", sleeveLength: "long", size: "medium" };

//eqObjects(shirtObject , longSleeveShirtObject); // => false
//assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
//assertEqual(eqObjects(longSleeveShirtObject , test4), false);
//assertEqual(eqObjects(test4,test5), true);

const test6 = { size: ["medium","L"], color: "blue", sleeveLength: "long" };
const test7 = { color: "blue", sleeveLength: "long", size: ["medium","L"] };
eqObjects(test6,test7);
assertEqual(eqObjects(test6,test7), true);



