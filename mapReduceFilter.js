//This document will show the diffrences between the map reduce and filter methods.

var avengers = [
    { name: "Ironman", powers: ["Arc Reactor", "Flight", "Weapons", "Money"], age: 42 },
    { name: "Captain America", powers: ["Sheild", "S.H.E.I.L.D", "Weapons"], age: 101 },
    { name: "Hulk", powers: ["Big", "Green", "Large"], age: 43 },
    { name: "Thor", powers: ["Flight", "Mjölnir"], age: 1000 },
];

//MAP 
//Map performs a function on every item in an array. 
//NOTE avengersElement can just be avengers but to make it easier to understand I changed it.
const avengersMembers = avengers.map(avengersElement => avengersElement.name);
// avengers.map(avengers => avengers.name);  THIS WOULD ALSO WORK.
console.log(avengersMembers);

// STEP BY STEP 
//avengers.map(---); This says to perform the map method on the avengers array. 
//avengers.map(avengers => ---); Then each element gets passes into the arrow function.
//The avengers in the arrow function is just the name of the element.
//avengers.map(avengers => avengers.name); Then it runs the arrow function for each element
// and returns the name property of each. 

//REDUCE
//Reduce is similar to map but it has an accumulator.
//This will add all of the avengers ages.
const avengersTotalAge = avengers.reduce((acc, avenger) => acc + avenger.age, 0);
//avengers.reduce(); This calls the reduce method.
//avengers.reduce((acc, avenger) =>); This makes a variable for the accumulator
// and each element of the array is called avenger.
//avengers.reduce((acc, avenger) => acc + avenger.age, 0); //This adds the age of 
//each avenger to the accumulator which is set to 0.
console.log(avengersTotalAge);

//FILTER 
//Filter will filter an array and return the elements that meet a condition. 
const oldAvengers = avengers.filter(avenger => avenger.age >= 100);
console.log(oldAvengers);

const youngAvengers = avengers.filter(avenger => avenger.age < 100);
console.log(youngAvengers);