// Task 1
const fontFamily = document.getElementById("font-family");
const color = document.getElementById("color");
const fontSize = document.getElementById("font-size");
const workspace = document.querySelector(".workspace");

if (localStorage.getItem("fontFamily")) {
  document.querySelector(`[value='${localStorage.fontFamily}']`).selected =
    "select";
  workspace.style.fontFamily = localStorage.fontFamily;
}

if (localStorage.getItem("color")) {
  document.querySelector(`[value='${localStorage.color}']`).selected = "select";
  workspace.style.color = localStorage.color;
}

if (localStorage.getItem("fontSize")) {
  document.querySelector(`[value='${localStorage.fontSize}']`).selected =
    "select";
  workspace.style.fontSize = localStorage.fontSize;
}

fontFamily.onchange = function () {
  workspace.style.fontFamily = this.value;
  localStorage.setItem("fontFamily", this.value);
};

color.onchange = function () {
  workspace.style.color = this.value;
  localStorage.setItem("color", this.value);
};

fontSize.onchange = function () {
  workspace.style.fontSize = this.value;
  localStorage.setItem("fontSize", this.value);
};
