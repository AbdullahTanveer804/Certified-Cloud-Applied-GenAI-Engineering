// Age Calculator
const ageCalculator = (currentYear: number, birthYear: number) => {
    console.log("Your age according to the current year is:", currentYear - birthYear);
};
ageCalculator(2024, 2002);

// Area Of Rectangle
const areaOfRectangle = (length: number, width: number) => {
    console.log("Area of rectangle:", length * width);
};
areaOfRectangle(10, 9);

// Area Of Circle
const areaOfCircle = (radius: number) => {
    console.log("Area of a Circle:", 3.14 * radius * radius);
};
areaOfCircle(2);

// Area of a Cube
const areaOfCube = (lengthOfOneSide: number) => {
    console.log("Area of a Cube:", 6 * (lengthOfOneSide ** 2));
};
areaOfCube(8);

// Convert Celsius To Fahrenheit
const celsiusToFahrenheit = (tempInCelsius: number) => {
    console.log(tempInCelsius, "degrees in Fahrenheit is", (9 / 5 * tempInCelsius) + 32, "degrees.");
};
celsiusToFahrenheit(37);

// Convert Fahrenheit To Celsius
const fahrenheitToCelsius = (tempInFahrenheit: number) => {
    console.log(tempInFahrenheit, "degrees in Celsius is", (tempInFahrenheit - 32) * 5 / 9, "degrees.");
};
fahrenheitToCelsius(98);

// Convert Minutes Into Seconds
const minutesToSeconds = (minutes: number) => {
    console.log("Given minutes into seconds are", minutes * 60);
};
minutesToSeconds(10);

// Convert Seconds Into Minutes
const secondsToMinutes = (seconds: number) => {
    console.log("Given seconds into minutes are", seconds / 60);
};
secondsToMinutes(600);

// Percentage Calculator
const percentageCalculator = (numerator: number, denominator: number) => {
    if (denominator === 0) {
        console.log("ERROR");
    } else {
        console.log((numerator / denominator) * 100, "percent");
    }
};
percentageCalculator(10, 30);

// Checking Number is Even or Odd
const checkEvenOrOdd = (number: number) => {
    if (number % 2 === 0) {
        console.log("Given Number Is Even");
    } else {
        console.log("Given Number Is Odd");
    }
};
checkEvenOrOdd(5);

// Checking Number Positive, Negative, or Zero
const checkNumberSign = (number: number) => {
    if (number > 0) {
        console.log("Given Number Is Positive");
    } else if (number < 0) {
        console.log("Given Number Is Negative");
    } else {
        console.log("Given Number is Zero");
    }
};
checkNumberSign(3);

// Check if a number is divisible by both 2 and 3, or any one of them, or not divisible by both
const checkDivisibility = (value: number) => {
    if (value % 2 === 0 && value % 3 === 0) {
        console.log("Given number is divisible by both 2 and 3");
    } else if (value % 2 !== 0 && value % 3 === 0) {
        console.log("Given number is not divisible by 2 but divisible by 3");
    } else if (value % 2 === 0 && value % 3 !== 0) {
        console.log("Given number is divisible by 2 but not by 3");
    } else {
        console.log("Given number is not divisible by both 2 and 3");
    }
};
checkDivisibility(11);

// Vote Casting System
const votingEligibility = (nationality: string, age: number) => {
    if (nationality === "Pakistani" && age >= 18) {
        console.log("You Are Eligible To Vote");
    } else {
        console.log("You Are Not Eligible To Vote");
    }
};
votingEligibility("Pakistani", 22);

// Determine age category
const determineAgeCategory = (age: number) => {
    if (age >= 0 && age <= 12) {
        console.log("User is 'CHILD'");
    } else if (age >= 13 && age <= 19) {
        console.log("User is 'TEENAGER'");
    } else if (age >= 20 && age <= 59) {
        console.log("User is 'ADULT'");
    } else {
        console.log("User is 'SENIOR CITIZEN'");
    }
};
determineAgeCategory(6);

// Check days in a month by its name
const checkDaysInMonth = (month: string) => {
    switch (month) {
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
            } else {
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
};
checkDaysInMonth("Jun");

// Checking Leap Year
const checkLeapYear = (year: number) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("This Is A Leap Year");
    } else {
        console.log("This Is Not A Leap Year");
    }
};
checkLeapYear(2022);