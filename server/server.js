// server.js
var jsonServer = require('json-server');
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');

var server = express();
server.use(morgan('dev'));
//server.use(compression());

server.use('/step-00',express.static('step-00-no-webpack'));
server.use('/step-01',express.static('step-01-hello-webpack'));
server.use('/step-02',express.static('step-02'));
server.use('/step-03',express.static('step-03'));
server.use('/step-04',express.static('step-04'));
server.use('/step-05',express.static('step-05'));
server.use('/step-06',express.static('step-06'));
server.use('/step-07',express.static('step-07'));
server.use('/step-08',express.static('step-08'));
server.use('/step-09',express.static('step-09'));
server.use('/step-10',express.static('step-10'));

server.use('/services', jsonServer.router('db.json'));

server.listen(3000, function () {
  console.log('JSON Server is running')
});