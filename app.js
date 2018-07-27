''
const express = require('express');
var mainController = require('./controllers/mainController');

var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

mainController(app);

app.listen(3000);
console.log("Server is now open. Port 3000")
