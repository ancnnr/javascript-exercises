let myLibrary = [];

function Book(name, author, description) {
    this.name = name;
    this.author = author;
    this.description = description;
}

function addBookToLibrary(name, author, description) {
    myLibrary.push(new Book(name, author, description));
    showNewBook();
}

function removeBookFromLibrary(id)
{
    myLibrary.splice(id, 1);

    const shownBooks = document.querySelectorAll('.card');

    shownBooks.forEach((el) => {

        const el_index = el.getAttribute('data-book_index');

        if(el_index > id)
        {
            el.setAttribute('data-book_index',el_index-1);
        }
    })

    refreshBooks();
}


function createBookCard(book, index) {

    console.log(book.name);

    let newBook = document.createElement('div');
    newBook.classList.add('card');
    newBook.setAttribute('data-book_index', index)

    let newBook_name = document.createElement('h1');
    newBook_name.textContent = book.name;

    let newBook_author = document.createElement('h3');
    newBook_author.textContent = book.author;

    let newBook_description = document.createElement('p');
    newBook_description.textContent = book.description;

    newBook.append(newBook_name, newBook_author, newBook_description);
    document.querySelector('.container').appendChild(newBook);
    
}

function showNewBook() {
    newBookObject = myLibrary[myLibrary.length-1];
    createBookCard(newBookObject, myLibrary.length-1);
}

function refreshBooks() {

    removeAllChildNodes(document.querySelector('.container'));

    myLibrary.forEach((b, index) => {
        createBookCard(b, index);
    });

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
