// BOOK CLASS: REPRESENTS A BOOK
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI CLASS: HANDLE UI TASKS

class UI {
  static displayBooks() {
    const StoredBooks = [
      { title: "Book One", author: "John Doe", isbn: 3454 },
      { title: "Book Two", author: "Jane Doe", isbn: 4564 }
    ];

    const books = StoredBooks;

    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// STORE CLASS: HANDLES STORAGE

// EVENT: DISPLAY BOOKS

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// EVENT: ADD A BOOK

document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();
  // GET FORM VALUES
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // INSTANTIATE BOOK
  const book = new Book(title, author, isbn);

  // ADD BOOK TO UI
  UI.addBookToList(book);

  // CLEAR FIELDS
  UI.clearFields();
});

// EVENT: REMOVE A BOOK

document.querySelector("#book-list").addEventListener("click", e => {
  UI.deleteBook(e.target);
});
