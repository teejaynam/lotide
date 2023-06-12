// test/mapTest

const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');


const test1 = ["ground", "control", "to", "major", "tom"];
console.log("word => word[0] ->", test1);
assertArraysEqual(map(test1, word => word[0]),['g','c','t','m','t']);

console.log("-----------------------------------------------")

const test2 = ["Friends", "U & ME", "Nee where"];
console.log("word => word[0] ->", test2);
assertArraysEqual(map(test2, word => word[0]),["F","U","N"]);

console.log("-----------------------------------------------")

const test3 = ["four","five"];
console.log("element => element.length ->", test3);
assertArraysEqual(map(test3, element => element.length), [4,4]);

