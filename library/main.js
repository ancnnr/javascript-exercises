// Classes

class Book { 

    constructor(name="Unknown", author="Unknown", description="")
    {
        this.name = name;
        this.author = author;
        this.description = description;
        this.read = false;
    }
}



//Variables / UI Elements

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

const myLibrary = [];
const toggleBtn = document.getElementById('toggle-form');
const bookContainer = document.querySelector('.books-grid');
const addBookModal = document.getElementById('add-book-modal');
const overlay = document.querySelector('.overlay');
const addBookForm = document.getElementById('new-book-form');



//Functions

const toggleFormVisibility = () => {
    addBookForm.reset();
    addBookModal.classList.add('active');
    overlay.classList.add('active');
}

const closeAddBookModal = () => {
    addBookModal.classList.remove('active');
    overlay.classList.remove('active');
}

const toggleReadBook = (event) => {

    const id = event.target.parentElement.parentElement.getAttribute('data-book_index');
    myLibrary[id].toggleRead();

    if(myLibrary[id].read)
    {
        event.target.textContent = "Mark as unread";
        event.target.classList.remove('btn-light-red');
        event.target.classList.add('btn-light-green');
    }
    else{
        event.target.textContent = "Mark as read";
        event.target.classList.remove('btn-light-green');
        event.target.classList.add('btn-light-red');

    }

};

const deleteBookButton =  (event) => {
    
    removeBookFromLibrary(event.target.parentElement.parentElement.getAttribute('data-book_index'));
};

const addBook = (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const description = document.getElementById("description").value;

    addBookToLibrary(name, author, description);

    document.getElementById('name').value = "";
    document.getElementById('author').value = "";
    document.getElementById('description').value = "";

    closeAddBookModal();
};

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

    const newBook = document.createElement('div');
    newBook.classList.add('card');
    newBook.setAttribute('data-book_index', index)

    const newBook_name = document.createElement('h1');
    newBook_name.textContent = book.name;

    const newBook_author = document.createElement('h3');
    newBook_author.textContent = book.author;

    const newBook_description = document.createElement('p');
    newBook_description.textContent = book.description;

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');

    const readStatus = book.read;

    let toggleRead = document.createElement('button');
    toggleRead.classList.add('btn');
    if(readStatus)
    {
        toggleRead.classList.add('btn-light-green');
    }
    else {
        toggleRead.classList.add('btn-light-red');
    }
    
    toggleRead.textContent = "Mark as read";
   
    toggleRead.addEventListener('click', toggleReadBook);


    const deleteBook = document.createElement('button');
    deleteBook.classList.add('btn');
    deleteBook.textContent = "Delete";
   
    deleteBook.addEventListener('click', deleteBookButton);

    buttonGroup.append(toggleRead, deleteBook);

    newBook.append(newBook_name, newBook_author, newBook_description, buttonGroup);
    bookContainer.appendChild(newBook);
    
}

function showNewBook() {
    newBookObject = myLibrary[myLibrary.length-1];
    createBookCard(newBookObject, myLibrary.length-1);
}

function refreshBooks() {

    removeAllChildNodes(bookContainer);

    myLibrary.forEach((b, index) => {
        createBookCard(b, index);
    });

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



//Event Listeners
toggleBtn.onclick = toggleFormVisibility;
addBookForm.onsubmit = addBook;
overlay.onclick = closeAddBookModal;






//Local Storage

















