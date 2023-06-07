// tail.js

const tail = function(array) { // function that returns the an array without the first element
  let newArray = array.slice(1,array.length);
  return newArray;
};

// export function

module.exports = tail;