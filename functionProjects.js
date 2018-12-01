//Project 1: Sum of Arguments
console.log(sum([1, 2, 3, 4]));
function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) {
        items = [...items[0]];
    }

    return items.reduce((a, b) => a + b);
}

//Project 2: Area of Circle
const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.radius);
console.log(circle.area);

//Project 3: Error Handling
try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}