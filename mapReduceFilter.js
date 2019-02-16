//This document will show the diffrences between the map reduce and filter methods.

var avengers = [
    { name: "Ironman", powers: ["Arc Reactor", "Flight", "Weapons", "Money"], age: 42 },
    { name: "Captain America", powers: ["Sheild", "S.H.E.I.L.D", "Weapons"], age: 98 },
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
