// take two variables (primitive), and compare them for strict equality
const assertEqual = function(actual, expected) {
  let outcome = actual === expected ? `🟢 Assertion Passed: ${actual} === ${expected}` : `🔴 Assertion Failed: ${actual} !== ${expected}`;
  console.log(outcome);
};

const findKey = function(object, callback) {
  for (const key of Object.keys(object)) { //for..of loop to iterate through array of object's keys,
    if (callback(object[key])) { //invoke callback function of the object value at the key, if true, return key, if not, return undefined
      return key;
    }
  }
  return undefined;
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma");

assertEqual(findKey({
  "Toronto":     { province: "Ontario" },
  "Scarborough": { province: "Ontario" },
  "Montreal":    { province: "Quebec" },
  "Vancouver":   { province: "British Columbia" },
  "Laval":       { province: "Quebec" }
}, x => x.province === "Quebec"),"Montreal");

assertEqual(findKey({
  "Toronto":     { province: "Ontario" },
  "Scarborough": { province: "Ontario" },
  "Montreal":    { province: "Quebec" },
  "Vancouver":   { province: "British Columbia" },
}, x => x.province === "Alberta"),undefined);

assertEqual(findKey({}, x => x.province === "New Brunswick"),undefined);