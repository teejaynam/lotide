// test/takeUntilTest.js

const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(data1);
const results1 = takeUntil(data1, x => x < 0);
console.log("takeUntil x < 0 ->", results1);
assertArraysEqual(results1,[1,2,5,7,2]);

console.log('-------------------------');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(data2);
const results2 = takeUntil(data2, x => x === ',');
console.log("takeUntil x === ',' ->",results2);
assertArraysEqual(results2,["I've","been","to","Hollywood"]);

console.log('-------------------------');

const data3 = ["I","Am","Iron","Man","Three"];
console.log(data3);
const results3 = takeUntil(data3, x => x === 'Three');
console.log("takeUntil x === 'Three' ->", results3);
assertArraysEqual(results3,["I","Am","Iron","Man"]);