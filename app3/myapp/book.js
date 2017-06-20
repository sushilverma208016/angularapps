"use strict";
var Book = (function () {
    function Book(title) {
        this.title = title;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map