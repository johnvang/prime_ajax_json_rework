var express = require('express');
var colors = require('../models/colors.json');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    console.log("Hit empty route");
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getColors', function(req, res){
    console.log("Hit getColors route");
    res.send(colors);
});

var server = app.listen(3004, function(){
    var port = server.address().port;
    console.log("Listening on port: ", port);
});

module.exports = app;

