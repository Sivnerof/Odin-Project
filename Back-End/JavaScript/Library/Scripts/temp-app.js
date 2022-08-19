// Globals
const myLibrary = [];
let dataIndex = 0;

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
    myLibrary.push(newBook);
    addBookToUI();
}

// Add new book values to newly created elements
function addBookToUI(){
    const section = document.createElement("section");
    const titleH3 = document.createElement("h3"); 
    const authorPara = document.createElement("p");
    const pagePara = document.createElement("p");
    const readStatusPara = document.createElement("p");
    const readStatusButton = document.createElement("button");
    const deleteBookButton = document.createElement("button");

    titleH3.innerText = myLibrary[dataIndex]["title"];
    authorPara.innerText = myLibrary[dataIndex]["author"];
    pagePara.innerText = myLibrary[dataIndex]["pages"];
    readStatusPara.innerText = myLibrary[dataIndex]["read"];
    readStatusButton.innerText = "Change Read Status";
    deleteBookButton.innerText = "Delete";

    section.appendChild(titleH3);
    section.appendChild(authorPara);
    section.appendChild(pagePara);
    section.appendChild(readStatusPara);
    section.appendChild(readStatusButton);
    section.appendChild(deleteBookButton);
    section.setAttribute("data-index", dataIndex);

    booksSection.appendChild(section);

    updateStatus(dataIndex, readStatusButton, readStatusPara);
    deleteBook(dataIndex, deleteBookButton);

    dataIndex++;
}

// Change read status of para element at stored index
function updateStatus(index, button, para){
    button.addEventListener('click', () => {
        if (para.innerText === 'read'){
            myLibrary[index]["read"] = 'unread';
            para.innerText = 'unread';
        } else {
            myLibrary[index]["read"] = 'read';
            para.innerText = 'read';
        }
    });
}

// Delete book section from DOM
function deleteBook(index, button){
    button.addEventListener('click', () => {
        const bookToRemove = document.querySelector(`[data-index='${index}']`);
        bookToRemove.remove();
        myLibrary.splice(index, 1);
    });
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
})

// Event listener to delete all books from DOM
deleteAllButton.addEventListener('click', () => {
    myLibrary.length = 0;
    dataIndex = 0;
    while (booksSection.childNodes.length > 2) {
        booksSection.removeChild(booksSection.lastChild);
    }
})



// Notes
/**
 *  5. Add a button on each book’s display to remove the book from the library.
 *      A. You will need to associate your DOM elements with the actual book objects in some way. 
 *      One easy solution is giving them a data-attribute that corresponds to the index of the library array.
 *
 *  6. Add a button on each book’s display to change its read status.
 *      A. To facilitate this you will want to create the function that toggles a 
 *      book’s read status on your Book prototype instance.
**/