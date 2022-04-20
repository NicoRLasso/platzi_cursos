// Callback function
function sum(num1, num2) {
  return num1 + num2;
}

// Callback runner
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(6, 2, sum));

// Time Callback function
function printDate(dateNow) {
  console.log(dateNow);
}

function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let newDate = new Date();
    callback(newDate);
  }, 3000);
}

date(printDate);
