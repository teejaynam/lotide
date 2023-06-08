// test/tailTest.js

const tail = require('../tail');
const assert = require('chai').assert;

// TEST CODE

describe("#tail", () => {

  const test1 = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(test1), ["Lighthouse", "Labs"]);
  });

  const test2 = tail(test1);
  it("returns ['Labs'] for tail(['Yo Yo', 'Lighthouse', 'Labs'])", () => {
    assert.deepEqual(tail(test2), ['Labs']);
  });

  const test3 = ["Zoop", "Loop", "Shoop"];
  it("returns ['Loop', 'Shoop'] for ['Zoop', 'Loop', 'Shoop']", () => {
    assert.deepEqual(tail(test3), ["Loop","Shoop"]);
  });

});
