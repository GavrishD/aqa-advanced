// EBook
const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  // Format
  get format() {
    return this._format;
  }

  set format(value) {
    if (!value || value.trim() === "") {
      console.log("Error: The book format cannot be empty");
      return;
    }
    this._format = value.trim();
  }

  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.format}`
    );
  }
}

// Book
// const book = new EBook("Dune", "Frank Herbert", 1965, "PDF");

// Book Requests
// book.printInfo();

module.exports = EBook;
