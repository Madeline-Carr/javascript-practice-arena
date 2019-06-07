/* STACKS */

/*
Functions: 
 push: Add element to top of stack.
 pop: Remove an element form the top of a stack.
 peak: View the top element of a stack. 
 length or size: View length of stack.
 */

//Palindrome Testing

var letters = []; //This is the stack.
var word = "racecar";
var reverseWord = "";

//Put letters into the stack/array.
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
//Put letters from the array into the reverseWord variable in reverse order.
for (var i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
}

if (rword == word) {
  console.log(word + "is a palindrome!");
} else {
  console.log(word + "is not a palindrome!");
}
