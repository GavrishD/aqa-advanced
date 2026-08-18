// Task 1

const Book = require("./Book");
const EBook = require("./EBook");

const books = [
  new Book("The Hobbit", "J.R.R. Tolkien", 1937),
  new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997),
  new EBook("Dune", "Frank Herbert", 1965, "PDF"),
];

const oldestBook = Book.oldBook(books);

oldestBook.printInfo();
