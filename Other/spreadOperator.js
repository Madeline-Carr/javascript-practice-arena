//Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];

let arr3 = arr1.concat(arr3); // concat can add two arrays
console.log(arr3);

let arr4 = [...arr1, 4, ...arr2];
// The spread operator can add them and other items. 
// It is also easier to understand.
console.log(arr4);
