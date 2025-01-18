console.log('Hello, world!');
// Operators


// Arithmetic operators
// +, -, *, /, %, ++, --


let a = 10;
let b = 20;
console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(a % b); // 10
console.log(a++); // 10
console.log(a); // 11
console.log(b--); // 20
console.log(b); // 19

const c = 'Hello, ';
const d = 'world!';
console.log(c + d); // Hello, world!

const e = 10;
const f = '20';
console.log(e + f); // 1020

const g = 10;
const h = '20';
console.log(g + Number(h)); // 30

const i = 10;
const j = '20';
console.log(i + parseInt(j)); // 30

const k = 10;
const l = '20.11';
console.log(k + parseFloat(l)); // 30.11

const m = 10;
const n = '20.11';
console.log(m + +n); // 30.11


// Assignment operators
// =, +=, -=, *=, /=, %=


let o = 10;
o += 20;
console.log(o); // 30

let p = 10;
p -= 20;
console.log(p); // -10

let q = 10;
q *= 20;
console.log(q); // 200

let r = 10;
r /= 20;
console.log(r); // 0.5

let s = 10;
s %= 20;
console.log(s); // 10


// Comparison operators
// ==, !=, >, <, >=, <=

let t = 10;
let u = 20;
console.log(t == u); // false
console.log(t != u); // true
console.log(t > u); // false
console.log(t < u); // true
console.log(t >= u); // false
console.log(t <= u); // true

let v = 10;
let w = '10';
console.log(v == w); // true
console.log(v === w); // false

let x = 10;
let y = '10';
console.log(x != y); // false
console.log(x !== y); // true
    

// Logical operators
// &&, ||, !

let z = 10;
let aa = 20;
let ab = 30;
console.log(z < aa && z < ab); // true
console.log(z < aa || z < ab); // true
console.log(!(z < aa)); // false

let ac = 10;
let ad = 20;
let ae = 30;
console.log(ac < ad && ac < ae); // true
console.log(ac < ad || ac < ae); // true
console.log(!(ac < ad)); // false
 

// Bitwise operators
// &, |, ^, ~, <<, >>


let af = 10;    // Binary: 1010
let ag = 20;    // Binary: 10100
console.log(af & ag); // 0
console.log(af | ag); // 30
console.log(af ^ ag); // 30
console.log(~af); // -11
console.log(af << 1); // 20
console.log(af >> 1); // 5


// Type operators
// instanceof, typeof

let ah = 10;
console.log(typeof ah); // number

let ai = 'Hello, world!';
console.log(typeof ai); // string

let aj = true;
console.log(typeof aj); // boolean

let ak = [10, 20, 30];
console.log(typeof ak); // object

let al = { name: 'John', age: 30 };
console.log(typeof al); // object

let am = null;
console.log(typeof am); // object

let an;
console.log(typeof an); // undefined

let ao = function() {};
console.log(typeof ao); // function

let ap = new Date();
console.log(ap instanceof Date); // true

let aq = new Date();
console.log(aq instanceof Object); // true

let ar = new Date();
console.log(aq instanceof Array); // false


// String operators
// +, +=, ``

let as = 'Hello, ';
let at = 'world!';
console.log(as + at); // Hello, world!

let au = 'Hello, ';
let av = 'world!';
console.log(au += av); // Hello, world!

let aw = 'Hello, ';
let ax = 'world!';
console.log(`${aw}${ax}`); // Hello, world!


// Conditional (ternary) operator
// ?:

let ay = 10;
let az = 20;
let ba = ay > az ? 'Yes' : 'No';
console.log(ba); // No


// Comma operator
// ,

let bb = 10, bc = 20, bd = 30;
console.log(bb); // 10
console.log(bc); // 20
console.log(bd); // 30


// Unary operators
// delete, void

let be: { name?: string; age: number } = { name: 'John', age: 30 };
console.log(be.name); // John   
delete be.name;
console.log(be.name); // undefined

let bg = 10;
console.log(void bg); // undefined


// Relational operators
// in

let bh = { name: 'John', age: 30 };
console.log('name' in bh); // true


// Equality operators
// ==, ===, !=, !==

let bi = 10;
let bj = '10';
console.log(bi == bj); // true
console.log(bi === bj); // false
console.log(bi != bj); // false
console.log(bi !== bj); // true


// Bitwise shift operators
// <<, >>, >>>

let bk = 10;    // Binary: 1010
console.log(bk << 1); // 20
console.log(bk >> 1); // 5
console.log
(bk >>> 1); // 5


// Spread operator  
// ...


let bl = [10, 20, 30];
let bm = [...bl];
console.log(bm); // [10, 20, 30]

let bn = [10, 20, 30];
let bo = [40, 50, 60];
let bp = [...bn, ...bo];
console.log(bp); // [10, 20, 30, 40, 50, 60]


// Destructuring operator
// { }

let bq = { name1: 'John', age: 30 };
let { name1, age } = bq;
console.log(name1); // John
console.log(age); // 30

let br = { name: 'John', age: 30 };
let { name: bn1, age: bo1 } = br;
console.log(bn); // John
console.log(bo); // 30

