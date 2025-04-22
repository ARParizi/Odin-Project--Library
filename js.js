const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.isRead = isRead;
    this.id     = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, isRead) {
    myLibrary.push(new Book(title, author, pages, isRead));
}

function findIndexById(iterable, id)
{
    let index = 0;
    for (const element of iterable) {
        if (element.id === id)
            return index;
        index++;
    }
}