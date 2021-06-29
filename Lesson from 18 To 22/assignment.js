
// Task 1
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0
// or
console.log(+(10 > 20 > 15 > 3 > 190 > 10 > 400)); // 0



// Task 2

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num ** num / num - num); // 6

// Soultion Three
console.log(num * num - num); // 6

// Soultion Four
console.log(num *(num / num + num / num)); // 6

// Solution Five
console.log(num * (true + true)); // 6

// Solution Six
console.log(num * (num - true)); // 6

// Solution Seven
console.log((num += num)); // 6





// Task 3
let numb = "10";

// Solution One
console.log(+numb + +numb); // 20

// Solution Two
console.log(numb-- + ++numb); // 20

// Soultion Three
console.log((numb / numb + numb / numb) * numb); // 20

// Solution Four
console.log(Number(numb) + Number(numb)); // 20