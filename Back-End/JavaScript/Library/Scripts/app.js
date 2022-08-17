// Globals
const myLibrary = [];
let dataIndex = -1;

// Elements
const openFormButton = document.querySelector('.open-form-button');
const deleteAllButton = document.querySelector('.delete-all-button');
const addBookButton = document.querySelector('.add-book-button');
const booksSection = document.querySelector('.books');


// Book Constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Info Method Added To Book Prototype
Book.prototype.info = function (){
    return `${this.title} by ${this.author}, ${this.pages} pages, READ = ${this.read}`;
}

// Returns a Book object
function createBook (title, author, pages, readStatus){
    return new Book(title, author, pages, readStatus);
}

// Creates a Book and adds it to start of myLibrary Array
function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = createBook(title, author, pages, readStatus);
    myLibrary.unshift(newBook);
    addBookToUI();
}

// Add myLibrary[0] values to newly created elements
function addBookToUI(){
    dataIndex++;
    console.log(dataIndex);
    const section = document.createElement("section");
    const titleH3 = document.createElement("h3"); 
    const authorPara = document.createElement("p");
    const pagePara = document.createElement("p");
    const readStatusPara = document.createElement("p");
    const readStatusButton = document.createElement("button");
    const deleteBookButton = document.createElement("button");

    titleH3.innerText = myLibrary[0]["title"];
    authorPara.innerText = myLibrary[0]["author"];
    pagePara.innerText = myLibrary[0]["pages"];
    readStatusPara.innerText = myLibrary[0]["read"];
    readStatusButton.innerText = "Change Read Status";
    deleteBookButton.innerText = "Delete";

    section.classList.add(`data-index-${dataIndex}`);

    section.appendChild(titleH3);
    section.appendChild(authorPara);
    section.appendChild(pagePara);
    section.appendChild(readStatusPara);
    section.appendChild(readStatusButton);
    section.appendChild(deleteBookButton);

    booksSection.appendChild(section);
}

// Gets read-status from radio buttons
function getReadStatus(){
    const radios = document.getElementsByName('read-status');

    let checkedValue = '';

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            checkedValue = radios[i].value;
            break;
        }
    }

    return checkedValue;
}

// Get Form Data
function getFormData(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = getReadStatus();
    const formArray = [title, author, pages, readStatus];
    return formArray;
}

// Event Listeners

// Event listener for form submit button
addBookButton.addEventListener('click', e => {
    e.preventDefault();
    const formData = getFormData();
    addBookToLibrary(formData[0], formData[1], formData[2], formData[3]);
    console.log(myLibrary);
})

// Event listener to delete all books from DOM
deleteAllButton.addEventListener('click', () => {
    myLibrary.length = 0;
    dataIndex = -1;
    while (booksSection.childNodes.length > 2) {
        booksSection.removeChild(booksSection.lastChild);
    }
})



// Notes
/**
 *  4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: 
 *  author, title, number of pages, whether it’s been read and anything else you might want.
 *  
 *  5. Add a button on each book’s display to remove the book from the library.
 *      A. You will need to associate your DOM elements with the actual book objects in some way. 
 *      One easy solution is giving them a data-attribute that corresponds to the index of the library array.
 *
 *  6. Add a button on each book’s display to change its read status.
 *      A. To facilitate this you will want to create the function that toggles a 
 *      book’s read status on your Book prototype instance.
**/