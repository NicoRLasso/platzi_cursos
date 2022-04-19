// Propagation operator
const obj = {
  name: "nicolas",
  age: 23,
  country: "co",
};
let { name, ...all } = obj;
console.log(name, all);
const obj1 = {
  name: "nicolas",
  age: 23,
};
const obj2 = {
  ...obj1,
  country: "co",
};
console.log(obj2);

// Promise finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("hello world"), 3000)
      : reject(new Error("test Error"));
  });
};
helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("final"));

// Agroup regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
