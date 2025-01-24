// Assignment No. 4

// Create a function that takes an array, an index, and a value as 
// parameters. Inside the function, use the splice method to insert the value 
// at the specified index in the array. Return the modified array...
const array = [1, 2, 3, 4, 5, 6, 7];
const addInArray = (array1: number[], index: number, insert: number): number[] => {
    array1.splice(index, 0, insert);
    return array1;
};
console.log(addInArray(array, 7, 8));

// Implement a simple shopping cart program using an array. Create functions
// to add items, remove items, and update quantities using the splice method. 
// Print the cart's contents after each operation

// Add Items
const mainArray: any[] = [];
const items: string[] = ["Apple", "Onion"];
console.log("Items Added to Cart Initially:", items);

const cartA = (quantity: number[], inputArrA: string[], index1: number, insert1: string): any[] => {
    if (quantity.length === inputArrA.length) {
        return [];
    } else {
        inputArrA.splice(index1, 0, insert1);
        let q = 0;
        while (q < inputArrA.length) {
            const addVar = (quantity[q] + "-" + inputArrA[q]);
            q++;
            mainArray.push(addVar);
        }
        return mainArray;
    }
};
console.log("Cart After Adding Items With Quantity:", cartA([3, 6, 8], items, 0, "Peach"));

// Remove Items
console.log("Before Removing Items From Cart:", mainArray);
const cartB = (inputArrB: any[], index2: number): any[] => {
    inputArrB.splice(index2, 1);
    return inputArrB;
};
console.log("After Removing Items From Cart:", cartB(mainArray, 2));

// Update Quantities  
// This section not working properly, need to check
console.log("Before Updating Items Quantity:", mainArray);
const afterUpdateQuantity: any[] = [];
const cartC = (updateQuantity: number[]): any[] => {
    let q1 = 0;
    while (q1 < mainArray.length) {
        const addVar2 = (updateQuantity[q1] + "-" + mainArray[q1]);
        afterUpdateQuantity.push(addVar2);
        q1++;
    }
    return afterUpdateQuantity;
};
console.log("After Updating Items Quantity:", cartC([22, 2]));



// Write a program that uses a while loop to print the first 25 integers...
let i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}

// Write a program that uses a while loop to print the first 10 even numbers...
let a = 1;
while (a <= 20) {
    if (a % 2 === 0) {
        console.log(a);
    }
    a++;
}

// Create a function that takes a positive integer as a parameter and uses a
// while loop to calculate and return the factorial of that number...
const factorial = (n: number): number => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        let b = 2;
        while (b <= n) {
            result *= b;
            b++;
        }
        return result;
    }
};
console.log(factorial(5));

// Write a program to remove all the odd numbers from an array...
const removeOddNumbers = (array: number[]): void => {
    const newArray: number[] = [];
    let i = 0;
    while (i < array.length) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
        i++;
    }
    console.log("newArray", newArray);
};
removeOddNumbers([2, 3, 5, 7, 11, 13, 17, 16, 22]);

// Write a program having an array of numbers. If the number is negative, it should remove the negative number from the array...
const removeNegativeNumbers = (array: number[]): void => {
    const newArray: number[] = [];
    let i = 0;
    while (i < array.length) {
        if (array[i] >= 0) {
            newArray.push(array[i]);
        }
        i++;
    }
    console.log("newArray", newArray);
};
removeNegativeNumbers([1, -1, 2, -2, 3, -3, -1988, -678]);

// Create a function that takes an array of numbers as a parameter. 
// Use a while loop to calculate and return the sum of all the numbers in the array...
const sumArray = (array: number[]): number => {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    return sum;
};
const sumArrayResult: number = sumArray([2, 3, 4, 5, 6, 7, 8]);
console.log("sumArrayResult", sumArrayResult);

// Implement a program that takes a list of temperatures in Celsius as input 
// from the user. Convert each temperature to Fahrenheit using the formula 
// F = (C * 9/5) + 32 and store the converted temperatures in an array. 
// Use a while loop to perform the conversion for each temperature...
const celsiusToFahrenheit = (arrayTemp: number[]): void => {
    const newArray: number[] = [];
    let i = 0;
    while (i < arrayTemp.length) {
        const temp: number = (9 / 5 * arrayTemp[i]) + 32;
        newArray.push(temp);
        i++;
    }
    console.log("newArrayOfFahrenheit", newArray);
};
celsiusToFahrenheit([100, 200, 300, 400]);