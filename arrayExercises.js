//Project 1: Array from Range
const numbers = arrayFromRange(-10, -4);
console.log(numbers);

function arrayFromRange(min, max) {
    const answer = [];
    for (i = min; i <= max; i++) {
        answer.push(i);
    }
    return answer;
}
//Project 2: Includes

const numbers2 = [1, 2, 3, 4, 5];

console.log(includes(numbers2, 4));

function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement) {
            return true;
        }
    }
    return false;
}
