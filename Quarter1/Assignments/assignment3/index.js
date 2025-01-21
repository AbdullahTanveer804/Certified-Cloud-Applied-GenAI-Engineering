"use strict";
// Create a program that takes a number (1-7) as input 
// and prints the corresponding day of the week.
let checkDayName = 5;
switch (checkDayName) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Error");
        break;
}
// Create a program that takes a month name as input and
// prints the month number and days in that month.
let daysInMonth = "Feb";
switch (daysInMonth) {
    case "Jan":
        console.log("1-31");
        break;
    case "Feb":
        if (2024 % 4 === 0) {
            console.log("2-29");
        }
        else {
            console.log("2-28");
        }
        break;
    case "Mar":
        console.log("3-31");
        break;
    case "Apr":
        console.log("4-30");
        break;
    case "May":
        console.log("5-31");
        break;
    case "Jun":
        console.log("6-30");
        break;
    case "Jul":
        console.log("7-31");
        break;
    case "Aug":
        console.log("8-31");
        break;
    case "Sep":
        console.log("9-30");
        break;
    case "Oct":
        console.log("10-31");
        break;
    case "Nov":
        console.log("11-30");
        break;
    case "Dec":
        console.log("12-31");
        break;
    default:
        console.log("ERROR");
        break;
}
// Create a program that takes a month name as input and
// prints the month number and days in that month.
let dayInMonth = "Feb";
switch (dayInMonth) {
    case "Jan":
    case "Mar":
    case "May":
    case "Jul":
    case "Aug":
    case "Oct":
    case "Dec":
        console.log("Days are 31");
        break;
    case "Feb":
        if (2023 % 4 === 0) {
            console.log("Days are 29");
        }
        else {
            console.log("Days are 28");
        }
        break;
    case "Apr":
    case "Jun":
    case "Sep":
    case "Nov":
        console.log("Days are 30");
        break;
    default:
        console.log("ERROR");
        break;
}
// Create a program that takes a number (1-12) as input and
// prints the corresponding month name.
const monthNum = 6;
let month;
switch (monthNum) {
    case 1:
        month = "January";
        break;
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "October";
        break;
    case 11:
        month = "November";
        break;
    case 12:
        month = "December";
        break;
    default:
        month = "Invalid Month Number";
        break;
}
console.log(month);
// Create a program that takes a student's marks as 
// input and prints the corresponding grade (A, B, C, D, F) 
// using a switch statement.
let marks = 30;
switch (true) {
    case (marks >= 50 && marks <= 60):
        console.log("A+ Grade");
        break;
    case (marks >= 40 && marks < 50):
        console.log("B Grade");
        break;
    case (marks >= 30 && marks < 40):
        console.log("C Grade");
        break;
    case (marks > 25 && marks < 30):
        console.log("D Grade");
        break;
    case (marks < 25):
        console.log("F Grade (Fail)");
        break;
    default:
        console.log("Invalid Input");
        break;
}
// Create a program that prints numbers from 1 to 100. 
// For multiples of three, print "Fizz" instead of the 
// number. For multiples of five, print "Buzz". For
// numbers which are multiples of both three and five,
// print "FizzBuzz".
for (let i = 1; i <= 100; i++) {
    let res;
    switch (true) {
        case (i % 3 === 0 && i % 5 === 0):
            res = "FizzBuzz";
            break;
        case (i % 3 === 0):
            res = "Fizz";
            break;
        case (i % 5 === 0):
            res = "Buzz";
            break;
        default:
            res = i;
            break;
    }
    console.log(res);
}
// Create a program that simulates a simple traffic light. 
// The program should take a color (red, yellow, or green) 
// as input and print the corresponding action (stop, wait, 
// or go).
let color = "Red";
let action;
switch (color) {
    case "Red":
        action = "Stop";
        break;
    case "Yellow":
        action = "Wait";
        break;
    case "Green":
        action = "Go";
        break;
    default:
        action = "Invalid Color";
        break;
}
console.log("Traffic Light Color:", color, "/ Action:", action);
// Create a program that simulates a simple user authentication system. 
// The program should take a username and password as input and 
// authenticate the user.
const username = "sigma65@gmail.com";
const password = "sigmapass65";
let output;
switch (true) {
    case (username === "sigma65@gmail.com" && password === "sigmapass65"):
        output = "Login Successful";
        break;
    default:
        output = "Authentication Error";
        break;
}
console.log(output);
// Create a program that simulates a simple ATM interface. The program 
// should take a transaction type (withdraw, deposit, check balance) as 
// input and perform the corresponding action.
let transactionType = "Withdraw";
let message;
switch (transactionType) {
    case "Withdraw":
        message = "Enter amount for cash withdraw:";
        break;
    case "Deposit":
        message = "Enter amount for cash deposit:";
        break;
    case "Check Balance":
        message = "Enter account information for checking balance:";
        break;
    default:
        message = "Invalid Transaction Type";
        break;
}
console.log(message);
// Create a program that simulates a simple weather app. The program should 
// take a weather condition (sunny, cloudy, rainy) as input and provide a 
// suitable message.
let weather = "rainy";
let weatherResult;
switch (weather) {
    case "sunny":
        weatherResult = "Today's weather is sunny. Don't forget your water bottle.";
        break;
    case "cloudy":
        weatherResult = "It's a cloudy day. Looks like it might rain.";
        break;
    case "rainy":
        weatherResult = "It's raining. Don't forget your umbrella.";
        break;
    default:
        weatherResult = "Invalid weather condition!";
        break;
}
console.log(weatherResult);
// Student Management System:
// Develop a student management system program that allows users to 
// perform operations such as adding a new student, displaying student 
// details, updating student information, and deleting a student.
let sms = "Delete Student";
let display;
switch (sms) {
    case "Add New Student":
        display = "Student registration no. \nName: \nFather Name: \nAge: \nGrades:";
        break;
    case "Display Student Details":
        display = "Enter Student ID For Details \nID No.:";
        break;
    case "Update Student Info":
        display = "Enter Student ID For Update Info \nID No.:";
        break;
    case "Delete Student":
        display = "Enter Student ID For Delete Student \nID No.:";
        break;
    default:
        display = "Invalid Command!";
        break;
}
console.log(display);
// Create a simple calculator program that takes two numbers and an operator 
// (+, -, *, /, %) as input and performs the corresponding operation.
const num1 = 2;
const num2 = 24;
const operator = "+";
let result1;
switch (operator) {
    case "+":
        result1 = num1 + num2;
        break;
    case "-":
        result1 = num1 - num2;
        break;
    case "*":
        result1 = num1 * num2;
        break;
    case "/":
        result1 = num1 / num2;
        break;
    case "%":
        result1 = num1 % num2;
        break;
    default:
        result1 = NaN;
        console.log("Invalid Operator!");
        break;
}
console.log(result1);
