// Task 3

// Sends a request to get a todo using async/await
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await response.json();

  return todo;
}

// Sends a request to get a user using async/await
async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();

  return user;
}

// Waits until all Promises are completed
// const allPromises = Promise.all([getTodo(), getUser(), getTodo()]);

// allPromises
//   .then((results) => {
//     console.log("Promise.all results:", results);
//   })
//   .catch((error) => {
//     console.log("Promise.all error:", error);
//   });

// Returns the result of the first completed Promise
// const racePromises = Promise.race([getTodo(), getUser(), getTodo()]);

// racePromises
//   .then((result) => {
//     console.log("Promise.race result:", result);
//   })
//   .catch((error) => {
//     console.log("Promise.race error:", error);
//   });

// Handles Promise.all and Promise.race using async/await
async function handlePromises() {
  try {
    // Waits until all Promises are completed
    const allResults = await Promise.all([getTodo(), getUser(), getTodo()]);

    console.log("Promise.all results:", allResults);

    // Waits for the first completed Promise
    const raceResult = await Promise.race([getTodo(), getUser(), getTodo()]);

    console.log("Promise.race result:", raceResult);
  } catch (error) {
    console.log("Error:", error);
  }
}

handlePromises();
