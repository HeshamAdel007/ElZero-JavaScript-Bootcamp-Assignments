// Task 1
let start1 = 10;
let end = 100;
let exclude = 40;

for (let i = start1; i <= end; i += start1) {
  if (i === exclude) continue;
  document.write(i + "<br/>");
}

/* Output
10
20
30
50
60
70
80
90
100
*/

document.write("<hr/>")


// Task 2
let start2 = 10;
let end1 = 0;
let stop = 3;
let i = start2
for(;;){
  
  if(i < start2){
    document.write(`0${i}` + "<br/>")
  }else{
    document.write(i + "<br/>")
  }
  i--;
  if(i < stop){
    break;
  }
};

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

document.write("<hr/>")


// Task 3
let start3 = 1;
let end2 = 6;
let breaker = 2;

for(let i = start3; i <= end2; i++) {
  document.write(i + "<br/>")
  for(let j = breaker; j < end2; j += 2){
    document.write(`-- ${j}` + "<br/>")
  }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

document.write("<hr/>")

// Task 4
let index = 10;
let jump = 2;
let end3 = 0;


for (;;) {
  document.write(index + "<br/>");
  index -= jump;
  if(index === jump) break;

};
// Output
// 10
// 8
// 6
// 4

document.write("<hr/>")


// Task 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let arr = [];

for (let i = --letter.length; i < friends.length; i++) {

  if (!friends[i].toLowerCase().startsWith(letter)) arr.push(friends[i]);

  if (arr.length !== friends.length - ++letter.length) continue;

  for (i = --letter.length; i < arr.length; ++i) {
    document.write(`${i + letter.length} => ${arr[i]}` + "<br/>");
  }
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"


document.write("<hr/>")


// Task 6
let start4 = 0;
let swappedName = "elZerO";

let str = "";

for (i = start4; i < swappedName.length; i++) {
  swappedName[i] === swappedName[i].toLowerCase()
    ? (str += swappedName[i].toUpperCase())
    : (str += swappedName[i].toLowerCase());
  if (str.length === swappedName.length) document.write(str);
}

// Output "ELzERo"

document.write("<hr/>")


// Task 7
let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];


for (let i = start5; i < mix.length; i++) {
  if (!(mix[i] === mix[start5] || typeof mix[i] !== "number")) {
    document.write(mix[i] + "<br/>");
  }
}
// Output
// 2
// 3
// 4


document.write("<hr/>")


// Task 8
document.write('<h2><a href="https://elzero.org/javascript-bootcamp-assignments-lesson-from-054-to-056/" target="_blank"><b>Challenge Link Lisson 054 TO 056</b></a></h2>')


let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index0 = 0;
let counter = 0;

let arry = [];

while (index0 < friends2.length) {
  if (friends2[index0][counter] !== "A" && typeof friends2[index0] === "string")
    arry.push(friends2[index0]);
  index0++;
}
while (counter < arry.length) {
  document.write(`${counter + index0.toString().length} => ${arry[counter]}` + "<br/>");
  counter++;
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"