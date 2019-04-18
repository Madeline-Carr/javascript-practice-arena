//Recursion is when a function calls itself.

function power(base, exponent) {
  let answer = 1;

  // multiply answer by x n times in the loop
  for (let i = 0; i < exponent; i++) {
    answer *= base;
  }
  return answer;
}

let final = power(2, 4);
console.log(final);
