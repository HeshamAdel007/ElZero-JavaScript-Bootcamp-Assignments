// Task 1
function sayHello(theName, theGender) {
  return document.write(`Hello${
    theGender === "Male" ? " Mr" : theGender === "Female" ? " Miss" : ""
  } ${theName} <br/>`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

document.write("<hr/>")


// Task 2
function calculate(firstNum, secondNum, operation) {
  if (firstNum === undefined || secondNum === undefined)
    document.write(`Second Number Not Found <br/>`);
  else if (operation === "multiply") document.write(firstNum * secondNum + "<br/>");
  else if (operation === "subtract") document.write(firstNum - secondNum + "<br/>");
  else document.write(firstNum + secondNum + "<br/>");
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

document.write("<hr/>")


// Task 3
function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    return document.write('Age Out Of Range <br/>');
  }
  let months = theAge * 12,
      weeks  = months * 4,
      days   = weeks * 7,
      hours  = days * 24,
      minutes = hours * 60,
      seconds = minutes * 60;
  return document.write(`Months\n${months} <br/> Weeks\n${weeks} <br/>  Hours\n${hours} <br/> Minutes\n${minutes} <br/> Seconds\n${seconds}`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

document.write("<hr/>")


// Task 4
function checkStatus(a, b, c) {
  let str, num, bool;
  typeof a === "string"
    ? (str = a)
    : typeof b === "string"
    ? (str = b)
    : (str = c);
  typeof a === "number"
    ? (num = a)
    : typeof b === "number"
    ? (num = b)
    : (num = c);
  typeof a === "boolean"
    ? (bool = a)
    : typeof b === "boolean"
    ? (bool = b)
    : (bool = c);
  return document.write(`Hello ${str}, Your Age Is ${num}, You ${
    bool ? "Are" : "Are Not"
  } Available For Hire <br/>`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

document.write("<hr/>")


// Task 5
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);


document.write("<hr/>")


// Task 6
function multiply(...num) {
  let result = 1;
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === "string") continue;
    result *= Math.trunc(num[i]);
  }
  document.write(`${result} <br/>`);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

document.write("<hr/>")


// Task 7
document.write('<h2><a href="https://elzero.org/javascript-bootcamp-assignments-lesson-from-064-to-070/" target="_blank"><b>Challenge Link Lisson 64 TO 70</b></a></h2>')



function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let fName = zName.slice(0, zName.indexOf(" "));
    let lName = zName.slice(zName.indexOf(" "), zName.length);
    return `${fName} ${lName[1].toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    let countryAbb = zCountry.slice(0, 2).toUpperCase();
    return `You Live In ${countryAbb}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

document.write(getDetails("Osama Mohamed", "38 Is My Age", "Egypt") + "</br>");
// Hello Osama M., Your Age Is 38, You Live In EG

document.write(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY



document.write("<hr/>")


// Task 8
let itsMe = () => `Iam A Normal Function`;

document.write(`${itsMe()} </br>`); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

document.write(urlCreate("https", "elzero", "org")); // https://www.elzero.org



document.write("<hr/>")


// Task 9
let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

document.write(checker("Osama")("Available")(4000) + "</br>"); // My Salary Is 4000
document.write(checker("Ahmed")("Not Available")()); // Iam Not Avaialble



document.write("<hr/>")


// Task 10
function specialMix(...data) {
  let sum = 0,
    allString = true;
  for (item of data) {
    if (!isNaN(parseInt(item))) {
      sum += parseInt(item);
      allString = false;
    }
  }
  return document.write(`${allString ? "All Strings" : sum} </br>`);
}

specialMix(10, 20, 30); // 60
specialMix("10Test", "Testing", "20Cool"); // 30
specialMix("Testing", "10Testing", "40Cool"); // 50
specialMix("Test", "Cool", "Test"); // All Is Strings
