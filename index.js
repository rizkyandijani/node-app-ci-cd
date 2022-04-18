var express = require('express');
 
var app = express();

app.get('/', function (req, res) {
    res.send('hello Indonesia');
});

app.get('/user', function (req, res) {
    res.send('hello Indonesian User');
});

app.listen(process.env.PORT || 3000);
 
module.exports = app;