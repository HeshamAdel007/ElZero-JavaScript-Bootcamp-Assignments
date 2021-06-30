// Task 1

let number = 10; // Add any Number You Wont 

if (number < 10) {

  document.write(`00${number}`);

} else if (number >= 10 && number < 100) {

  document.write(`0${number}`);

} else if (number >= 100) {

  document.write(number.toString());
}


document.write("<br/>")
// Task 2

let numb1 = 9;
let str = "9";
let numb2 = "20";

if (numb1 == str) {

  document.write("{numb1} Is The Same Value As {str}");

} else if (numb1 == str && typeof numb1 !== typeof str) {

  document.write("{numb1} Is The Same Value As {str} But Not The Same Type");

} else if (numb1 !== numb2) {

  document.write("{numb1} Is Not The Same Value Or The Same Type As {numb2}");

};


document.write("<br/>")
// Task 3


let number1 = 10;
let number2 = 30;
let number3 = "30";

if (number3 > number1 && typeof number3 !== typeof number1) {

  document.write(
    "{number3} Is Larger Than {number1} And Not The Same Type As {number2}"
  );

} else if (number3 > number1 && number3 == number2) {

  document.write(
    "{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}"
  );

} else if (number3 !== number1 && typeof number3 !== typeof number2) {

  document.write(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );

}


document.write("<br/>")
// Task 4

// Edit What You Want Here

var num1 = 10;
var num2 = 10;
var num3 = "10";
var num4 = 20;

++num1;
num2 = num1 - num2;
num3 = +num3;
++num3;
num4 += num1 + num3;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  document.write("True <br/>");
} else {
  document.write("False <br/>");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  document.write("True <br/>");
} else {
  document.write("False <br/>");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  document.write("True <br/>");
} else {
  document.write("False <br/>");
}

// Condition 4

if (num1 + num2 < num4) {
  document.write("True <br/>");
} else {
  document.write("False <br/>");
}

// Condition 5

if (num1 + num3 < num4) {
  document.write("True <br/>");
} else {
  document.write("False <br/>");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  document.write("True <br/>");
} else {
  document.write("False <br/>");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  document.write("True <br/>");
} else {
  document.write("False <br/>");
}
