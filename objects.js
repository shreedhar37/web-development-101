// create an object

const user = {
  name: "Shreedhar Chavan",
  age: 22,
  degree: "B.E",
  course: "Information Technology",
};

console.log(user);

// create an object using Constructor

function User(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

const Shreedhar = new User("Shreedhar", 22, "Mumbai");

console.log(Shreedhar);

// can create multiple objects easily with Constructor !!
const John = new User("John Doe", 22, "India");
const Harvey = new User("Harvey Spector", 45, "NY");

// access object properties using . operator or using bracket notation
console.log(Shreedhar.age);
console.log(Shreedhar["address"]);

// can add / update a property using . or bracket notation
Shreedhar["mobile-number"] = 1234567890;
Shreedhar.skills = ["Javascript", "Python", "Ruby on Rails", "Java"];

// delete an object property using 'delete' keyword
delete Shreedhar["mobile-number"];

console.log(Shreedhar["mobile-number"]); // returns 'undefined'

// get keys of an object

const userKeys = Object.keys(Shreedhar);
console.log(userKeys); // returns ['name', 'age', 'address', 'skills']

// get values of an object

const userValues = Object.values(Shreedhar);
console.log(userValues);

// merge two objects

const newObj = {
  ...Shreedhar,
  interest: "Cybersecurity",
};

console.log(newObj);

// freeze an object. Can't add / modify object properties !!!

Object.freeze(Shreedhar);
Shreedhar.name = "John";
console.log(Shreedhar.name); // returns 'Sheedhar Chavan'
console.log(Object.isFrozen(Shreedhar)); // return 'true'

// seal an object. Can modify Object exisiting properties but can't add new properties
Object.seal(Shreedhar);
Shreedhar.name = "Shree";
console.log(Shreedhar.name); // returns 'Shree'
console.log(Object.isSealed(Shreedhar)); // returns 'true'

Shreedhar["favorite-color"] = "Blue";
console.log(Shreedhar["favorite-color"]); // returns 'undefined'
