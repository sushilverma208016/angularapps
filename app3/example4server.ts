
import { Book } from "./myapp/book";

var express = require('express');
var app = express();

app.use(express.static('.'));
app.use(express.static('/myapp'));

app.get ( "/book", function(req, res) {
    let book = new Book("T1");
    res.json(book);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});