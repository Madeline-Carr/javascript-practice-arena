//Normal Function
/*
const square = function (number){
    return number * number;
}

//Arrow Function
const square2 = (number) => {
    return number * number;
} 

//There is only one parameter so you can remove the ()
const square3 = number => {
    return number * number;
} 

//You are just returning a value so yo ucan remove the {} 
//and the return keyword

const square4 = number => number * number;
*/
// OTHER EXAMPLE 

let listOfJobs = [
    {job: "Sailor", status: true},
    {job: "Firefighter", status: true},
    {job: "Artist", status: false},
];

let inactiveJobs = listOfJobs.filter(job => !job.status );

console.log(inactiveJobs);