// Task 1
let range = prompt("Print Numbers From - To");

function printNums(userInput) {
  let arr = userInput.split("-");
  let small = arr.sort((a, b) => a - b)[0].trim();
  let large = arr.sort((a, b) => b - a)[0].trim();
  for (let i = small; i <= large; i++) {
    let current = document.createElement("div");
    current.textContent = i;
    document.body.append(current);
  }
}

if (range != "") {
  printNums(range);
}




// Task 2
window.onload = function () {
  setTimeout(createPopup, 1000);
};

function createPopup() {
  let popup = document.createElement("div");
  popup.id = "popup";
  let heading = document.createElement("h2");
  heading.textContent = "Welcome";
  let content = document.createElement("p");
  content.textContent = "Welcome To Elzero Web School";
  let closeBtn = document.createElement("button");
  closeBtn.id = "close-popup";
  closeBtn.textContent = "x";

  popup.style.cssText =
    "width: 500px; max-width: 100%; background-color: #eee; padding: 20px; text-align: center; position: relative; border: 1px solid #ccc; font-family: Arial; margin: 100px auto";
  closeBtn.style.cssText =
    "position: absolute; background-color: #fc0000; color: white; font-size: 1.5rem; top: 0; right: 0; transform: translate(50%, -50%); border-radius: 50%; border: none; width: 35px; height: 35px; cursor: pointer";

  popup.append(heading, content, closeBtn);
  document.body.append(popup);
}

document.addEventListener("click", function (e) {
  if (!e.target.matches("#close-popup")) return;
  e.target.parentElement.remove();
});




// Task 3
let div = document.querySelector("div");

let counter = setInterval(() => {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") clearInterval(counter);
}, 1000);




