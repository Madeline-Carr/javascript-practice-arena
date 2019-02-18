//SPLICE! 

let avengers = ["IronMan", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];

avengers.splice(1, 3, "Spiderman", "Doctor Strange");
// There are 3 parameters. 
// The first parameter says what element to start from. 
// 1 is Captain America.
// The second parameter is how many elements to delete. 
// After that all parameters are added into the array. 
//So this example finds the first element which is Captain America.
//Then it deletes 3 elements. "Captain America", "Thor", "Hulk"
//Then it adds in Spiderman and Doctor Strange. 

console.log(avengers);
/*
[ 'IronMan',
  'Spiderman',
  'Doctor Strange',
  'Black Widow',
  'Hawkeye' ]
   */
