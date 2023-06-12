# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tjnam/lotide`

**Require it:**

`const _ = require('@tjnam/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: A function that takes an array and returns the value of the first element of the passed array.

* `tail(...)`: A function that takes an array and returns a new array copy of the passed array without the first element.

* `middle(...)`: A function that takes an array and returns the middle value of a passed array if it has 3 or more elements. The function will return an empty array otherwise. The function will return the two middle values of the passed aray if it has an even number of elements.

* `flatten(...)`: A function that takes an array with nested arrays, and returns an array without the nested arrays.

* `countOnly(...)`: A function that takes an array and an object and returns an object containing the count of the values set to true from the passed object.

* `letterPositions(...)`: A function that takes in a string and returns an array of all the indices of specified letter position from the string.

* `findKeyByValue(...)`: A function that takes an object and a value and returns the first key of the passed value.

* `eqObjects(...)`: A recursive function that checks the deep equality between two objects and returns true if equal or false if not.

* `eqArrays(...)`: A recursive function that checks the deep equality between two arrays and returns true if equal or false if not.

* `without(...)`: A function that receives an array and a value that returns a new array without the passed value.

* `takeUntil(...)`: A function that receives an array and a callback function that returns a new sliced array with elements taken from the beginning that are processed through the callback until it returns a truthy value.

* `map(...)`: A function that receives an array and a callback function that returns a new array from calling the callback function for every element in the passed array.

* `findKey(...)`: A function that receives an object and a callback function which will invoke the callback function on each key-values in the object and returns the first value that satisfies the callback.

* `countLetters(...)`: A function that takes a string and returns an object of the unique chars from the passed string with the number of occurences.