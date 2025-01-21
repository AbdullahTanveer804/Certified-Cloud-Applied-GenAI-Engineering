"use strict";
// Question No. 1
// Using conditional statements, check if the number is:
// (a) Even or Odd.
let n = 10;
if (n % 2 === 0) {
    console.log("Given Number Is Even");
}
else {
    console.log("Given Number Is Odd");
}
// (b) Positive, Negative, or Zero.
let num = 0;
if (num > 0) {
    console.log("Given Number Is Positive");
}
else if (num < 0) {
    console.log("Given Number Is Negative");
}
else {
    console.log("Given Number is Zero");
}
// (c) Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both. Check all the cases and print a statement for each case.
let val = 3;
if (val % 2 === 0 && val % 3 === 0) {
    console.log("Given number is divisible by both 2 and 3");
}
else if (val % 2 !== 0 && val % 3 === 0) {
    console.log("Given number is not divisible by 2 but divisible by 3");
}
else if (val % 2 === 0 && val % 3 !== 0) {
    console.log("Given number is divisible by 2 but not by 3");
}
else {
    console.log("Given number is not divisible by both 2 and 3");
}
// Question No. 2
// Take the user age.
// (a) If the age is 18 or above:
// (b) Ask if they have a nationality of "Pakistani".
// (c) If yes, print "You are eligible to vote."
// (d) If no, print "Please obtain a valid ID to vote."
let nationality = "pakistani";
let userAge = 19;
if (userAge >= 18 && nationality.toLowerCase() === "pakistani") {
    console.log("You are eligible to vote");
}
else {
    console.log("Please obtain a valid ID to vote.");
}
// Question No. 3
// Write a program that takes the age of a person as input and determines whether they are
// a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above)
let age = 40;
if (age >= 0 && age <= 12) {
    console.log("User is 'CHILD'");
}
else if (age >= 13 && age <= 19) {
    console.log("User is 'TEENAGER'");
}
else if (age >= 20 && age <= 59) {
    console.log("User is 'ADULT'");
}
else {
    console.log("User is 'SENIOR CITIZEN'");
}
// Question No. 4
// Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year.
// Also, check if a year is a leap year or not.
const M1 = 31; // Jan
const M2 = 28; // Feb
const M3 = 31; // Mar
const M4 = 30; // Apr
const M5 = 31; // May
const M6 = 30; // Jun
const M7 = 31; // Jul
const M8 = 31; // Aug
const M9 = 30; // Sep
const M10 = 31; // Oct
const M11 = 30; // Nov
const M12 = 31; // Dec
const sumOfMonths = M1 + M2 + M3 + M4 + M5 + M6 + M7 + M8 + M9 + M10 + M11 + M12; // 365 Days
// Print the number of days in February.
console.log("This year February has", M2, "days");
// Also, check if a year is a leap year or not.
if (sumOfMonths === 365) {
    console.log("This is a 'NON-LEAP YEAR'");
}
else {
    console.log("This is a 'LEAP YEAR'");
}
