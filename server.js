var express = require('express');
var path = require('path');
var config = require('./config');

var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
var port = config[process.env.NODE_ENV]['port'];
var host = config[process.env.NODE_ENV]['host'];
app.listen(port, host, function () {
  console.log('Example app listening at '+ host + ':' + port);
});
