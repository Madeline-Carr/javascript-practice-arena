//Note on Reduce

// WHAT IS DOES!
// It takes an array and performs a function on it that returns a single value.
//It has 4 arguments. The total the current value, the current index, and the array.

//How to use it.
// array.reduce(); to call it.
//inside of the () you need a callback function which will change the array.
//For example array.reduce(print); if print was a function this would work.

//EXAMPLE ONE!!! 
let answer1 = [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}//IF YOU WANTED YOU COULD PUT A NUMBER HERE TO START FROM.
);
console.log(answer1);
//In this example the first time the callback happens 0 is the accumulator and 1 is the current value.
// 1 is also the current index. And because 0+1 = 1, 1 is also the return value.
//The second time 1 is the accumulator and 2 is the current value. 
//If you add them you get 3 which is the next accumulator
//Then the next value is 3 plus 3 gives you 6.
//Then 6 + 4 gives you 10 and the callback function stops because that is the end of the array.

//EXAMPLE ONE PART TWO
let answer2 = [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue);
//This is the arrow function version. It works the same way but is easier to understand and read.
console.log(answer2);

//EXAMPLE TWO
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
// sum is 6
console.log(sum);
//  node reduceNotes.js