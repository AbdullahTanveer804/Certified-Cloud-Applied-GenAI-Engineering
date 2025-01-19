// Data Types

// Boolean
let isDone: boolean = false;
console.log(isDone);

// Number
let decimal: number = 6;
console.log(decimal);

// String
let color: string = 'blue';
console.log(color);

// Array
let list: number[] = [1, 2, 3];
console.log(list);

// Tuple
let x: [string, number];
x = ['hello', 10];
console.log(x);

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

// Any
let notSure: any = 4;
console.log(notSure);
notSure = 'maybe a string instead';
console.log(notSure);
notSure = false;
console.log(notSure);

// Void
function warnUser(): void {
  console.log('This is my warning message');
}
warnUser();

// Null and Undefined
let u: undefined = undefined;
console.log(u);
let n: null = null;
console.log(n);

// Never
function error(message: string): never {
  throw new Error(message);
}
// error('Something went wrong!');


// IF Else Statements

let isTrue: boolean = true;
if (isTrue) {
  console.log('True');
} else {
  console.log('False');
}   // True

let num: number = 5;
if (num > 0) {
  console.log('Positive');
} else if (num < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
}   // Positive 

