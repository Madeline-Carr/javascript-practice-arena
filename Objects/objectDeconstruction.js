//There is a new way to reassign value

let ironMan = {
    name: 'Tony Stark',
    powers: ["flight", "guns", "money"],
    age: 35
}

//This is very repetitive 
/*
let name = ironMan.name;
let powers = ironMan.powers;
let age = ironMan.age;
*/

//This does the same thing!
const { name, powers, age } = ironMan;

//If you want to assign a value with a new 
//name you can do this.
const { name: hisName } = ironMan;

console.log(hisName); // Tony Stark
