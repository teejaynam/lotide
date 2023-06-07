// test/tailTest.js

const assertEqual = require('../assertEqual')
const tail = require('../tail')

// TEST CODE
const test1 = ["Yo Yo", "Lighthouse", "Labs"];
console.log("test that tail does not modify original array after passing to tail() :",tail(test1));
console.log("original array length (3) should pass assertEqual")
assertEqual(test1.length, 3);

const test2 = tail(tail(test1));
console.log("tail(tail(test1)) saved into new variable, modified array length comparison should pass assertEqual");
assertEqual(test2.length,1);

const test3 = tail(test1);
console.log("modified array saved into new variable, modified array length comparison should pass assertEqual");
assertEqual(test3.length, 2);