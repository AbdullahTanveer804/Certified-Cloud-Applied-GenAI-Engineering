// Array and Its Methods

const main = () => {
    // concat() - Joins two or more arrays, and returns a copy of the joined arrays
    const fruits = ["Banana", "Orange", "Apple"];
    const vegetables = ["Tomato", "Potato", "Onion"];
    const fruitsAndVegetables = fruits.concat(vegetables);
    console.log(fruitsAndVegetables);

    // copyWithin() - Copies array elements within the array, to and from specified positions
    const fruitsCopy = fruitsAndVegetables.copyWithin(0, 3);
    console.log(fruitsCopy);

    // entries() - Returns a key/value pair Array Iteration Object
    const fruitsIterator = fruitsAndVegetables.entries();
    for (const [index, value] of fruitsIterator) {
        console.log(index, value);
    }

    // every() - Checks if every element in an array passes a test
    const isAllFruits = fruitsAndVegetables.every(item => item.includes("Banana"));
    console.log(isAllFruits);

    // fill() - Fill the elements in an array with a static value
    const numbers = [1, 2, 3, 4, 5];
    const filledNumbers = numbers.fill(0, 2, 4);
    console.log(filledNumbers);

    // filter() - Creates a new array with every element in an array that passes a test
    const filteredNumbers = numbers.filter(item => item > 2);
    console.log(filteredNumbers);

    // find() - Returns the value of the first element in an array that passes a test
    const firstNumber = numbers.find(item => item > 2);
    console.log(firstNumber);

    // findIndex() - Returns the index of the first element in an array that passes a test
    const firstIndex = numbers.findIndex(item => item > 2);
    console.log(firstIndex);

    // forEach() - Calls a function for each array element
    numbers.forEach(item => console.log(item));

    // from() - Creates an array from an object
    const arrayFrom = Array.from("Hello");
    console.log(arrayFrom);

    // includes() - Check if an array contains the specified element
    const isNumberPresent = numbers.includes(3);
    console.log(isNumberPresent);

    // indexOf() - Search the array for an element and returns its position
    const indexOfNumber = numbers.indexOf(3);
    console.log(indexOfNumber);

    // isArray() - Checks whether an object is an array
    const isArray = Array.isArray(numbers);
    console.log(isArray);

    // join() - Joins all elements of an array into a string
    const joinedString = numbers.join("-");
    console.log(joinedString);

    // keys() - Returns an Array Iteration Object, containing the keys of the original array
    const keys = numbers.keys();
    for (const key of keys) {
        console.log(key);
    }

    // lastIndexOf() - Search the array for an element, starting at the end, and returns its position
    const lastIndexOfNumber = numbers.lastIndexOf(3);
    console.log(lastIndexOfNumber);

    // map() - Creates a new array with the result of calling a function for each array element
    const mappedNumbers = numbers.map(item => item * 2);
    console.log(mappedNumbers);

    // pop() - Removes the last element of an array, and returns that element
    const poppedNumber = numbers.pop();
    console.log(poppedNumber);

    // push() - Adds new elements to the end of an array, and returns the new length
    const pushedLength = numbers.push(6);
    console.log(pushedLength);

    // reduce() - Reduce the values of an array to a single value (going left-to-right)
    const reducedValue = numbers.reduce((acc, value) => acc + value, 0);
    console.log(reducedValue);

    // reduceRight() - Reduce the values of an array to a single value (going right-to-left)
    const reducedRightValue = numbers.reduceRight((acc, value) => acc + value, 0);
    console.log(reducedRightValue);

    // reverse() - Reverses the elements in an array
    const reversedNumbers = numbers.reverse();
    console.log(reversedNumbers);

    // shift() - Removes the first element of an array, and returns that element
    const shiftedNumber = numbers.shift();
    console.log(shiftedNumber);

    // slice() - Selects a part of an array, and returns the new array
    const slicedNumbers = numbers.slice(1, 3);
    console.log(slicedNumbers);

    // some() - Checks if any of the elements in an array pass a test
    const isSomeNumber = numbers.some(item => item > 2);
    console.log(isSomeNumber);

    // sort() - Sorts the elements of an array
    const sortedNumbers = numbers.sort();
    console.log(sortedNumbers);

    // splice() - Adds/Removes elements from an array
    const splicedNumbers = numbers.splice(1, 2, 7, 8);
    console.log(splicedNumbers);

    // toString() - Converts an array to a string, and returns the result
    const stringNumbers = numbers.toString();
    console.log(stringNumbers);

    // unshift() - Adds new elements to the beginning of an array, and returns the new length
    const unshiftedLength = numbers.unshift(0);
    console.log(unshiftedLength);

    // valueOf() - Returns the primitive value of an array
    const value = numbers.valueOf();
    console.log(value);

    // flat() - Flattens a nested array
    const nestedArray = [1, 2, [3, 4, [5, 6]]];
    const flatArray = nestedArray.flat(2);
    console.log(flatArray);

    // flatMap() - Flattens and maps elements of an array
    const flatMappedArray = numbers.flatMap(item => [item * 2]);
    console.log(flatMappedArray);
};

main();
