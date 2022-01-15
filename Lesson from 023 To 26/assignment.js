// Task 1

document.write(100000, "<br>"); // 100000

document.write(1_000_00, "<br>"); // 100000

document.write(10 ** 5, "<br>"); // 100000

document.write(100000.0, "<br>"); // 100000

document.write(1_000_00.0, "<br>"); // 100000

document.write(5e4 + 5e4, "<br>"); // 100000

document.write(Number("100000"), "<br>"); // 100000

document.write(+"100000", "<br>"); // 100000

document.write(parseInt("100000"), "<br>"); // 100000

document.write(Math.pow(10, 5), "<br>"); // 100000

document.write(Math.floor(100000.4), "<br>"); // 100000

document.write(Math.ceil(100000.0), "<br>"); // 100000

document.write(Math.round(100000.2)); // 100000


document.write("<hr/>")


// Task 2

document.write(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991



document.write("<hr/>")


// Task 3
document.write(Number.MAX_SAFE_INTEGER / -Number.MIN_SAFE_INTEGER + 15); // 16


document.write("<hr/>")

// Task 4

let myVar = "100.56789 Views";

document.write(Math.trunc(parseFloat(myVar)), "<br>"); // 100
document.write(Number(parseFloat(myVar).toFixed(2))); // 100.57


document.write("<hr/>")


// Task 5

let num = 10;

document.write(Number.isInteger(num) + true); // 2


document.write("<hr/>")


// Task 6

let flt = 10.4;

document.write(Math.floor(flt), "<br>"); // 10

document.write(Math.trunc(flt), "<br>"); // 10

document.write(Math.round(flt), "<br>"); // 10

document.write(Number.parseInt(flt), "<br>"); // 10

document.write(Math.ceil(--flt)); // 10

document.write("<hr/>")

// Task 7

document.write(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
