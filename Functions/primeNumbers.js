//Prime Numbers
/*
showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {

        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime === true) {
        console.log(number);
    }
}
*/
//Second Solution

showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            console.log(number);
        }
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false;
        }
    }
    return true;
}