// Globals
const myLibrary = [];

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
    updateUI();
}

// Add new book sections to UI with updated values
function updateUI(){
    while (booksSection.childNodes.length > 2) {
        booksSection.removeChild(booksSection.lastChild);
    }

    myLibrary.forEach((value, index) => {
        const section = document.createElement("section");
        const titleH3 = document.createElement("h3"); 
        const authorPara = document.createElement("p");
        const pagePara = document.createElement("p");
        const readStatusPara = document.createElement("p");
        const readStatusButton = document.createElement("button");
        const deleteBookButton = document.createElement("button");
    
        titleH3.innerText = value["title"];
        authorPara.innerText = value["author"];
        pagePara.innerText = value["pages"];
        readStatusPara.innerText = value["read"];
        readStatusButton.innerText = `Mark ${value["read"]}`;
        deleteBookButton.innerText = "Delete";
        readStatusButton.classList.add("primary-button");
        deleteBookButton.classList.add("secondary-button");

        section.appendChild(titleH3);
        section.appendChild(authorPara);
        section.appendChild(pagePara);
        section.appendChild(readStatusPara);
        section.appendChild(deleteBookButton);
        section.appendChild(readStatusButton);
        section.setAttribute("data-index", index);
        section.classList.add("card");
    
        booksSection.appendChild(section);
    
        updateStatus(index, readStatusButton, readStatusPara);
        deleteBook(index, deleteBookButton);
    });
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
        updateUI();
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

    document.forms[0].reset();

    if(!title || !author || !pages || !readStatus){
        console.log('Enter the correct values');
    } else {
        addBookToLibrary(title, author, pages, readStatus);
    }
}

// Event listener for form submit button
addBookButton.addEventListener('click', e => {
    e.preventDefault();
    getFormData();
})

// Event listener to delete all books from DOM
deleteAllButton.addEventListener('click', () => {
    myLibrary.length = 0;
    updateUI();
})
