//Making Shapes
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.age = -Infinity;
  this.draw = function() {
    console.log("Hello");
  };
}

function Circle(radius) {
  this.radius = radius;
  this.age = Infinity;
  this.draw = function() {
    console.log("draw");
  };
}

const circle1 = new Circle(8);
const rectangle1 = new Rectangle(8, 16);

//Adding Properties
circle1.size = "Large";
rectangle1.size = "Larger!";

//Deleting Properties
delete circle1.age;

console.log(circle1);
console.log(rectangle1);

//Making People
function MakePerson(height, name, job, age) {
  this.height = height;
  this.name = name;
  this.job = job;
  this.age = age;
  this.info = function() {
    console.log(name + " is a " + job + "!");
  };
}

const sherlock = new MakePerson(6.2, "Sherlock Holmes", "detective", 42);

const tony = new MakePerson(
  5.7,
  "Tony Stark",
  "genius, billionaire, playboy, philanthropist",
  48
);

//Adding Properties
sherlock.nationality = "British";
tony.nationality = "American";
//Deleting Properties
delete sherlock.age;
delete tony.age;

console.log(sherlock);
console.log(tony);

console.log(sherlock.info());
console.log(tony.info());

let x = {};

//Constructor Functions
console.log(sherlock.constructor);
console.log(tony.constructor);
console.log(rectangle1.constructor);
console.log(circle1.constructor);
console.log(x.constructor);
console.log(MakePerson.constructor);

//For...in loop example
for (let x in sherlock) {
  console.log(x + ": " + sherlock[x]);
}

//For...of loop example
var avengers = [
  "Iron Man",
  "Captain America",
  "Hulk",
  "Thor",
  "Hawkeye",
  "Black Widow",
  "Nick Fury",
  "Maria Hill",
  "Phil Coulson"
];

for (let hero of avengers) {
  console.log(hero);
}

//Cloning Objects with Spread Operator

const ironMan = { ...tony, power: "arc reactor" };
console.log(ironMan);

//Cloning Objects with Object.assign

const downeySherlock = Object.assign({ actor: "Robert Downey Jr." }, sherlock);
console.log(downeySherlock);
