// test/countOnlyTest.js

const countOnly = require('../countOnly');
const assert = require('chai').assert;

// TEST CODE

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
    "Karl",
    "Karl"
  ];

  it("returns { Jason: 2 } for { 'Jason' : true }", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true }), { Jason: 1 });
  });

  it("returns {} for { 'Karima' : true }", () => {
    assert.deepEqual(countOnly(firstNames, { "Karima": true }), {});
  });

  it("returns { Fang: 2 } for 'Fang'", () => {
    assert.deepEqual(countOnly(firstNames, { "Fang": true }), { Fang: 2 });
  });

  it("returns { Karl: 3 } for { 'Karl' : true }", () => {
    assert.deepEqual(countOnly(firstNames, { "Karl" : true }), { Karl: 3 });
  });

});


