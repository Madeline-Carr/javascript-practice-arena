//Prototypes

/*
Suppose you have an object called animal and you give it functions like breathe and eat.
Then you might want to have more animals with unique info.
You can make the animal object the prototype of the animals to give them access. 
Prototypes can give other data access to data from their prototype.
*/

let animal = {
  breathe: true
};
let lion = {
  mane: true
};

lion.__proto__ = animal;

// Now lion can access animal
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true
