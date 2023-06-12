// test/findKeyTest.js

const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

// TEST CODE
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