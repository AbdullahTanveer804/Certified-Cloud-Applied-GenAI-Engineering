// If length of a rectangle is 49 and width is 97 then find the area of a rectangle?
let len: number = 49;
let wid: number = 97;
console.log("Area of a rectangle is", len * wid);

// Calculate your age based on the current year and your birth year.
let birthyear: number = 2002;
let currentyear: number = 2024;
console.log("My age based on current year and birth year is", currentyear - birthyear);

// Write a program that calculates the area of a circle.
// As radius of a given circle is 37.8 then find the area of that circle?
let radius: number = 37.8;
const pi: number = 3.141;
let result: number = pi * radius * radius; // Area of a circle = pi(radius)^2
console.log("Area of the given circle is equals to", result);

// Write a program that calculates the area of the cube.
// If length of one side of a cube is 54 then find the area of a cube?
len = 54;
result = 6 * len * len; // Area of a cube = 6(length of one side of a cube)^2
console.log("Area of the given cube is", result);

// Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.
// If temperature is 84 Fahrenheit then convert it to Celsius
let fah: number = 84;
result = (fah - 32) * 5 / 9; // Celsius = (Fahrenheit - 32) * 5/9
let cals: number = result;
console.log('84 Fahrenheit into Celsius is', cals);

// Convert a given number of seconds into minutes and seconds using variables.
// Let's convert 55568 sec into mins
let sec: number = 55568;
let min: number = sec / 60; // Minutes = seconds / 60
console.log('55568 seconds are', min, 'minutes');

// Write a program that calculates the percentage.
// My friend got 989 marks out of 1100 in matric then finds percentage?
let totalMarks: number = 1100; // Total marks
let obtainedMarks: number = 989; // Obtained marks
result = (obtainedMarks / totalMarks) * 100; // By formula
console.log("My friend got", result, "% marks in matric.");

// Increment and Decrement Operator:
// Question No. 1
let a1 = 2;
let b1 = ++a1 * 2;
// b1 = 3 * 2 = 6
console.log("The value of b1 =", b1);

// Question No. 2
let x1 = 5;
let y1 = x1-- + 2;
// y1 = 5 + 2 = 7
console.log("The value of y1 =", y1);

// Question No. 3
let x2 = 3;
let y2 = ++x2 + x2++ + ++x2;
// y2 = 4 + 4 + 6 = 14
console.log("The value of y2 =", y2);

// Question No. 4
let p = 2;
let q = ++p * p++ * --p;
// q = 3 * 3 * 3 = 27
console.log("The value of q =", q);

// Question No. 5
let i = 3;
let j = 5;
let k = ++i + j-- - i++ + --j;
// k = 4 + 5 - 4 + 3 = 8
console.log("The value of k =", k);

// Question No. 6
let i1 = 2;
let j1 = 4;
let k1 = i1++ + ++j1 - --i1 + j1--;
// i1 = 2
// j1 = 4
// k1 = 2 + 5 - 2 + 5 = 10
console.log("The value of i1 =", i1, "j1 =", j1, "k1 =", k1);

// Question No. 7
let r = 5;
let s = 3;
let t = 2;
let u = 7;
let v = ++r * (s-- + t) / --u;
// r = 6
// s = 2
// t = 2
// u = 6
// v = 6 * (3 + 2) / 6 = 5
console.log("The value of r =", r, "s =", s, "t =", t, "u =", u, "v =", v);

// Question No. 8
let d = 2;
let f = 3;
let g = 4;
let o = d++ * (--f + d) / (g-- - f);
// d = 3
// f = 2
// g = 3
// o = 2 * (2 + 3) / (4 - 2) = 5
console.log("The value of d =", d, "f =", f, "g =", g, "o =", o);