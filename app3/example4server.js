"use strict";
var book_1 = require("./myapp/book");
var express = require('express');
var app = express();
app.use(express.static('.'));
app.use(express.static('/myapp'));
app.get("/book", function (req, res) {
    var book = new book_1.Book("T1");
    res.json(book);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=example4server.js.map