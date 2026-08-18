// Book

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Title
  get title() {
    return this._title;
  }

  set title(value) {
    if (!value || value.trim() === "") {
      console.log("Error: The book title cannot be empty");
      return;
    }
    this._title = value.trim();
  }

  // Author
  get author() {
    return this._author;
  }

  set author(value) {
    if (!value || value.trim() === "") {
      console.log("Error: The author's name cannot be empty");
      return;
    }
    this._author = value.trim();
  }

  // Year
  get year() {
    return this._year;
  }

  set year(value) {
    const currentYear = new Date().getFullYear();
    if (typeof value !== "number" || value < 1 || value > currentYear) {
      console.log(`Error: Incorrect publication year (1 - ${currentYear})!`);
      return;
    }
    this._year = value;
  }

  // Oldest Book
  static oldBook(books) {
    let oldestBook = books[0];

    for (const book of books) {
      if (book.year < oldestBook.year) {
        oldestBook = book;
      }
    }

    return oldestBook;
  }

  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    );
  }
}

// Book 1
// const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);

// Book 2
// const book2 = new Book(
//   "Harry Potter and the Philosopher's Stone",
//   "J.K. Rowling",
//   1997
// );

// Book Requests
// book1.printInfo();
// book2.printInfo();

module.exports = Book;