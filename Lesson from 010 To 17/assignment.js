// Variable And Concatenation Challenge
let theTitle = "Elzero",
theDescription = "Elzero Web School",
theDate = "25/10";
console.log(theTitle, theDescription, theDate);
let div =`<div>
<h3>Hello ${theTitle}</h3>
<p>${theDescription}</p>
<span>${theDate}</span>
</div>`;
console.log(div);
document.write(div.repeat(4));


document.write("<hr/>")

// Task 1
let NumberOne = 10;
let NumberTwo = 20;

document.write(NumberOne + "" + NumberTwo, "<br>"); // Normal Concatenate => 1020
document.write(typeof "NumberOne+NumberTwo", "<br>"); // Normal Concatenate => String
document.write(`${NumberOne}${NumberTwo}`, "<br>"); // Template Literals Way => 1020
document.write(typeof `${NumberOne}${NumberTwo}`, "<br>"); // Template Literals Way => String

/*
    Normal Concatenate
    20
    10
*/
document.write(NumberTwo + "\n" + NumberOne, "<br>");

/*
    Template Literals Way
    20
    10
*/
document.write(`${NumberTwo}\n${NumberOne}`);



document.write("<hr/>")

// Task 2

document.write(elzero.innerHTML, "<br>"); // object
document.write(typeof elzero); // object




document.write("<hr/>")

// Task 3

document.write(
    '`I\'m In\n\\\\\nlove\\\\""" \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``'
);



document.write("<hr/>")

// Task 4

let a = 10;
let b = 20;
let year = `_${b}${b + a / a}`;
document.write(`_${b + a / a}${year.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_
