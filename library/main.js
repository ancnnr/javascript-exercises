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
const bookContainer = document.querySelector('.book-container');
const addBookModal = document.getElementById('add-book-modal');
const overlay = document.querySelector('.overlay');
const addBookForm = document.getElementById('new-book-form');



//Functions

const toggleFormVisibility = (e) => {

    addBookForm.reset();
    addBookModal.classList.add('active');
    overlay.classList.add('active');


    // if(e.target.textContent == "Add New Book")
    // {
    //     e.target.textContent = "Hide Form";
    // }

    // else 
    // {
    //     e.target.textContent = "Add New Book";
    // }
    
    // document.querySelectorAll('.form-item').forEach((fi) => {
        
    //     if(fi.style.display == "none")
    //     {
    //         fi.style.display = "flex";
    //     }
        
    //     else 
    //     {
    //         fi.style.display = "none";
    //     }
    // });


    // if(document.getElementById('add-book').style.display == "none")
    // {
        
    //     document.getElementById('add-book').style.display = "block";
    // }

    // else
    // {
    //     document.getElementById('add-book').style.display = "none";
    // }
}

const toggleReadBook = (event) => {

    const id = event.target.parentElement.getAttribute('data-book_index');
    myLibrary[id].toggleRead();
    console.log(myLibrary[id].read);

    if(myLibrary[id].read)
    {
        event.target.textContent = "Mark as unread";
    }
    else{
        event.target.textContent = "Mark as read";
    }

};

const deleteBookButton =  (event) => {
    
    removeBookFromLibrary(event.target.parentElement.getAttribute('data-book_index'));
};

function addBook() {
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const description = document.getElementById("description").value;

    addBookToLibrary(name, author, description);

    document.getElementById('name').value = "";
    document.getElementById('author').value = "";
    document.getElementById('description').value = "";
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

    let newBook = document.createElement('div');
    newBook.classList.add('card');
    newBook.setAttribute('data-book_index', index)

    let newBook_name = document.createElement('h1');
    newBook_name.textContent = book.name;

    let newBook_author = document.createElement('h3');
    newBook_author.textContent = book.author;

    let newBook_description = document.createElement('p');
    newBook_description.textContent = book.description;

    let toggleRead = document.createElement('button');
    toggleRead.classList.add('btn');
    toggleRead.textContent = "Mark as read";
   
    toggleRead.addEventListener('click', toggleReadBook);


    let deleteBook = document.createElement('button');
    deleteBook.classList.add('btn');
    deleteBook.textContent = "Delete";
   
    deleteBook.addEventListener('click', deleteBookButton);

    newBook.append(newBook_name, newBook_author, newBook_description, toggleRead, deleteBook);
    document.querySelector('.book-container').appendChild(newBook);
    
}

function showNewBook() {
    newBookObject = myLibrary[myLibrary.length-1];
    createBookCard(newBookObject, myLibrary.length-1);
}

function refreshBooks() {

    removeAllChildNodes(document.querySelector('.book-container'));

    myLibrary.forEach((b, index) => {
        createBookCard(b, index);
    });

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




//Action Listeners
toggleBtn.addEventListener('click', toggleFormVisibility(e));







//Local Storage

















