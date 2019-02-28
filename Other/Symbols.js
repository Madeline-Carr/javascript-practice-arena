//Symbols

//To create a symbol use Symbol();
let mySymbol = Symbol("This is my Symbol.");

//Note no two symbols are equal to each other. 
let mySecondSymbol = Symbol("This is my Symbol.");
console.log(mySymbol == mySecondSymbol);

////////////////////////////////////////////////////////////////
//Auto Conversion
//Symbols will not automaticly convert but they can be changed.

//This will not work because mySymbol is not a string.
//alert(mySymbol);

//mySymbol.toString() This will make mySymbol a string.
