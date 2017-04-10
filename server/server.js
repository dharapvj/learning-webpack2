// server.js

// let jsonServer = require('json-server');
let express = require('express');
let morgan = require('morgan');
let compression = require('compression');

let server = express();
server.use(morgan('dev'));

// to compress the content over the wire
server.use(compression());

// to disable caching - use lower options
// let opts = {maxAge: '1y'};
let opts = {maxAge: 0, etag: false, lastModified: false};

server.use('/step-00',express.static('step-00-no-webpack', opts));
server.use('/step-01',express.static('step-01-with-webpack', opts));
server.use('/step-02',express.static('step-02-loaders', opts));
// Step-03 and step-04 make use of Webpack-dev-server and do not need express server.
// server.use('/step-03',express.static('step-04', opts));
// server.use('/step-04',express.static('step-05', opts));
server.use('/step-05',express.static('step-05-code-splitting/dist', opts));

// To enable proxy
// server.use('/services', jsonServer.router('db.json'));

server.listen(3000, function () {
  console.log('Express Server is running');
});