// Task 1
let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers].pop());

document.write("<hr/>")


// Task 2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
document.write([...new Set(myFriends)].sort());
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


document.write("<hr/>")


// Task 3
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt"
};

let map = new Map(Object.entries(myInfo));
console.log(map);
console.log(map.size);
console.log(map.has("role"));
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true


document.write("<hr/>")


// Task 4
let theNumber = 100020003000;
document.write(+[...new Set(theNumber.toString())].sort().join(""));
// Needed Output
// 123


document.write("<hr/>")


// Task 5
let theName = "Elzero";
let one = [...theName];
let two = theName.split("");
let three = [...new Set(theName)];
let four = Array.from(theName);
let five = Object.values(theName);
document.write(`${one} <br>`);
document.write(`${two} <br>`);
document.write(`${three} <br>`);
document.write(`${four} <br>`);
document.write(`${five}`);
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

document.write("<hr/>")

// Task 6
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

for (let i = 0; i < chars.length; i++) {
  if (typeof chars[i] === "number") chars.unshift(...chars.splice(i, 1));
}

let firstLetterPosition = chars.findIndex((e) => typeof e === "string");

chars.copyWithin(0, firstLetterPosition, firstLetterPosition * 2);

document.write(chars);

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']


document.write("<hr/>")


// Task 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

document.write(Array.of(...numsOne, ...numsTwo) + "<br/>");
numsOne.push(...numsTwo);
document.write([...numsOne, ...numsTwo] + "<br/>");
document.write(Array.from([numsOne, numsTwo]).flat() + "<br/>");
document.write(numsOne.concat(numsTwo) + "<br/>");
document.write(numsOne);
// Needed Output
// [1, 2, 3, 4, 5, 6]

document.write("<hr/>")

// Task 7
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

document.write([...n1, ...n2].length * Math.max(...n2)); // 210

