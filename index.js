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

//Math
//Console.log pi
console.log(Math.PI);
//Console.log a random number
console.log(Math.random());
//Console.log a random number between 0 and 10
console.log(Math.random() * 10 + 1);
//Console.log a whole number between 1 and 10
console.log(Math.floor(Math.random() * 10 + 1));
//Absolute Value
console.log(Math.abs(-45));
//Absolute Value on a string
console.log(Math.abs("-8"));
//Trigonometry
//Sin
console.log(Math.sin(88));
//Cos
console.log(Math.cos(88));
//Tan
console.log(Math.tan(88));

//String Primitive
const myName = "Madeline";
console.log(typeof myName);

//String Object
const me = new String("Maddie");
console.log(typeof me);

//String Properties and Meathods
console.log(myName.includes("Mad"));
console.log(myName.length);
console.log(myName.startsWith("Made"));
console.log(myName.startsWith("line"));

console.log(myName.endsWith("Made"));
console.log(myName.endsWith("line"));

console.log(myName.indexOf("line"));

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

var sentence = "To be, or not to be: that is the question.";
console.log(sentence.replace("question", "answer"));
console.log(sentence.toUpperCase());

//Template Literals
var lastLine = "Has been my heart’s undoing.";
const someWords = `The time I’ve lost in wooing, 
In watching and pursuing 
The light, that lies 
In woman’s eyes, 
${lastLine}`;
console.log(someWords);

var num1 = 8;
var num2 = 10;
const someWords2 = `${num1} plus ${num2} is equal to ${num1 + num2}!`;
console.log(someWords2);

//Date Object
var christmas = new Date(2018, 11, 25);
console.log(christmas);
