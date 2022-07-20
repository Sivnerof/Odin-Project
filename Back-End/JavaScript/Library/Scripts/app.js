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

// Notes
/**
 *  3. Write a function that loops through the array and displays each book on the page. 
 *  You can display them in some sort of table, or each on their own “card”. 
 *  It might help for now to manually add a few books to your array so you can see the display.
 *  
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