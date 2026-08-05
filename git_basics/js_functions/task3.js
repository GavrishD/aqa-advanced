//Task 3

function printUpperCase(text) {
  if (typeof text !== "string") {
    throw new Error("Input must be a string");
  }

  console.log(text.toUpperCase());
}

try {
  printUpperCase("hello");
  // printUpperCase(123);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Program finished");
}
