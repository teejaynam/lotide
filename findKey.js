// findKey.js

const findKey = function(object, callback) {
  for (const key of Object.keys(object)) { //for..of loop to iterate through array of object's keys,
    if (callback(object[key])) { //invoke callback function of the object value at the key, if true, return key, if not, return undefined
      return key;
    }
  }
  return undefined;
};

// export

module.exports = findKey;