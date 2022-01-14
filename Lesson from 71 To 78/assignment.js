// Task 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

const elzero = mix.map(e => isNaN(e) ? e : "").reduce((a, c) => a + c);

document.write(elzero);// Elzero

document.write("<hr/>")


// Task 2
let myString = "EElllzzzzzzzeroo";

const deleteDuplicate = myString
  .split("")
  .filter((e, i, arr) => arr.indexOf(e) === i)
  .reduce((a, c) => a + c);

document.write(deleteDuplicate); // Elzero

document.write("<hr/>")


// Task 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];

const array = myArray.reduce((a, b) => a.concat(b), []).join("");

document.write(array);// Elzero


document.write("<hr/>")


// Task 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

const revertedNums = numsAndStrings
  .filter((item) => typeof item === "number")
  .map((num) => -num);
document.write(revertedNums + "<br/>");// [-1, -10, 10, 20, -5, -3]

// Another Solution
const reverseNums = numsAndStrings.filter((e) => !isNaN(e)).map((e) => -e);

document.write(reverseNums);


document.write("<hr/>")


// Task 5
let nums = [2, 12, 11, 5, 10, 1, 99];

const answer = nums.reduce((acc, cur) => {
  return cur % 2 !== 0 ? acc + cur : acc * cur;
}, 1);
document.write(answer);// 500

