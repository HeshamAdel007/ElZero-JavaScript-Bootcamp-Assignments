// Task 1
let el = document.querySelector("div");
  el = document.querySelector("#elzero");
  el = document.querySelector(".element");
  el = document.querySelector("[name='js']");
  el = document.querySelectorAll("div")[0];
  el = document.querySelectorAll("#elzero")[0];
  el = document.querySelectorAll(".element")[0];
  el = document.querySelectorAll("[name='js']")[0];
  el = document.getElementById("elzero");
  el = document.getElementsByClassName("element")[0];
  el = document.getElementsByTagName("div")[0];
  el = document.getElementsByName("js")[0];
  el = document.body.childNodes[1];
  el = document.body.children[1];
  el = document.body.firstElementChild;
  el = document.body.lastElementChild.previousElementSibling;




// Task 2
let allImages = document.querySelectorAll("div img");
    allImages.forEach((img) => { 
      img.setAttribute("src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    img.alt = "Elzero Logo";
});




// Task 3
const inputFeild = document.querySelector("form input");
const result = document.querySelector("form .result");

inputFeild.addEventListener("input", () => {
  if (inputFeild.value >= 0) {
    let eygptCurrency = inputFeild.value * 16;
    result.textContent = `{${inputFeild.value || 0}} $Dollar = {${
      inputFeild.value === "" ? 0 : eygptCurrency.toFixed(2)
    }} EgyptionPound`;
  }
});


// Task 4
let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");
let divTwoTitle  = divTwo.title;
let divTwoText   = divTwo.textContent;
    divTwo.title = divOne.title;
    divOne.title = divTwoTitle;
    divTwo.textContent = `${divOne.textContent} 2`;
    divOne.textContent = divTwoText;

// Task 5
let photo = document.querySelectorAll("section img");

photo.forEach((img) => {
  if (img.hasAttribute("alt")) {
    img.alt = "Old";
  } else {
    img.alt = "Elzero New";
  }
});


