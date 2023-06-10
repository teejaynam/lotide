// test/letterPositionsTest.js

const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

// TEST CODE

describe("#letterPositions", () => {

  console.log("testing for word 'lollipop'")

  it("returns [0,2,3] for 'l''", () => {
    assert.deepEqual(letterPositions("lollipop").l, [0,2,3]);
  });

  it("returns [1,6] for 'o'", () => {
    assert.deepEqual(letterPositions("lollipop").o, [1,6]);
  });

  it("returns [5,7] for 'p'", () => {
    assert.deepEqual(letterPositions("lollipop").p, [5,7]);
  });

});