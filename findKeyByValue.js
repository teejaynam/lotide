// findkeybyvalue.js

const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (value === object[key]) {
      return key;
    }
  }
};

// export function

module.exports = findKeyByValue;