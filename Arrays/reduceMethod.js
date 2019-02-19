//Example 1: Sum
let myArray = [1, 2, 3, 4, 5];

output = myArray.reduce((acc, val, i, arr) => {
    console.log(
        "acc:", acc,
        "val:", val,
        "i:", i,
        "arr:", arr
    );
    return acc + val;
}, 100);

console.log("Output", output);

//Example 2: Adding Arrays
let doubleArray = [[8], [2, 4, 6, 8], [4, 8]];
output2 = doubleArray.reduce((acc, val) => {
    emptyArray = [];
    return acc.concat(val);
}, []);

console.log(output2);

//Example 3: Avarage
let myTransactions = [12.50, 3.84, 2.97];
avarage = myTransactions.reduce((acc, val, i, arr) => {
    acc += val;
    if (i === arr.length - 1) {
        return acc / arr.length;
    }
    else {
        return acc;
    }
});

console.log(avarage);

