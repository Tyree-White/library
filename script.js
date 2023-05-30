const container = document.querySelector('.container');

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

const bookOne = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'Read');

let myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook() {
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        container.appendChild(bookDiv);

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

        titleDiv.textContent = `${book.title}`;
        authorDiv.textContent = `${book.author}`;
        pagesDiv.textContent = `${book.pages}`;
        readDiv.textContent = ` ${book.read}`;
    });
}

const newBookBtn = document.querySelector('.newBookBtn');
const bookForm = document.querySelector('.bookInfo');
newBookBtn.addEventListener('click', displayForm);
bookForm.addEventListener('submit', dontSubmit);

function displayForm() {
    bookForm.style.display = 'flex';
}

const addBookBtn = document.querySelector('.add');
addBookBtn.addEventListener('click', addBook);

function addBook() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        container.appendChild(bookDiv);

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

        titleDiv.textContent = `${title}`;
        authorDiv.textContent = `${author}`;
        pagesDiv.textContent = `${pages}`;
    bookForm.style.display = 'none';
}

function dontSubmit(event) {
    event.preventDefault();
}