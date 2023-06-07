// test/assertEqualTest.js

const assertEqual = require('../assertEqual');


// TEST CODE

console.log("fail");
assertEqual("Lighthouse", "Bootcamp");

console.log("pass");
assertEqual(1, 1);

console.log("fail");
assertEqual(1, 4);

console.log("pass");
assertEqual("poppy", "poppy");