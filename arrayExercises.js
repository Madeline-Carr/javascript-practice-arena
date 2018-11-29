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
