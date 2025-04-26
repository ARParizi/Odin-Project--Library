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

function createCard(book) {
    // const folder = document.querySelector('.card-folder');
    const card = document.createElement('div');
    card.classList.add('card-item');
    card.setAttribute('data-book-id', 'book.id.toString()');

    const title  = document.createElement('p');
    const author = document.createElement('p');
    const pages  = document.createElement('p');
    const isRead = document.createElement('p');

    title .classList.add('book-title');
    author.classList.add('book-author');
    pages .classList.add('book-pages');
    isRead.classList.add('book-isRead');

    title .textContent = book.title;
    author.textContent = book.author;
    pages .textContent = book.pages;
    isRead.textContent = `Is Read: ${book.isRead}`;

    const toggleIsRead = document.createElement('button');
    toggleIsRead.textContent = 'Toggle Read';
    toggleIsRead.type = 'button';
    toggleIsRead.setAttribute('data-book-id', 'book.id.toString()');
    toggleIsRead.classList.add('toggle-read-button');
    
    const deleteCard = document.createElement('button');
    deleteCard.textContent = '---Remove---';
    deleteCard.type = 'button';
    deleteCard.setAttribute('data-book-id', 'book.id.toString()');
    deleteCard.classList.add('delete-card');

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isRead);
    card.appendChild(toggleIsRead);
    card.appendChild(deleteCard);
    // folder.appendChild(card);
    return card;
}

document.querySelector('.card-folder').appendChild(createCard(new Book('asdfgb', 'ghjk', 456, true)));
document.querySelector('.card-folder').appendChild(createCard(new Book('asdfgb', 'ghjk', 456, true)));
document.querySelector('.card-folder').appendChild(createCard(new Book('asdfgb', 'ghjk', 456, true)));