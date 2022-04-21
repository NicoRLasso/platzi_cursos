const somethingWillHappend = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey");
    } else {
      reject("Ups");
    }
  });
};

somethingWillHappend()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

const somethingWillHappend2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Ups");
      reject(error);
    }
  });
};

somethingWillHappend2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.all([somethingWillHappend(), somethingWillHappend2()])
  .then((response) => console.log("Array of result", response))
  .catch((error) => concolse.log(error));
