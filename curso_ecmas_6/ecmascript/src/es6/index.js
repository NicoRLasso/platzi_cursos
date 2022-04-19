function newFunction(name, age, country) {
  var name = name || "nicolas";
  var age = age || 25;
  var country = country || "CO";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "oscar", age = 25, country = "CO") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("andres", 65, "mx");

let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
