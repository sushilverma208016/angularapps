import { Option } from "./myapp/option";
import { Question } from "./myapp/question";

var express = require('express');
var app = express();

app.use(express.static('.'));
app.use(express.static('/myapp'));


// Delay Middleware ----------------------------------
function addDelay(url, time) {
  var delay = function (req, res, next) {
    setTimeout ( function() { next(); }, time ) ;
  };
  app.use(url, delay);
}
addDelay ( "/questions", 2000 );
//----------------------------------------------------



app.get('/questions', function (req, res) {
    let questions : Question[] = [
        new Question("AAA", [ new Option("A1", true, 5), new Option("A2", false, 3) ]),
        new Question("BBB", [ new Option("B1", true, 5), new Option("B2", false, 3), new Option("B3", true, 5) ]),
        new Question("CCC", [ new Option("C1", false, 5)])
    ] ;
    res.json( questions ) ;
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// console.log ( "Hello");

// setInterval ( function() { console.log("Hello");} , 3000);