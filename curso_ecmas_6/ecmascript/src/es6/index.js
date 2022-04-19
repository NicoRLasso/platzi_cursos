function newFunction(name, age, country) {
  var name = name || "nicolas";
  var age = age || 25;
  var country = country || "CO";
  console.log(name, age, country);
}

//// es6
// Init params on a function
function newFunction2(name = "oscar", age = 25, country = "CO") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("andres", 65, "mx");

// template tags
let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Template tags multiline
let lorem =
  "hello this is a test from a epic phrase \n" + "the rest of the epic phrase";
let lorem2 = `this is another a test from a epic phrase
the rest of the other epic phrase`;
console.log(lorem);
console.log(lorem2);

// Destructured assignation
let person = {
  name: "nicolas",
  age: 25,
  country: "CO",
};
console.log(person.name, person.age, person.country);
let { name, age, country } = person;
console.log(name, age, country);

// Spread operator
let team1 = ["nicolas", "andres", "julian"];
let team2 = ["valeria", "camila", "maria"];
let education = ["david", ...team1, ...team2];
console.log(education);

// Diferents between let and war and const
{
  var glogalVar = "Global var";
}
{
  let glogalLet = "Global let";
  console.log(glogalLet);
}

console.log(glogalVar);

const a = "b";

// Improvement objects
let name2 = "nicolas";
let age2 = 25;

obj = { name: name2, age: age2 };

obj2 = { name2, age2 };
console.log(obj2);

// Arrow functions
const names = [
  { name: "nicolas", age: "32" },
  { name: "andres", age: 25 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

// Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey");
    } else {
      reject("Upss");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Classes
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(1, 2));

// Import modules
import { hello } from "./module";

hello();

// Generators

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "world";
  }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
