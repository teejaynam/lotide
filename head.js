const head = function(array) { //returns first element of the array
  return array[0];
};

const assertEqual = require('./assertEqual')


// testing
assertEqual(head([7,8,7]), 7);
assertEqual(head(["Hello", "World"]), "Hello");
assertEqual(head(["Womp", "Lighthouse", "Labs"]), "Womp");
