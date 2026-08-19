// Task 1

const Book = require("./Book");
const EBook = require("./EBook");

// Books Array
const books = [
  new Book("The Hobbit", "J.R.R. Tolkien", 1937),
  new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997),
  new EBook("Dune", "Frank Herbert", 1965, "PDF"),
];

// Oldest Book
const oldestBook = Book.oldBook(books);

console.log("Oldest book:");
oldestBook.printInfo();

// Convert Book to EBook
const hobbitEBook = EBook.fromBook(books[0], "PDF");
const harryPotterEBook = EBook.fromBook(books[1], "EPUB");

console.log("Converted EBooks:");
hobbitEBook.printInfo();
harryPotterEBook.printInfo();

// Setters Validation
console.log("Setters validation:");

books[0].title = 123;
books[0].author = 123;
hobbitEBook.format = 123;
