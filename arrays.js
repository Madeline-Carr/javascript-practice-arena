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
const first = [1, 2, 3];
const second = [4, 5, 6];
const both = first.concat(second);
console.log(both);
const slice = both.slice(2, 4);
console.log(slice);
