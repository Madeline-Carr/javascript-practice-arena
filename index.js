//Making Shapes
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.draw = function() {
    console.log("Hello");
  };
}

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const circle1 = new Circle(8);
const rectangle1 = new Rectangle(8, 16);

console.log(circle1);
console.log(rectangle1);

//Making People
function MakePerson(height, name, job) {
  this.height = height;
  this.name = name;
  this.job = job;
  this.info = function() {
    console.log(name + " is a " + job + "!");
  };
}

const sherlock = new MakePerson(6.2, "Sherlock Holmes", "detective");

const tony = new MakePerson(
  5.7,
  "Tony Stark",
  "genius, billionaire, playboy, philanthropist"
);

console.log(sherlock);
console.log(tony);

console.log(sherlock.info());
console.log(tony.info());
