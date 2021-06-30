// Task 1

console.log(100000); // 100000
console.log(1_000_00); // 100000
console.log(10 ** 5); // 100000
console.log(100000.0); // 100000
console.log(1_000_00.0); // 100000
console.log(5e4 + 5e4); // 100000
console.log(Number("100000")); // 100000
console.log(+"100000"); // 100000
console.log(parseInt("100000")); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.floor(100000.4)); // 100000
console.log(Math.ceil(100000.0)); // 100000
console.log(Math.round(100000.2)); // 100000




// Task 2

console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991






// Task 3
console.log(Number.MAX_SAFE_INTEGER / -Number.MIN_SAFE_INTEGER + 15); // 16

// Task 4

let myVar = "100.56789 Views";

console.log(Math.trunc(parseFloat(myVar))); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// Task 5

let num = 10;

console.log(Number.isInteger(num) + true); // 2


// Task 6

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(Math.ceil(--flt)); // 10


// Task 7

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
