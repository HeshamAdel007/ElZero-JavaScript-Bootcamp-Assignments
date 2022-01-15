// Task 1

let string = "Elzero";

document.write(string[0].toLowerCase(), "<br>"); // e

document.write(string.charAt(0).toLowerCase(), "<br>"); // e

document.write(string.charAt(string.indexOf("e")).toLowerCase(), "<br>"); // e

document.write(string.charAt(string.lastIndexOf("e")).toLowerCase(), "<br>"); // e

document.write(string.slice(3, 4).toLowerCase(), "<br>"); // e

document.write(string.slice(-3, -2).repeat(3).toLowerCase()); // eee


document.write("<hr/>")


// Task 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

document.write(word.toLowerCase().includes(letterZ), "<br>"); // True

document.write(word.toLowerCase().startsWith(letterE), "<br>"); // True

document.write(word.toUpperCase().endsWith(letterO)); // True

