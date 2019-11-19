//Function Declaration
function walk() {
  console.log("walk");
}

//Anonymous Function Expression
let run = function() {
  console.log("run");
};

//Named Function Expression
let running = function running() {
  console.log("running");
};
running();

let move = running;
move();

//The Rest Operator
function sum(discount, ...args) {
  const total = args.reduce((a, b) => a + b);
  return total * (1 - discount);
}
let answer = sum(0.1, 20, 30);
console.log(answer);

//Default Parameters
function interest(principal, rate, years = 5) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000, 3.5));

//Getters and Setters
//Try and Catch
const person = {
  firstName: "Anthony",
  lastName: "Stark",
  get fullName() {
    return `${person.firstName}${person.lastName}`;
  },
  set fullName(value) {
    //const e = new Error();
    if (typeof value !== "string") throw new Error("Value is not a string.");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name.");

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
try {
  person.fullName = "Anthony Stark";
} catch (e) {
  console.log(e);
}
console.log(person);

//Changing this
const video = {
  title: "Avengers",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }
};

video.showTags();

//Call, Apply, and Bind
function playVideo(a, b) {
  console.log(this);
}
playVideo.call({ name: "Maddie" }, 1, 2);
playVideo.apply({ name: "Maddie" }, [1, 2]);
const fn = playVideo.bind({ name: "Maddie" });
fn();
// Window Object
playVideo();
