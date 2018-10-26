//PROJECT ONE: Max of two numbers
/*
function bigNumber(a, b) {
  if (a > b) console.log("A is equal to", a);
  else if (a < b) console.log("B is equal to", b);
  else if (a === b) console.log("A is equal to B! They are both equal to", a);
}
bigNumber(9, 8);

//PROJECT TWO: Landscape or Portrait
function isLandscape(width, height) {
  return width > height;
}
console.log(isLandscape(800, 2000));

//PROJECT THREE: Fizz Buzz
//If a number is divisible by 3 write Fizz.
//If a number is divisible by 5 write Buzz.
//If a number is divisible by 3 and 5 write FizzBuzz.
//If a number is not divisible by 3 or 5 write the number.
//If it is not a number write "Not a number."

const output = fizzBuzz(15);
console.log(output);
function fizzBuzz(num) {
  if (typeof num !== "number") return Nan;
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 5 === 0) return "Buzz";
  if (num % 3 === 0) return "Fizz";
  return num;
}

//PROJECT FOUR: Demerit Points
//Speed limit is 70 mph. For every 5 mph over the driver gets one point.
//If they get over 12 points they lose their license! :)

function speedProblems(speed) {
  let speedLimit = 70;
  if (speed < 20) {
    console.log("YOU DRIVE REALLY SLOW!!!");
    return;
  }
  if (speed <= speedLimit) console.log("Everything is fine.");
  if (speed > speedLimit) {
    var mphOver = Math.floor((speed - speedLimit) / 5);
    console.log(mphOver);
    if (mphOver >= 12) console.log("You lose your license!");
    if (mphOver < 12) console.log("You keep your liscense for now!");
  }
}
speedProblems(185);
*/
//PROJECT FIVE: Even and Odd Numbers

showNumbers(80);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log("EVEN", i);
    if (i % 2 !== 0) console.log("ODD", i);
  }
}

//PROJECT SIX: Count Truthy

const array = [NaN, 2, 8, 890, "cat", undefined, true];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (const item of array) {
    if (value) count++;
  }
}

//PROJECT SEVEN: String Properties
const movie = {
  title: "X-men Apocalypse",
  releaseYear: 2016,
  rating: 10,
  director: "Bryan Singer"
};

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

showProperties(movie);

//PROJECT EIGHT: Sum of Multiples of 3 and 5
function sumNumbers(num) {
  var total = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) total += i;
    return total;
  }
}
console.log(sumNumbers(80));
