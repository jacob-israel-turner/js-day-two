// Arguments and Parameters
function maths (arnoldShwartzy, cleopatra) {
  // var arnoldShwartzy = arguments[0]
  // var cleopatra = arguments[1]
  console.log(arnoldShwartzy, cleopatra)
}

maths(1, 2)
maths(3, 4)

var one = 34
var two = 72

maths(one, two)

// Return value and difference between reference and invoking a function
debugger
function foo () {
  console.log('test')
  return 21
}
// var thing = foo
var thing = foo()
console.log(thing)


// Closure


function counter () {
  var count = 0
  return function () {
    count++
    console.log(count)
  }
}


// CodeCardio questions

// Write a function named callbackFunc that takes in two numbers and a callback function, and returns the result of the callback function being executed with the two numbers.

//DON'T CHANGE THIS CODE

function adder(x, y) {
   return x + y;
}

function subtractor(x, y) {
   return x - y;
}

function multiplier(x, y) {
   return x * y;
}

function callbackFunc (one, two, cb) {
  return cb(one, two)
}

//DON'T CHANGE THIS EITHER pls
var x = callbackFunc(2, 3, adder); // x = 5
var y = callbackFunc(5, 2, subtractor); // y = 3
var z = callbackFunc(3, 6, multiplier); // z = 18

function myFunc () {
  var num = 0;
  return function() {
    num++
    return num
  }
}

var numCount = myFunc()
numCount()
numCount()
var num = numCount()

// loops!

// for
// for in
// while
// do while
// for of

for (var i = 0; i < 100; i++) {
  console.log(i)
}

// first 'argument': initializer, runs once before loop starts
// second: condition, checked before each loop runs.  If false, loop breaks.
// third: iterator, runs after every loop.

var i = 0;
while (i < 20) {
  console.log(i);
  i++;
}

do {
  console.log(i)
  i++
} while (i < 20)

// Arrays

var variableName = [];
var badWayOfDoingThings = new Array();

// Adding
variableName[0] = 'test'; // Don't do this if you don't have to
variableName.push(21);
variableName.splice(1, 0, true);
variableName.unshift([21, 22]);

// [[21, 22], 'test', true, 21]

// Removing
variableName.pop();
variableName.splice(1, 1);
variableName.shift();
delete variableName[1]; // DONT DO THIS

var myArr = [5,3,6,4,5,7,5,3,8,6,7];

for (var i = 0; i < myArr.length; i++) {
  console.log('value at index ' + i + ' is ', myArr[i])
}

// split/join
var myString = 'The wren, Earns his living, Noiselessly.'
var myPoem = myString.split(', ');
["The wren", "Earns his living", "Noiselessly."]
var finalPoem = myPoem.join('\n')
console.log(finalPoem)
/*
  The wren
  Earns his living
  Noiselessly."
*/

// reverse
var myarr = [1,2,3,4,5]
var flippedArray = myarr.reverse()


// indexOf
var myarr = [1,2,3,4,5]
myarr.indexOf(3) // 2
myarr.indexOf(90) // -1










// temp
