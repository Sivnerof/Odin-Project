# Library #

A project to build a library application from [The Odin Projects](https://www.theodinproject.com/ "Odin Project Website") course on full stack development. View application requirements [here](https://www.theodinproject.com/lessons/node-path-javascript-library "Project Requirements") or continue reading.

## Assignment ##

1. If you haven’t already, set up your project with skeleton HTML/CSS and JS files.

2. All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

```javascript

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
```
3. Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
Add a button on each book’s display to remove the book from the library.

    1. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

4. Add a button on each book’s display to change its `read` status.

    1. To facilitate this you will want to create the function that toggles a book’s `read` status on your `Book` prototype instance.

---
### Attributions ###
* [Book icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/book "Favicon Website")
* [CSS Reset](https://meyerweb.com/eric/tools/css/reset/ "Reset Style Sheet") created by [Eric Meyers](https://twitter.com/meyerweb "Erics Twitter")