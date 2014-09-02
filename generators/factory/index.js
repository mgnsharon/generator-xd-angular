'use strict';
var util = require('util'),
  path = require('path'),
  yeoman = require('yeoman-generator'),
  _ = require('lodash'),
  _s = require('underscore.string');


var FactoryGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    _.assign(this, this.config.getAll());
    this.servicePath = 'app/services/' + _s.dasherize(this.name) + '/';
    this.moduleName = this.vendorPrefix + '.services.' + _s.classify(this.name);
    this.factoryName = _s.classify(this.name);
    this.factoryInstance = _s.camelize(this.name);
    this.filename = _s.dasherize(this.name) + '.js';
    this.specFilename = _s.dasherize(this.name) + '-spec.js';
  },

  files: function () {
    this.template('_factory.js', this.servicePath + this.filename);
    this.template('_factory-spec.js', this.servicePath + this.specFilename);
  }
});

module.exports = FactoryGenerator;