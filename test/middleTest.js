// test/middleTest.js

const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE

console.log("an array with only 1 or 2 elements, return an empty array");
assertArraysEqual(middle([1,2]),[]);
console.log("an array with an odd amount of elements, return array of single middle element");
assertArraysEqual(middle([1,2,3,4,5]),[3]);
console.log("an array with even amount of elements, return array of middle two elements");
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);