// eqArrays.js
// function that compares two arrays for strict equality, if there is at least one inequal element, it will return false

const eqArrays = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) { //checks if the arrays are arrays
    if (actual.length !== expected.length) { //checks if the lengths are the same or else return false immediately
      return false;
    }

    for (let i = 0; i < actual.length; i++) {
      if (Array.isArray(actual[i]) && Array.isArray(expected[i])) { //iterate through the array, check for nested array
        if (!eqArrays(actual[i], expected[i])) { //if it is a nested array, check equality by calling eqArrays again, if false, return false immediately
          return false;
        }
      } else if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
};

// export function

module.exports = eqArrays;