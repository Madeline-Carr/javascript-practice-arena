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