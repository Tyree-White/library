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
    let i = 0;
    myLibrary.forEach(book => {
        i++
        console.log(i)

        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.dataset.index = i;
        container.appendChild(bookDiv);

        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        const authorDiv = document.createElement('div');
        authorDiv.className = 'author';
        const pagesDiv = document.createElement('div');
        pagesDiv.className = 'pages';
        const readDiv = document.createElement('div');
        readDiv.className = 'read';
        readDiv.dataset.index = `${i}-read`;
        const statusBtn = document.createElement('button');
        statusBtn.className = 'statusBtn';
        statusBtn.type = 'button';
        statusBtn.dataset.index =  i;
        statusBtn.textContent = 'Change Read Status';
        const editBtn = document.createElement('button');
        editBtn.className = 'editBtn';
        editBtn.type = 'button';
        editBtn.dataset.index = i;
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.type = 'button';
        deleteBtn.dataset.index = i;
        deleteBtn.textContent = 'Delete';

        bookDiv.appendChild(titleDiv);
        bookDiv.appendChild(authorDiv);
        bookDiv.appendChild(pagesDiv);
        bookDiv.appendChild(readDiv);
        bookDiv.appendChild(statusBtn);
        bookDiv.appendChild(editBtn);
        bookDiv.appendChild(deleteBtn);

        titleDiv.textContent = `${book.title}`;
        authorDiv.textContent = `${book.author}`;
        pagesDiv.textContent = `${book.pages}`;
        readDiv.textContent = ` ${book.read}`;
    });

    const changeStatusBtnList = document.querySelectorAll('.statusBtn');
    changeStatusBtnList.forEach(button => {
        button.addEventListener('click', changeStatus => {
            let buttonIndex = Number(button.getAttribute('data-index'));
            const buttonDiv = document.querySelector(`[data-index="${buttonIndex}-read"]`);
            if (buttonDiv.textContent === 'Read') {
                buttonDiv.textContent = 'Not Read';
            } else {
                buttonDiv.textContent = 'Read';
            }
        });
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
    const read = document.querySelector('#read');
    const bookDiv = document.querySelectorAll('.book');
    bookDiv.forEach(book => {
        book.remove();
    })

    let haveRead = '';
    if (read.checked) {
        haveRead = "Read";
    } else {
        haveRead = 'Not Read';
    }

    if (title === '' || author === '' || pages === '') {
        return alert('Error, please fill all fields.')
    }

    const newBook = new book(title, author, pages, haveRead);
    addBookToLibrary(newBook);

    displayBook()
    bookForm.style.display = 'none';
}

    function dontSubmit(event) {
        event.preventDefault();
}