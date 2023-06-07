// middle.js
// function that returns the middle element of a given array, returns an empty array if there are less than 3 elements, and 2 middle elements if there are an even amount of elements
const middle = function(source) {
  let middleArray = [];

  if (source.length < 3) {
    return middleArray;
  } else if (source.length % 2 === 0) {
    middleArray.push(source[(source.length / 2) - 1]);
    middleArray.push(source[source.length / 2]);
  } else {
    middleArray.push(source[source.length / 2 | 0]); //bitwise OR operator is like Math.floor, rounds down to nearest whole number
  }

  return middleArray;
};

// export function

module.exports = middle;