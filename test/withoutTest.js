// test/withoutTest.js

const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE

assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
assertArraysEqual(without([4, 5, 5], [5]),[4]);

const words = ["hello", "world", "lighthouse"];

assertArraysEqual(words, ["hello", "world", "lighthouse"]);