// Task 2

// Sends a request to get a todo and returns a Promise with the todo object
function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );
}

// getTodo()
//   .then((todo) => {
//     console.log("Todo:", todo);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// Sends a request to get a user and returns a Promise with the user object
function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => response.json()
  );
}

// getUser()
//   .then((user) => {
//     console.log("User:", user);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// Runs three Promises and waits until all of them are completed
const allPromises = Promise.all([getTodo(), getUser(), getTodo()]);

// Handles the result of Promise.all or an error
allPromises
  .then((results) => {
    console.log("Promise.all results:", results);
  })
  .catch((error) => {
    console.log("Promise.all error:", error);
  });

// Runs three Promises and returns the result of the first completed Promise
const racePromises = Promise.race([getTodo(), getUser(), getTodo()]);

// Handles the result of Promise.race or an error
racePromises
  .then((result) => {
    console.log("Promise.race result:", result);
  })
  .catch((error) => {
    console.log("Promise.race error:", error);
  });
