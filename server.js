const express = require('express');

const serveStatic = require('serve-static');

const path = require('path');

const app = express();

app.use('/', serveStatic ( path.join(__dirname, '/project.html' ) ) );

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/project.html')
})

const port = process.env.PORT || 5555;

app.listen(port);

console.log("Now listening on port " + port);