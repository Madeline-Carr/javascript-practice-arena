//This document will show the diffrences between the map reduce and filter methods.

var avengers = [
    { name: "Ironman", powers: ["Arc Reactor", "Flight", "Weapons", "Money"], age: 42 },
    { name: "Captain America", powers: ["Sheild", "S.H.E.I.L.D", "Weapons"], age: 98 },
    { name: "Hulk", powers: ["Big", "Green", "Large"], age: 43 },
    { name: "Thor", powers: ["Flight", "Mjölnir"], age: 1000 },
];

//MAP

const avengersMembers = avengers.map(avengers => avengers.name);
console.log(avengersMembers);
