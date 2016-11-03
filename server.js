var express = require('express');
var path = require('path');
var config = require('./config');

var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(config[process.env.NODE_ENV]['port'], function () {
  console.log('Example app listening on port 3000');
});
