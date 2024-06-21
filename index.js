class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.borrowed = false;
  }

  isBorrowed() {
    return this.borrowed;
  }
}

class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }
  borrowBook(book) {
    if (this.borrowBook.length >= 3) {
      return false;
    }
    this.borrowBook.push(book);
    book.borrowed = true;
    return true;
  }

  returnBook(ISBN) {
    const bookIndex = this.borrowedBooks.findIndex((book) => {
      book.ISBN === ISBN;
    });
    if (bookIndex !== 1) {
      this.borrowedBooks[bookIndex].borrowed = false;

      this.borrowedBooks.splice(bookIndex, 1);
    }
  }

  peekBook(ISBN) {
    return this.borrowedBooks.find((book) => {
      book.ISBN === ISBN;
    });
  }
}

class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  addNewBook({ book, author, ISBN }) {
    this.books.push({ book, author, ISBN });
  }

  registerMember(user, ID) {
    this.members.push(user, ID);
  }

  borrowBook(userID, ISBN) {
    const user = this.members.find((member) => {
      member.ID === userID;
    });
    const book = this.books.find((book) => {
      book.ISBN === ISBN && !book.borrowed;
    });

    if (user && book) {
      return user.borrowBook(book);
    }
    return false;
  }

  returnBook(userId, ISBN) {
    const user = this.members.find((member) => {
      member.id === userId;
    });
    if (user) {
      user.returnBook(ISBN);
    }
  }
}

const myLibrary = new Library();

const book1 = new Book("The great", "A.A ALi", 1234567);

myLibrary.addNewBook(book1);
