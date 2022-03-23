const getTheTitles = function(books) {
    let book_list = [];
    for(let i = 0; i < books.length; i++){
        book_list.push(books[i]['title']);
    }
    return book_list;
};

// Do not edit below this line
module.exports = getTheTitles;
