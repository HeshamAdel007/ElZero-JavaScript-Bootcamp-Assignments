// Task 1

let string = "Elzero";

console.log(string[0].toLowerCase()); // e

console.log(string.charAt(0).toLowerCase()); // e

console.log(string.charAt(string.indexOf("e")).toLowerCase()); // e

console.log(string.charAt(string.lastIndexOf("e")).toLowerCase()); // e

console.log(string.slice(3, 4).toLowerCase()); // e

console.log(string.slice(-3, -2).repeat(3).toLowerCase()); // eee




// Task 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().includes(letterZ)); // True

console.log(word.toLowerCase().startsWith(letterE)); // True

console.log(word.toUpperCase().endsWith(letterO)); // True

