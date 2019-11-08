import express = require('express');

var app = express();
var dir = __dirname;

app.use(express.static(dir));

app.listen(1337, function () {
    console.log('Listening on http://localhost:1337/');
});

