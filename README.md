# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tjnam/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: A function that takes an array and returns the value of the first element of the passed array.
* `tail(...)`: A function that takes an array and returns a new array copy of the passed array without the first element.
* `middle(...)`: A function that takes an array and returns the middle value of a passed array if it has 3 or more elements. The function will return an empty array otherwise. The function will return the two middle values of the passed aray if it has an even number of elements.