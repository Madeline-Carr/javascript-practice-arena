//TRY CATCH THROW FINALLY
let x = 10;

function test(y) {
    try {
        if (y < x) throw "Y is too small!";
        if (y > x) throw "Y is too large!";
        if (y > x) throw "Y is correct...";
    } catch (err) {
        console.log(err);
    }
}

test(3);

//TEST 2
let me = "Maddie";;
let you;

function isThereName(myName) {

    try {
        if (myName) console.log(myName);
        if (!myName) throw "myName is empty!"

    } catch (error) {
        console.log(error);
    }
}

isThereName(me);
isThereName(you);