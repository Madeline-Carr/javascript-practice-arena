//Arrays

const heros = ["Superman", "Batman"];

//Adding Elements to the End
heros.push("Wonder Woman");
console.log(heros);
//Adding Elements to the Begining
heros.unshift("Green Lantern");
console.log(heros);
//Adding Elements to the  Middle
heros.splice(2, 0, "Aquaman");
console.log(heros);

//Finding Elements (Primitives)
const avengers = ["Iron Man", "Captain America", "Iron Man"];
//Where is the Element?
console.log(avengers.indexOf("Iron Man"));
console.log(avengers.lastIndexOf("Iron Man"));
console.log(avengers.indexOf("Superman"));
//Is an element in the array?
console.log(avengers.includes("Captain America"));

//Finding Elements (Reference Types)
const classes = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" }
];

const course = classes.find(function (course) {
  return course.name === "a";
});
console.log(course);

//findIndex
const course2 = classes.findIndex(function (course2) {
  return course2.name === "b";
});
console.log(course2);

//Arrow Functions

const course3 = classes.find(course3 => course3.name === "c");
console.log(course3);

//Removing Elements

const xmen = [
  "Professor X",
  "Magneto",
  "Mystique",
  "Bishop",
  "Storm",
  "Kitty Pride"
];

//End
const last = xmen.pop();
console.log(xmen);
console.log(last);

//Beginning
const first = xmen.shift();
console.log(xmen);
console.log(first);

//Middle
const middle = xmen.splice(2, 1);
console.log(xmen);
console.log(middle);

//Deleting an entire array
let numbers = [8, 88, 888, 8888];
//or 
numbers.length = 0;
//or
numbers.splice(0, numbers.length);
//or
while (numbers.length > 0) {
  numbers.pop();
}

numbers = [];
console.log(numbers);

//Combining and Slicing Arrays
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const both = firstArray.concat(secondArray);
console.log(both);
const slice = both.slice(2, 4);
console.log(slice);

//The Spread Operator
//Adding two arrays with the spread operator
const combine = [...firstArray, "a", ...secondArray];
console.log(combine);
//Copying an array with the spread operator
const copy = [...combine];

//Iterating an Array with the for... of loop
const items = ["Bow Tie", "Sonic Screwdriver", "Blue Box"];

for (let item of items) {
  console.log(item);
}

//Iterating an Array with the for... each meathod
items.forEach(function (item) {
  console.log(item);
})

//Arrow Function Version with index
items.forEach((item, index) => console.log(index, item));

//Joining Arrays
const things = ["One Thing", "Two thing"];
const joined = things.join(",");

const message = "We have a Hulk.";
const parts = message.split(" ");
console.log(parts);

const combined = parts.join(" ");
console.log(combined);

//Sorting Number Arrays
const badNumbers = [2, 8, 4, 12, 10];
badNumbers.sort();
console.log(badNumbers);
badNumbers.reverse();
console.log(badNumbers);

//Sorting Object Arrays
const villainsDC = [
  { id: 1, name: "Joker" },
  { id: 2, name: "Harley Quinn" }
];

villainsDC.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(villainsDC);

//Testing the Elements of an Array
const someNumbers = [1, 2, 3, 4];
//Does every element match?
const allPositive = someNumbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive);
//Does at least one match?
const atLeastOnePositive = someNumbers.some(function (value) {
  return value >= 0;
});
console.log(atLeastOnePositive);

//How to filter an array
const someMoreNumbers = [1, -2, 3, -4, 5];
const filtered = someMoreNumbers.filter(number => number >= 0);
console.log(filtered);

// Mapping an Array
var lotOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function addOne() {
  var answer = lotOfNumbers.map(function (num) {
    return num + 1;
  });
  console.log(answer);
}
addOne();

//Shorter version of the same function
function addOne2() {
  var answer = lotOfNumbers.map(num => num + 1);
  console.log(answer);
}
addOne2();

function squareRoot() {
  var answer = lotOfNumbers.map(Math.sqrt);
  console.log(answer);
}
squareRoot();

//Reducing an Array
const numbersReduce = [2, 4, 6, 8];

let sum = 0;
for (let n of numbersReduce) {
  sum += n;
}
console.log(sum);
//This is an example of reducing an array.
const sum2 = numbersReduce.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum2);
//This is a shorter version
const sum3 = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum3);