// Task 2
const current = document.querySelector("[title = 'Current']");
const add = document.querySelector(".classes-to-add");
const remove = document.querySelector(".classes-to-remove");
const cls = document.querySelector(".classes-list div");

function addOrRemove() {
  document.querySelectorAll("span").forEach(el => el.remove());
  for (let i = 0; i < this.value.trim().split(" ").length; i++) {
    if (add.value)
      current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);

    if (remove.value)
      current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
  }
  this.value = "";
  if (current.classList.length) {
    [...current.classList].sort().forEach(el => {
      let clSpan = document.createElement("span");
      clSpan.textContent = el;
      cls.append(clSpan);
    });
  } else cls.textContent = "No Classes To Show";
}

add.onblur = addOrRemove;
remove.onblur = addOrRemove;



// Task 3
const myP = document.querySelector("p");
const myDiv = document.querySelector(".our-element");
const myFirstDiv = myDiv.cloneNode();
const myLastDiv = myDiv.cloneNode();

myP.remove();

function addAttr(element, pos) {
  element.className = pos.toLowerCase();
  element.title = `${pos} Element`;
  element.setAttribute("data-value", pos);
  element.textContent = pos;
}
addAttr(myFirstDiv, "Start");
addAttr(myLastDiv, "End");

myDiv.before(myFirstDiv);
myDiv.after(myLastDiv);




// Task 4
console.log(document.querySelector("span").nextSibling.nextSibling.nextSibling.textContent.trim());


// Task 5
[...document.body.children].forEach(
  el => (el.onclick = _ => console.log(`This is ${el.localName}`))
);






/////////////////////////////// Task 6 ///////////////////////////////////////////


const create = el => document.createElement(`${el}`);

// Elements
const header = create("header");
const logo = create("div");
const menu = create("ul");
const content = create("div");
const footer = create("footer");

// Classes
header.className = "website-head";
logo.className = "logo";
menu.className = "menu";
content.className = "product";
footer.className = "footer";

// Looping on ul & content elements
for (let i = 1; i <= 9; i++) {
  if (i <= 4) {
    // Looping on ul elements
    let menuLi = create("li");
    menuLi.className = `menu-list-${i}`;
    menu.append(menuLi);
    menuLi.style.cssText = "cursor: pointer;";
  }

  // Looping on content elements
  let productBox = create("div");
  let productNum = create("span");
  productBox.className = `product`;
  productNum.textContent = `${i}`;
  productBox.textContent = "Product";
  productBox.prepend(productNum);
  content.append(productBox);

  productBox.style.cssText =
    "box-sizing: border-box; padding: 20px; background-color: #fff; border: 1px solid #ddd; text-align: center; color: #888; border-radius: 6px;";
  productNum.style.cssText =
    "display: block; font-size: 40px; color: #000; margin: 10px;";
}

// Adding elements to the page
header.append(logo);
header.append(menu);
document.body.prepend(footer);
document.body.prepend(content);
document.body.prepend(header);

// Adding text
logo.textContent = "Elzero";
document.getElementsByTagName("li")[0].textContent = "Home";
document.getElementsByTagName("li")[1].textContent = "About";
document.getElementsByTagName("li")[2].textContent = "Service";
document.getElementsByTagName("li")[3].textContent = "Contact";
footer.textContent = "Copyright 2021";

// Styling
document.body.style.cssText =
  "margin: 0px; background-color: #ececec; font-family: Tahoma, Arial;";
header.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: #fff;";
logo.style.cssText = "color: #23a96e; font-weight: bold; font-size: 26px;";
menu.style.cssText =
  "list-style: none; padding: 0px; margin: 0px; display: flex; gap: 10px; font-size: 14px; color: #888";
content.style.cssText =
  "box-sizing: border-box; display: grid; grid-template-columns: repeat(3, 1fr); padding: 20px; justify-content: center; gap: 20px;";
footer.style.cssText =
  "background-color: #23a96e; font-size: 26px; text-align: center; padding: 20px; color: #fff";
