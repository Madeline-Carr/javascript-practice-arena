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
