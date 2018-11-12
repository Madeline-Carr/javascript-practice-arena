//PROJECT ELEVEN: PRIME NUMBERS

showPrimes(100);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number + " is prime!");
  }
}
//PROJECT ELEVEN EXPERIMENTS: COMPOSITE NUMBERS
showComposits(100);
function showComposits(limit) {
  for (let number = 1; number < limit; number++) {
    let composite = false;
    for (let factor = 2; factor < number; factor++)
      if (number % factor === 0) {
        composite = true;
      }
    if (composite) {
      console.log(number + "is a composite number!");
    }
  }
}
