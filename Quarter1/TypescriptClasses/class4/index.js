"use strict";
// switch case statements
let day = 4;
let dayName;
switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
        break;
}
// Switch case with string
let fruit = 'apple';
let fruitName;
switch (fruit) {
    case 'apple':
        fruitName = 'Apple';
        break;
    case 'banana':
        fruitName = 'Banana';
        break;
    case 'mango':
        fruitName = 'Mango';
        break;
    default:
        fruitName = 'Invalid fruit';
        break;
}
// Switch case with boolean
let isWeekend = false;
let dayType;
switch (isWeekend) {
    case true:
        dayType = 'Weekend';
        break;
    case false:
        dayType = 'Weekday';
        break;
    default:
        dayType = 'Invalid day type';
        break;
}
console.log(dayType); // Output: Weekday
// Switch case with multiple cases  
let animal = 'dog';
let animalType;
switch (animal) {
    case 'dog':
    case 'cat':
    case 'cow':
    case 'goat':
        animalType = 'Mammal';
        break;
    case 'crocodile':
    case 'snake':
    case 'lizard':
        animalType = 'Reptile';
        break;
    default:
        animalType = 'Invalid animal';
        break;
}
console.log(animalType); // Output: Mammal
// Switch case with expressions
let num = 5;
let result;
switch (true) {
    case num > 0 && num < 5:
        result = 'Number is between 0 and 5';
        break;
    case num > 5 && num < 10:
        result = 'Number is between 5 and 10';
        break;
    default:
        result = 'Number is 0 or greater than 10';
        break;
}
console.log(result); // Output: Number
// Switch case with fall-through
let value = 0;
let message;
switch (value) {
    case 0:
        message = 'Hello';
    case 1:
        message = 'World';
    default:
        message = 'Goodbye';
}
console.log(message); // Output: Goodbye
