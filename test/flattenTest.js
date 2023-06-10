// test/flattenTest.js

const flatten = require('../flatten');
const assert = require('chai').assert;

// TEST CODE

describe("#flatten", () => {

  it("returns [1,2,3,4,5,6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
  });

  it("returns ['hi','hey','hello'] for ['hi',['hey','hello']]", () => {
    assert.deepEqual(flatten(['hi',['hey','hello']]),['hi','hey','hello']);
  });

  it("returns ['Hello'] for [['Hello']]", () => {
    assert.deepEqual(flatten([['Hello']]), ['Hello']);
  });

});