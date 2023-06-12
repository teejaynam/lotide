// without.js
// function that receives an array and an element to be removed from the source array and returns the filtered array without affecting the original given array

const without = function(source, itemsToRemove) {
  let subset = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      subset.push(source[i]);
    }
  }

  return subset;
};

//export

module.exports = without;