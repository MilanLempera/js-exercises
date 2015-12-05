var _ = require('ramda');

require('../support.js');

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words = _.partial(split, [' ']);

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.


var sentences = map(words);

console.log(sentences(["Prvni veta s mezerami", "Druha veta s mezerami"]))


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var filterQs = filter(match(/q/i));


console.log(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']))


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
var max = reduce(_keepHighest, -Infinity);

console.log(max([323,523,554,123,5234]));

// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = _.curry(function(start, end, xs) { return xs.slice(start, end)});

console.log(slice(1)(3)(['a', 'b', 'c']))

// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements from the beginning of the string. Make it curried
// // Result for "Something" with n=4 should be "Some"
var take = slice(0);

console.log(take(2)(['a', 'b', 'c']))