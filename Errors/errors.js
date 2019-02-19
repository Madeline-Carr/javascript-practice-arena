//TRY CATCH THROW FINALLY
/*let x = 10;

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
*/
//Test 3
function howOld(age) {
    try {
        if (typeof (age) != "number") throw new Error("Age is not a number.");
        if (age < 0) throw new Error("Age can not be less than 0.");
        if (age >= 0) return "You are " + age + " years old."
    } catch (err) {
        console.log(err);
    }
}
console.log(howOld(67));
console.log(howOld("a"));