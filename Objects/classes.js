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
}

class Square extends Rectangle {
    constructor(height) {
        super(height); //NOTE: Super can only be called once so if there were 
        //more than one parameters they would all be passed in the same line. 
    }
    area() {
        let area = this.height * this.height;
        console.log("The area is " + area + ". Also, this shape is a square!");
    }
}

//Rectangle Example
let myRectangle = new Rectangle(5, 10);
myRectangle.area();

//Square Example
let mySquare = new Square(5);
mySquare.area();