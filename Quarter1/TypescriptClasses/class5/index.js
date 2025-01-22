"use strict";
// Functions
// Function with no return type
function add(a, b) {
    console.log(a + b);
}
add(5, 10);
// Function with return type
function multiply(a, b) {
    return a * b;
}
const result = multiply(5, 10);
// Function with optional parameter
function optional(a, b) {
    console.log(a + (b !== null && b !== void 0 ? b : 0));
}
optional(5);
// Function with default parameter
function addWithDefault(a, b = 10) {
    console.log(a + b);
}
addWithDefault(5);
// Function with rest parameter
function addWithRest(a, ...b) {
    const sum = b.reduce((acc, value) => acc + value, a);
    console.log(sum);
}
addWithRest(5, 10, 15, 20);
// Function with function type
function addWithCallback(a, b, callback) {
    callback(a + b);
}
addWithCallback(5, 10, (result) => console.log(result));
// Arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 10));
// Callback function
function executeCallback(callback) {
    callback();
}
executeCallback(() => console.log("Callback executed"));
