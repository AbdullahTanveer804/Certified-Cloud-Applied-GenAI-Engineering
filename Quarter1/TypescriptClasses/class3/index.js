"use strict";
// Data Types
// Boolean
let isDone = false;
console.log(isDone);
// Number
let decimal = 6;
console.log(decimal);
// String
let color = 'blue';
console.log(color);
// Array
let list = [1, 2, 3];
console.log(list);
// Tuple
let x;
x = ['hello', 10];
console.log(x);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
// Any
let notSure = 4;
console.log(notSure);
notSure = 'maybe a string instead';
console.log(notSure);
notSure = false;
console.log(notSure);
// Void
function warnUser() {
    console.log('This is my warning message');
}
warnUser();
// Null and Undefined
let u = undefined;
console.log(u);
let n = null;
console.log(n);
// Never
function error(message) {
    throw new Error(message);
}
// error('Something went wrong!');
// IF Else Statements
let isTrue = true;
if (isTrue) {
    console.log('True');
}
else {
    console.log('False');
} // True
let num = 5;
if (num > 0) {
    console.log('Positive');
}
else if (num < 0) {
    console.log('Negative');
}
else {
    console.log('Zero');
} // Positive 
