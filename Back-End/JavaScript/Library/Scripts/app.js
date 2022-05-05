// Globals
let myLibrary = [];

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
function createBook (){
    const title = prompt("Title");
    const author = prompt("Author");
    const pages = prompt("Pages");
    const read = prompt("Read");
    return new Book(title, author, pages, read);
}

// Creates a Book and adds it to start of myLibrary
function addBookToLibrary() {
    const newBook = createBook()
    myLibrary.unshift(newBook);
}