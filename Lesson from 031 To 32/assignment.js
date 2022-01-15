// Task 1

document.write(100 == "100", "<br>"); // true

document.write(100 !== 1000, "<br>"); // true

document.write(110 > 100 > 10 < 20, "<br>"); // true

document.write(-10 == "-10", "<br>"); // true

document.write(typeof -50 === typeof +"-40", "<br>"); // true

document.write(typeof 10 == typeof -"-40", "<br>"); // true

document.write(typeof "10" !== typeof 10, "<br>"); // true

document.write(typeof 20 != false, "<br>"); // true

document.write("<hr/>")

// Task 2

let num1 = 10;
let num2 = 20;

document.write(num1 < num2, "<br>"); // true

document.write(num1 <= num2, "<br>"); // true

document.write(num2 > num1, "<br>"); // true

document.write(num2 >= num1, "<br>"); // true

document.write(num1 !== num2, "<br>"); // true

document.write(num1 != num2, "<br>"); // true

document.write("<hr/>")

// Task 3

let a = 20;
let b = 30;
let c = 10;

document.write((a < b && a > c) || a > b, "<br>"); // true

document.write(a < b || a <= c, "<br>"); // true

document.write(!(a > b) && !(a >= b) && !(a < c) && !(a <= c), "<br>"); // true

