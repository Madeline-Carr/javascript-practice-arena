//Dates

//This creates a new date object.
let today = new Date();
///new Date is a constructor
console.log(today);

//To make your own date you can give the function parameters.
let newToday = new Date(1996, 08, 07);
console.log(newToday);
//Note if you only use one parameter it will be counted as milliseconds.

//GET
//To get the year from a date you can use the getFullYear method.
let thisYear = today.getFullYear();
console.log(thisYear);

//SET
let birthDay = new Date("August 7, 2019");
birthDay.setYear(96);
let year = birthDay.getFullYear(); // returns 1996
console.log(year);
