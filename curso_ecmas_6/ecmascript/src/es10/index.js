// Flat function
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

// Flat map for each element with function
let array1 = [1, 2, 3, 4, 5];
console.log(array1.flatMap((value) => [value, value * 2]));

// Remove white spaces string
// trimStart
let hello = "   hello world";
console.log(hello);
console.log(hello.trimStart());
//trimEnd
let hello1 = "hello world     ";
console.log(hello1);
console.log(hello1.trimEnd());

// Optional catch building
try {
} catch {
  console.log(error);
}

// from entries key value to object
let entries = [
  ["name", "oscar"],
  ["age", "25"],
];
console.log(Object.fromEntries(entries));

// object type symbol
let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
