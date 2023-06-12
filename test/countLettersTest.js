// test/countLettersTest.js

const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');


// TEST CODE

const test = countLetters("lighthouse in the house");
console.log("lighthouse in the house");
console.log( "l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1" )

assertEqual(test.i,2);
assertEqual(test.h,4);
assertEqual(test.u,2);
assertEqual(test.e,3);