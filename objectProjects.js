
//Project 1: Address Object

const address = {
  street: "Briarwood",
  city: "Fredericksburg",
  zipCode: 22405
};

function showAddress() {
  for (const key in address) {
    console.log(`The ${key} is ${address[key]}!`);
  }
}

showAddress();

//Project 2: Constructor Function & Factory Function

//Constructor Function
function MakeAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const whiteHouse = new MakeAddress("Pennsylvania Ave", "Washington DC", 20500);
console.log(whiteHouse);

//Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

const buckingham = createAddress("Westminster", "London", 1);
console.log(buckingham);

//Project 3: Object Equality

let address1 = new MakeAddress("Baker Street", "London", "NW1 6XE");
let address2 = new MakeAddress("Baker Street", "London", "NW1 6XE");
let address3 = address1;
console.log(address1, address2);

function areEqual(address1, address2) {
  return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
  return address1 === address2;
}
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

//Project 4: Blog Post Object
let blogPost = {
  title: "The title",
  body: "The content...",
  author: "Stan Lee",
  views: 888,
  comments: [
    { author: "Iron Man", body: "I am Iron Man!" },
    { author: "Hulk", body: "AAARUUUGGHHHRRR!" }
  ],
  isLive: false,
}
console.log(blogPost);

//Project 5: Constructor Functions
function BlogPosts(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.commments = [];
  this.isLive = false;
}
const newBlog = new BlogPosts("The title", "The content...", "Stan Lee");
console.log(newBlog);

//Proect 7: Price Range Object
let priceRanges = [
  {
    label: "$",
    tooltip: "Inexpensive",
    minPrice: 10,
    maxPrice: 0,
  },
  {
    label: "$$",
    tooltip: "Moderate",
    minPrice: 20,
    maxPrice: 10,
  },
  {
    label: "$$$",
    tooltip: "Expensive",
    minPrice: 20,
    maxPrice: 100,
  }
];

let resturants = [
  { avaragePerPerson: 5 }
];
