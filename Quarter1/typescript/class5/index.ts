// Functions

// Function with no return type
function add(a: number, b: number): void {
    console.log(a + b);
}
add(5, 10);

// Function with return type
function multiply(a: number, b: number): number {
    return a * b;
}
const result = multiply(5, 10);

// Function with optional parameter
function optional(a: number, b?: number): void {
    console.log(a + (b ?? 0));
}
optional(5);

// Function with default parameter
function addWithDefault(a: number, b: number = 10): void {
    console.log(a + b);
}
addWithDefault(5);

// Function with rest parameter
function addWithRest(a: number, ...b: number[]): void {
    const sum = b.reduce((acc, value) => acc + value, a);
    console.log(sum);
}
addWithRest(5, 10, 15, 20);

// Function with function type
function addWithCallback(a: number, b: number, callback: (result: number) => void): void {
    callback(a + b);
}
addWithCallback(5, 10, (result) => console.log(result));

// Arrow function
const addArrow = (a: number, b: number): number => a + b;
console.log(addArrow(5, 10));

// Callback function
function executeCallback(callback: () => void): void {
    callback();
}
executeCallback(() => console.log("Callback executed"));
