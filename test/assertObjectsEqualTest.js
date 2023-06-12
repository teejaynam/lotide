// test/assertObjectsEqualTest

const assertObjectsEqual = require('../assertObjectsEqual')

// TEST CODE
const test6 = { size: ["medium","L"], color: "blue", sleeveLength: "long" };
const test7 = { color: "blue", sleeveLength: "long", size: ["medium","L"] };
assertObjectsEqual(test6,test7); 

const test3 = { color: "red", size: "medium", sleeve : { sleeveLength: "long" } };
const test4 = { size: "medium", color: "red", sleeve : { sleeveLength: "long" } };
assertObjectsEqual(test3,test4);
