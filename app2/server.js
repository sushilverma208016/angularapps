"use strict";
var option_1 = require("./myapp/option");
var question_1 = require("./myapp/question");
var express = require('express');
var app = express();
app.use(express.static('.'));
app.use(express.static('/myapp'));
// Delay Middleware ----------------------------------
function addDelay(url, time) {
    var delay = function (req, res, next) {
        setTimeout(function () { next(); }, time);
    };
    app.use(url, delay);
}
addDelay("/questions", 2000);
//----------------------------------------------------
app.get('/questions', function (req, res) {
    var questions = [
        new question_1.Question("AAA", [new option_1.Option("A1", true, 5), new option_1.Option("A2", false, 3)]),
        new question_1.Question("BBB", [new option_1.Option("B1", true, 5), new option_1.Option("B2", false, 3), new option_1.Option("B3", true, 5)]),
        new question_1.Question("CCC", [new option_1.Option("C1", false, 5)])
    ];
    res.json(questions);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
// console.log ( "Hello");
// setInterval ( function() { console.log("Hello");} , 3000); 
//# sourceMappingURL=server.js.map