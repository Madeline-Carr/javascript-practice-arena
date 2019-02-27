//Classes

//Class Declatation & Hoisting

//This will create an error because class declarations 
//need to be declared before they are used. 
//const captainAmerica = new Person("Steve", "Rodgers");

// This is a class declaration.
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const ironMan = new Person("Tony", "Stark");
console.log(ironMan);


//Adding Meathods
class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    //Make a new block & you do not need the function keyword.
    usePower() {
        console.log(this.name + " used " + this.power);
        //NOTE: You are using this.name and this.power 
        //Not name and power!
    }
}

let theHero = new Hero("Hot Guy", "heat vision");
theHero.usePower();

//Sub Classing with Extends
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        let area = this.height * this.width;
        console.log("The area is " + area + "!");
    }
    dimensions() {
        console.log("The height is " + this.height + ". The width is " + this.width + ".");
    }
}

class Square extends Rectangle {
    constructor(height, width) {
        super(height, width); //NOTE: Super can only be called once so when there
        //more than one parameters they would all be passed in the same line. 
        //ALSO NOTE: The width is not used in meathods of this class but it needs 
        //to be included for the dimensions meathod to work.
        //This is because this constructor is making the Square. 
    }
    area() {
        let area = this.height * this.height;
        console.log("The area is " + area + ". Also, this shape is a square!");
    }
}

//Rectangle Example
let myRectangle = new Rectangle(5, 10);
myRectangle.area();
myRectangle.dimensions();

//Square Example
let mySquare = new Square(5, 5);
mySquare.area();
mySquare.dimensions();