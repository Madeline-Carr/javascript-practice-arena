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

//Project 3: Except
const numbers3 = [1, 2, 3, 4, 1];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array) {
        if (!excluded.includes(element))
            output.push(element);
    }
    return output;
}

//Project 4: Moving an Element
const numbers4 = [1, 2, 3, 4, 5];
const output2 = move(numbers4, 0, 2);
console.log(output2);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error("Invalid offset.");
        return;
    }
    const output2 = [...array];
    const arrayElement = output2.splice(index, 1)[0];
    output2.splice(index + offset, 0, arrayElement);
    return output2;
}

//Project 5: Count Occurrences
const numbers5 = [1, 2, 3, 4, 1];
const count = countOccurences(numbers5, 1);
console.log(count);
//Solution 1
function countOccurences(array, searchElement) {
    let i = 0;
    for (let element of array) {
        if (element === searchElement) {
            i++;
        }
    }
    return i;
}
//Solution 2
countOccurences2(numbers5, 1);

function countOccurences2(array, searchElement) {
    array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
}

//Project 6: Get Max
//Solution 1
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const max = getMax(numbers6);
console.log(max);
function getMax(array) {
    if (array.length === 0) return undefined;
    let highest = array[0];
    for (let element of array) {
        if (element > highest) {
            highest = element;
        }
    }
    return highest;
}

//Solution 2
const max3 = getMax3(numbers6);
console.log(max3);
function getMax3(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}

//Project 7: Movies 
const movies = [
    { title: "a", year: 2018, rating: 4.5 },
    { title: "b", year: 2018, rating: 4.7 },
    { title: "c", year: 2018, rating: 3 },
    { title: "d", year: 2017, rating: 4.5 },
];

//Select all the movies from 2018 with a rating > 4
//Sort them by their rating
//Put them in decending order
//Log their titles

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles);