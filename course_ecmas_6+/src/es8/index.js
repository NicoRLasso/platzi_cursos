// Object entries
const data = {
  fronted: "Oscar",
  backend: "Nicolas",
  desing: "Ana",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values
const data2 = {
  fronted: "Oscar",
  backend: "Nicolas",
  desing: "Ana",
};

const values = Object.values(data2);
console.log(values);

// PadStart and PadEnd
const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " -----"));

// Async Await
const helloworld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("hello world"), 3000)
      : reject(new Error("test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloworld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloworld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
