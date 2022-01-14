// Task 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1

myFriends.pop();
document.write(myFriends); // ["Ahmed", "Elham", "Osama"];

document.write("<br/>")

// Method 2
myFriends.length = num;
document.write(myFriends); // ["Ahmed", "Elham", "Osama"];


document.write("<hr/>")

// Task 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();
document.write(friends); // ["Eman", "Osama"]

document.write("<hr/>")

// Task 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrTwo.concat(arrOne).sort().reverse();

document.write(finalArr); // ["Z", "X", "D", "C", "B", "A"]


document.write("<hr/>")

// Task 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

document.write(words.pop()[0].slice(website.length).toUpperCase()); // ZERO


document.write("<hr/>")


// Task 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.indexOf(needle) !== -1){
  document.write("Found <br/>")
};

if(haystack.lastIndexOf(needle) !== -1){
  document.write("Found <br/>")
};

if(haystack.includes(needle) === true){
  document.write("Found")
};


document.write("<hr/>")


// Task 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];


allArrs = allArrs.concat(arr1, arr2).sort().join("").toLowerCase().slice(arr2.length);

document.write(allArrs); // fxy


