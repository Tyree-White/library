const body = document.querySelector('body');

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

const bookOne = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'read');

let myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook() {
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        body.appendChild(bookDiv)
        console.log(book)
    });
}

