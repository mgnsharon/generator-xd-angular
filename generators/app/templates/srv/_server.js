/*jshint node:true, es3:false*/

var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var config = require('./lib/config/config')[env];

require('./lib/config/express')(app, config);
require('./lib/config/routes')(app, config);

app.listen(config.port);
console.log('Listening on port ' + config.port + '....');