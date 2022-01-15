// Task 2
document.write("<h2>Elzero</h2>");
document.querySelector("h2").style.color = "blue";
document.querySelector("h2").style.fontSize = "80px";
document.querySelector("h2").style.textAlign = "center";
document.querySelector("h2").style.fontWeight = "bold";
document.querySelector("h2").style.fontFamily = "Arial";


// Task3
console.log("%cElzero %cWeb %cSchool",
    "color: red; font-size: 40px",
    "color: green; font-size: 40px ; font-weight: bold",
    "background-color: blue; font-size: 40px");


// Task 4
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd("")
console.groupEnd("")
console.groupEnd("")
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd("")


// Task 5

console.table(["Elzero", "Web", "School"]);


// Task 6

alert("stop the code");
console.log("Iam In Console");
document.write("Iam In Page");

