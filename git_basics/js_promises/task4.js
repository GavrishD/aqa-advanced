// Task 4

// Class for working with todo requests
class TodoService {
  async getTodo() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const todo = await response.json();

    return todo;
  }
}

// Class for working with user requests
class UserService {
  async getUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    const user = await response.json();

    return user;
  }
}

const todoService = new TodoService();
const userService = new UserService();

// Handles Promise.all and Promise.race using class methods
async function handlePromises() {
  try {
    const allResults = await Promise.all([
      todoService.getTodo(),
      userService.getUser(),
      todoService.getTodo(),
    ]);

    console.log("Promise.all results:", allResults);

    const raceResult = await Promise.race([
      todoService.getTodo(),
      userService.getUser(),
      todoService.getTodo(),
    ]);

    console.log("Promise.race result:", raceResult);
  } catch (error) {
    console.log("Error:", error);
  }
}

handlePromises();
