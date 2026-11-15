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
    if (typeof value !== "string" || value.trim() === "") {
      console.log("Error: The book format must be a non-empty string");
      return;
    }

    this._format = value.trim();
  }

  // Convert Book to EBook
  static fromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }

  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.format}`
    );
  }
}

module.exports = EBook;
