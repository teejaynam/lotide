// test/headTest.js

const head = require('../head')
const assert = require('chai').assert;

// TEST CODE

describe("#head", () => {

  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']),'5');
  });

  it("returns 'Hello' for ['Hello', 'World']", () => {
    assert.strictEqual(head(['Hello', 'World']), 'Hello');
  });

});