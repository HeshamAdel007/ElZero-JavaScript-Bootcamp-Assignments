// Task 1
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`;
  }
};

document.write(`${member.name} <br/>`); // Elzero
document.write(`${member.age} <br/>`); // 38
document.write(`${member.country} <br/>`); // Egypt
document.write(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt


document.write("<hr/>")


// Task 2
// Method One
let objMethodOne = { property: "Method One" };

document.write(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = new Object({ property: "Method Two" });

document.write(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create(objMethodOne);
objMethodThree.property = "Method Three";

document.write(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.assign({}, { property: "Method Four" });

document.write(objMethodFour.property); // "Method Four"


document.write("<hr/>")


// Task 3
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4
};

let twoNums = {
  e: 5,
  f: 6
};

let finalObject = Object.assign({}, { a }, threeNums, twoNums);

console.log(finalObject);
document.write(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/


document.write("<hr/>")


// Task 4
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};


// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  document.write(`The Game Name Is ${Object.keys(myFavGames)[i]} </br>`);
  document.write(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher} </br>`
  );
  document.write(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price} </br>`);

  if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    document.write("- Game Has Releases");
    document.write(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one} </br>`
    );
    document.write(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two} </br>`
    );
    document.write(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three} </br>`
    );
  }
  document.write("#".repeat(20) + "<br/>");
}

// Ouput
// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"

