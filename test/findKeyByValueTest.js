// test/findKeyByValueTest.js

const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

// TEST CODE

describe("#findKeyByValue", () => {

  const TVshows = {
    comedy: "The Office",
    drama:  "The Wire",
    fantasy: "Game of Thrones"
  };

  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(TVshows, "The Wire"), "drama");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.strictEqual(findKeyByValue(TVshows, "That '70s Show"), undefined);
  });

  it("returns 'fantasy' for 'Game of Thrones'", () => {
    assert.strictEqual(findKeyByValue(TVshows, "Game of Thrones"), "fantasy");
  });

});