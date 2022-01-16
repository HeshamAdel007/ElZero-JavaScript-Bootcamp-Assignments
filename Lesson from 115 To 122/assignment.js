// Task 1
const myNumbers = [1, 2, 3, 4, 5];

const [a0, , , , e0] = myNumbers;

document.write(a0 * e0); // 5

document.write("<hr/>")


// Task 2
const mySkills = [
  'HTML',
  'CSS',
  'JavaScript',
  ['PHP', 'Python', ['Django', 'Laravel']],
];

const [a, b, c, [d, e, [f, g]]] = mySkills;

document.write(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

document.write("<hr/>")


// Task 3
let arr1 = ['Ahmed', 'Sameh', 'Sayed'];
let arr2 = ['Mohamed', 'Gamal', 'Amir'];
let arr3 = ['Haytham', 'Shady', 'Mahmoud'];

const [, h, j, k] = arr3.concat(arr1);

document.write(`My Best Friends: ${h}, ${j}, ${k}`);
// My Best Friends: Shady, Mahmoud, Ahmed

document.write("<hr/>")


// Task 4
const member = {
  age: 30,
  working: false,
  country: 'Egypt',
  hobbies: ['Reading', 'Swimming', 'Programming'],
};

const {
  age: ag,
  working: w,
  country: coun,
  hobbies: [h1, , h3],
} = member;

document.write(`My Age Is ${ag} And I am ${w ? '' : 'Not'} Working <br>`);
// My Age Is 30 And Iam Not Working

document.write(`I Live in ${coun} <br>`);
// I Live in Egypt

document.write(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming


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
const game = {
  title: 'YS',
  developer: 'Falcom',
  releases: {
    'Oath In Felghana': ['USA', 'Japan'],
    'Ark Of Napishtim': {
      US: '20 USD',
      JAP: '10 USD',
    },
    Origin: '30 USD',
  },
};

const { title: t, developer: de, releases } = game;

const [o, aa] = Object.keys(releases);

const [[u, jj], { US: u_price, JAP: j_price }, or] = Object.values(releases);

document.write(`My Favourite Games Style Is ${t} Style <br>`);
// My Favourite Games Style Is YS Style

document.write(`And I Love ${de} Games <br>`);
// And I Love Falcom Games

document.write(`My Best Release Is ${o} It Released in ${u} & ${jj} <br>`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

document.write(`Although I Love ${aa} <br>`);
// Although I Love Ark Of Napishtim

document.write(`${aa} Price in USA Is ${u_price} <br>`);
// Ark Of Napishtim Price in USA Is 20 USD

document.write(`${aa} Price in Japan Is ${j_price} <br>`);
// Ark Of Napishtim Price in USA Is 10 USD

document.write(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

document.write("<hr/>")


// Task 7
// to create a random number between 1 - 3
let chosen = Math.floor(Math.random() * (3 - 1 + 1) + 1);

const myFriends = [
  { title: 'Osama', age: 39, available: true, skills: ['HTML', 'CSS'] },
  { title: 'Ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
  { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] },
];

const [friend1, friend2, friend3] = myFriends;

const friendDetails = function (friendObj) {
  const { title, age, available, skills: [, skill], } = friendObj;

  document.write(title);
  document.write(age);
  document.write(available ? 'Available' : 'Not Available');
  document.write(skill);
};

if (chosen === 1) friendDetails(friend1);
if (chosen === 2) friendDetails(friend2);
if (chosen === 3) friendDetails(friend3);


