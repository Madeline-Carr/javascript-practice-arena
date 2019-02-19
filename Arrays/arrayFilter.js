//Filtering arrays is very easy with the filter method and arrow functions.

//Step One: Make an array.
var numbers = [1, 4, 234, 34, 83, 49, 4, 345, 0];

//Step Two: Make an array.
const result = numbers.filter(number => number > 6);
//What is going on???
//Well, the const result is storing the result! :) 
//numbers.filter(); is calling the filter method of numbers.
//Then number is being used as a parameter. Each time it is a new number in the array.
//First it is one then four... 
// So for each element in the array it checks to see if it is over 6. 
//If it is then the number is added to a new array.

console.log(result); //[ 234, 34, 83, 49, 345 ] 
