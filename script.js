const container = document.querySelector('.container');

class book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
}}

let myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook() {
    let i = 0;
    myLibrary.forEach(book => {
        i++

        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.dataset.index = i;
        container.appendChild(bookDiv);

        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.dataset.index = `${i}-title`;
        const authorDiv = document.createElement('div');
        authorDiv.className = 'author';
        authorDiv.dataset.index = `${i}-author`;
        const pagesDiv = document.createElement('div');
        pagesDiv.className = 'pages';
        pagesDiv.dataset.index = `${i}-pages`;
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
                myLibrary[buttonIndex - 1].read = 'Not Read';
            } else {
                buttonDiv.textContent = 'Read';
                myLibrary[buttonIndex - 1].read = 'Read';
            }
        });
    });

    const deleteBtnList = document.querySelectorAll('.deleteBtn');
    deleteBtnList.forEach(button => {
        button.addEventListener('click', deleteBook => {
            let buttonIndex = Number(button.getAttribute('data-index'));
            const buttonDiv = document.querySelector(`[data-index="${buttonIndex}"]`);
            buttonDiv.remove();
            myLibrary.splice(buttonIndex - 1, 1);
            const bookDiv = document.querySelectorAll('.book')
            bookDiv.forEach(book => {
                book.remove();
            })
            displayBook();
        });
    })
    
    const editBtnList = document.querySelectorAll('.editBtn');
    editBtnList.forEach(button => {
        button.addEventListener('click', editBook => {
            const bookForm = document.querySelector('.bookInfo');
            bookForm.style.display = 'flex';
            const addBookBtn = document.querySelector('.add');
            addBookBtn.style.display = 'none';
            const editBookBtn = document.querySelector('.edit');
            editBookBtn.style.display = 'block';
            const read = document.querySelector('.readDivision');
            read.style.display = 'none';
            let buttonIndex = Number(button.getAttribute('data-index'));
            console.log(buttonIndex);
            editBookBtn.addEventListener('click', editBook => {
                const title = document.querySelector('#title').value;
                const author = document.querySelector('#author').value;
                const pages = document.querySelector('#pages').value;
                const titleDiv = document.querySelector(`[data-index="${buttonIndex}-title"]`);
                const authorDiv = document.querySelector(`[data-index="${buttonIndex}-author"]`);
                const pagesDiv = document.querySelector(`[data-index="${buttonIndex}-pages"]`);
                
                titleDiv.textContent = title;
                authorDiv.textContent = author;
                pagesDiv.textContent = pages;
                bookForm.style.display = 'none';

                myLibrary[buttonIndex - 1].title = title;
                myLibrary[buttonIndex - 1].author = author;
                myLibrary[buttonIndex - 1].pages = pages;
                buttonIndex = undefined;
            })
        })
    })
}

const newBookBtn = document.querySelector('.newBookBtn');
const bookForm = document.querySelector('.bookInfo');
newBookBtn.addEventListener('click', displayForm);
bookForm.addEventListener('submit', dontSubmit);

function displayForm() {
    bookForm.style.display = 'flex';
    const addBookBtn = document.querySelector('.add');
    addBookBtn.style.display = 'block';
    const editBookBtn = document.querySelector('.edit');
    editBookBtn.style.display = 'none';
    const read = document.querySelector('.readDivision');
    read.style.display = 'flex';
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