// test/eqArraysTest.js

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE

console.log("Comparison of two alike arrays of numbers should pass assertEquals");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

console.log("Comparison of two alike arrays of strings should pass assertEquals");
assertEqual(eqArrays(['medium', 'L'], ['medium', 'L']), true);

console.log("Comparison of two unlike arrays should return false, and pass assertEquals with second comparator as false");
assertEqual(eqArrays([4,5,6], ["4",5,6]), false);

console.log("Comparison of two alike arrays of with nested arrays should pass assertEquals");
assertEqual(eqArrays(['small', 'medium', [1,2]], ['small', 'medium', [1,2]]), true);