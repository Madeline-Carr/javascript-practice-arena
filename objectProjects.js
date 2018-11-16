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
