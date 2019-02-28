//Symbols

//To create a symbol use Symbol();
let mySymbol = Symbol("This is my Symbol.");

//Note no two symbols are equal to each other. 
let mySecondSymbol = Symbol("This is my Symbol.");
console.log(mySymbol == mySecondSymbol);