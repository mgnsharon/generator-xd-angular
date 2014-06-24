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
    this.moduleName = this.vendorPrefix + '.services.' + _s.camelize(this.name);
    this.factoryName = _s.camelize(this.name);
    this.factoryFilename = _s.dasherize(this.name) + '.js';
    this.factorySpecFilename = _s.dasherize(this.name) + '-spec.js';
  },

  files: function () {
    this.template('_factory.js', this.servicePath + this.factoryFilename);
    this.template('_factory-spec.js', this.servicePath + this.factorySpecFilename);
  }
});

module.exports = FactoryGenerator;