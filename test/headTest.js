// test/headTest.js

const assertEqual = require('../assertEqual')
const head = require('../head')


// TEST CODE

console.log("Head of array, `7`, should pass assertEquals")
assertEqual(head([7,8,7]), 7);

console.log("Head of array, `Hello`, should pass assertEquals")
assertEqual(head(["Hello", "World"]), "Hello");

console.log("Head of array, `Womp`, should fail assertEquals")
assertEqual(head(["Womp", "Lighthouse", "Labs"]), "Pop");
