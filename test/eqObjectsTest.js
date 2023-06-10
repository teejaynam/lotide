// test/eqArraysTest.js

const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

// TEST CODE

describe("#eqObjects", () => {

  const test1 = { size: ["medium","L"], color: "blue", sleeveLength: "long" };
  const test2 = { color: "blue", sleeveLength: "long", size: ["medium","L"] };
  it("returns true for two alike objects with a nested array", () => {
    assert.deepEqual(eqObjects(test1, test2), true);
  });

  const test3 = { color: "red", size: "medium", sleeve : { sleeveLength: "long" } };
  const test4 = { size: "medium", color: "red", sleeve : { sleeveLength: "long" } };
  it("returns true for two alike objects with a nested object", () => {
    assert.deepEqual(eqObjects(test3, test4), true);
  });

  const test5 = { size: "medium", color: "blue", sleeveLength: "long" };
  const test6 = { color: "blue", sleeveLength: "long", size: "medium" };
  it("returns true for two alike objects", () => {
    assert.deepEqual(eqObjects(test5, test6), true);
  });

});