// test/eqArraysTest.js

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// TEST CODE

describe("#eqArrays", () => {

  it("returns true for two alike arrays with numbers", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true for two alike arrays with strings", () => {
    assert.deepEqual(eqArrays(['medium', 'L'], ['medium', 'L']), true);
  });

  it("returns true for two alike arrays with a nested array", () => {
    assert.deepEqual(eqArrays(['small', 'medium', [1,2]], ['small', 'medium', [1,2]]), true);
  });

  it("returns false for two arrays with that have different value elements", () => {
    assert.deepEqual(eqArrays([4,5,6], ["4",5,6]), false);
  });

});