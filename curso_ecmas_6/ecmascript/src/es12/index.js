// Replace all
const string =
  "JavaScript is wonderfull and with JavaScript i can create the future of the web ";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

// Privated methods
class message {
  #show(val) {
    console.log(val);
  }
}
const message1 = new message();
message1.show("hola");

// Promise any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// Weakref
class AnyClass {
  constructor(elemetn) {
    this.ref = new WeakRef(elemetn);
  }
}

// and, or, null, logic operators

let isTrue = true;
let isFalse = false;
console.log((isTrue &&= isFalse));
console.log((isTrue ||= isFalse));
console.log((undefined ??= isFalse));
