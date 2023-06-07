// test/assertArraysEqualTest.js

const assertArraysEqual = require('../assertArraysEqual');

const test1 = [1,2,3,4,5];
const test2 = ["a","b","c"];
const test3 = [];

console.log("comparing two alike arrays of numbers, should pass");
assertArraysEqual(test1,[1,2,3,4,5]);
console.log("comparing two alike arrays of strings, should pass");
assertArraysEqual(test2,["a","b","c"]);
console.log("comparing two empty arrays, should pass");
assertArraysEqual(test3,[]);