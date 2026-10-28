//Task 2: Concatenating Strings and a Template String

const firstName = "Tom";
const secondName = "Jerry";
const welcomeMessage = "Hello";

// Concatenation
const greeting = welcomeMessage + ", " + firstName + " and " + secondName;

// Template literal
const templateGreeting = `${welcomeMessage}, ${firstName} and ${secondName}`;

console.log("Concatenation:", greeting);
console.log("Template literal:", templateGreeting);
