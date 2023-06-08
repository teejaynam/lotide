// test/middleTest.js

const middle = require('../middle');
const assert = require('chai').assert;

// TEST CODE

describe("#middle", () => {

  const test1 = [1,2];
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle(test1), []);
  });

  const test2 = [1,2,3,4,5];
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle(test2), [3]);
  });

  const test3 = [1,2,3,4,5,6];
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle(test3), [3,4]);
  });

});