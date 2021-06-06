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



// Task 1
let NumberOne = 10;
let NumberTwo = 20;

console.log(NumberOne + "" + NumberTwo); // Normal Concatenate => 1020
console.log(typeof "NumberOne+NumberTwo"); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof `${NumberOne}${NumberTwo}`); // Template Literals Way => String

/*
    Normal Concatenate
    20
    10
*/
console.log(NumberTwo + "\n" + NumberOne);

/*
    Template Literals Way
    20
    10
*/
console.log(`${NumberTwo}\n${NumberOne}`);




// Task 2

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object





// Task 3

console.log(
    '`I\'m In\n\\\\\nlove\\\\""" \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``'
);




// Task 4
let a = 10;
let b = 20;
let year = `_${b}${b + a / a}`;
console.log(`_${b + a / a}${year.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_
