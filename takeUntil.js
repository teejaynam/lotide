// takeUntil.js

const takeUntil = function(array, callback) {
  const result = [];

  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      break;
    }
  }

  return result;
};

//export

module.exports = takeUntil;