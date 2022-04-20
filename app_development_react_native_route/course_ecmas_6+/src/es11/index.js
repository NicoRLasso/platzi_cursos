// realtive import with index.html and file.js
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
});

// Bigint
const aBigNumber = 900799254740991n;
const anotherBigNumber = BigInt(900799254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise all settled
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("rexolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve"));
Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// Null opeartor
const foo = null ?? "default string";
console.log(foo);

// Optional Channig
const user = {};
console.log(user?.profile?.email);
if (user?.profile?.emal) {
  console.log("email");
} else {
  console.log("fail");
}
