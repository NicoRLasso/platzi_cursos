const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do Something Async"), 3000)
      : reject(new Error("Test Error"));
  });
};

const doSomething = async () => {
  const Something = await doSomethingAsync();
  console.log(Something);
};

console.log("before");
doSomething();
console.log("after");

const anotherFunction = async () => {
  try {
    const Something = await doSomethingAsync();
    console.log(Something);
  } catch (error) {
    console.error(error);
  }
};
console.log("before1");
anotherFunction();
console.log("after1");
