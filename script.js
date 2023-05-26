function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

book.prototype.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
}

const bookOne = book('The Hobbit', 'J.R.R. Tolkien', '295', 'read');
console.log(bookOne);