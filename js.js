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
    const card = document.createElement('div');
    card.classList.add('card-item');
    card.setAttribute('data-id', book.id.toString());

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
    toggleIsRead.setAttribute('data-id', book.id.toString());
    toggleIsRead.classList.add('toggle-read-button');
    toggleIsRead.addEventListener('click',toggleReadClicked);
    
    const deleteCard = document.createElement('button');
    deleteCard.textContent = '---Remove---';
    deleteCard.type = 'button';
    deleteCard.setAttribute('data-id', book.id.toString());
    deleteCard.classList.add('delete-button');
    deleteCard.addEventListener('click',deleteCardClicked);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isRead);
    card.appendChild(toggleIsRead);
    card.appendChild(deleteCard);
    return card;
}

addBookToLibrary('asdfgb', 'ghjk', 1, true);
addBookToLibrary('asdfgb', 'ghjk', 2, true);
addBookToLibrary('asdfgb', 'ghjk', 3, true);
addBookToLibrary('asdfgb', 'ghjk', 4, true);
addBookToLibrary('asdfgb', 'ghjk', 5, true);

reRenderCards();
function reRenderCards() {
    const cardFolder = document.querySelector('.card-folder');
    cardFolder.textContent = '';

    for (const element of myLibrary) {
        cardFolder.appendChild(createCard(element));
    }
    const addDialogButton = document.createElement('button');
    addDialogButton.classList.add('add-dialog-button');
    addDialogButton.type = "button";
    addDialogButton.textContent = '+';
    addDialogButton.addEventListener('click', addDialogButtonClicked);
    cardFolder.appendChild(addDialogButton);
}

function toggleReadClicked(event) {
    const id = this.dataset.id;

    for (const element of myLibrary) {
        if(element.id === id){
            element.isRead = !element.isRead;
            reRenderCards();
            break;
        }
    }
}

function deleteCardClicked(event) {
    const id = this.dataset.id;

    let index = 0;
    for (const element of myLibrary) {
        if(element.id === id){
            myLibrary.splice(index, 1);
            reRenderCards();
            break;
        }
        index++;
    }
}

const dialog = document.querySelector("dialog");
function addDialogButtonClicked(event) {
    dialog.showModal();
}

const dialogSubmitButton = document.querySelector('.dialog-submit');

dialogSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const dialog = document.querySelector("dialog");
    const title  = document.querySelector('#book-title') .value;
    const author = document.querySelector('#author')     .value;
    const pages  = document.querySelector('#pages')      .value;
    const isRead = document.querySelector('#isRead')     .checked;

    addBookToLibrary(title, author, pages, isRead);
    reRenderCards();
    dialog.close();
})