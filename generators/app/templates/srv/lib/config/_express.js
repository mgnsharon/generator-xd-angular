var express = require('express'),
  logger = require('morgan'),
  methodOverride = require('method-override'),
  cookieParser = require('cookie-parser');

module.exports = function (app, config) {

  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(methodOverride());

  app.use(express.static(config.webRoot));

};