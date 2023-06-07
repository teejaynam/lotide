// test/tailTest.js

const assertEqual = require('../assertEqual')
const tail = require('../tail')

// TEST CODE
const test1 = ["Yo Yo", "Lighthouse", "Labs"];

console.log("test that tail does not modify original array after passing to tail() :",tail(test1));
console.log("original array length (3) should pass assertEqual")
assertEqual(test1.length, 3);

console.log("test should fail, cannot shallow compare two array objects directly");
assertEqual(tail(test1),["Lighthouse","Labs"]);

const test2 = tail(test1);
console.log("modified array saved into new variable, modified array length comparison should pass assertEqual");
assertEqual(test2.length, 2);