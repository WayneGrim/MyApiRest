// Imports
var express = require('express');

// Instantiate server
var server = express();

// Configure routes
server.get('/', function (req,res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon sferveur</h1>')
});

// Launch server

server.listen(3636, function() {
    console.log('Server running on 3636')
});