
// Task 1
document.write(10 * 20 + (15 % 3) + 190 + 10 - 400, "<br>"); // 0
// or
document.write(+(10 > 20 > 15 > 3 > 190 > 10 > 400)); // 0


document.write("<hr/>")

// Task 2

let num = 3;

// Solution One
document.write(num + num, "<br>"); // 6

// Solution Two
document.write(num ** num / num - num, "<br>"); // 6

// Soultion Three
document.write(num * num - num, "<br>"); // 6

// Soultion Four
document.write(num *(num / num + num / num), "<br>"); // 6

// Solution Five
document.write(num * (true + true), "<br>"); // 6

// Solution Six
document.write(num * (num - true), "<br>"); // 6

// Solution Seven
document.write((num += num)); // 6


document.write("<hr/>")


// Task 3
let numb = "10";

// Solution One
document.write(+numb + +numb, "<br>"); // 20

// Solution Two
document.write(numb-- + ++numb, "<br>"); // 20

// Soultion Three
document.write((numb / numb + numb / numb) * numb, "<br>"); // 20

// Solution Four
document.write(Number(numb) + Number(numb)); // 20