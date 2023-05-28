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
        body.appendChild(bookDiv);

        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        const authorDiv = document.createElement('div');
        authorDiv.className = 'author';
        const pagesDiv = document.createElement('div');
        pagesDiv.className = 'pages';
        const readDiv = document.createElement('div');
        readDiv.className = 'read';

        bookDiv.appendChild(titleDiv);
        bookDiv.appendChild(authorDiv);
        bookDiv.appendChild(pagesDiv);
        bookDiv.appendChild(readDiv);

        titleDiv.textContent = `Title: ${book.title}`;
        authorDiv.textContent = `Author: ${book.author}`;
        pagesDiv.textContent = `Pages: ${book.pages}`;
        readDiv.textContent = `Read: ${book.read}`;
    });
}

