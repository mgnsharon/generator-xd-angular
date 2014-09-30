'use strict';
var util = require('util'),
  path = require('path'),
  yeoman = require('yeoman-generator'),
  _ = require('lodash'),
  _s = require('underscore.string');


var ApiGenerator = yeoman.generators.NamedBase.extend({
  constructor: function () {
    yeoman.generators.NamedBase.apply(this, arguments);
    this.argument('baseUrl', {
      desc: 'The base url of your resource.',
      required: true,
      type: 'String',
      defaults: '/api/v1'
    });
    this.argument('resourceName', {
      desc: 'The pluralized name of your resource.',
      required: true,
      type: 'String'
    });
  },

  init: function () {
    _.assign(this, this.config.getAll());
    this.resourceName = _s.camelize(this.resourceName);
    this.factoryName = _s.classify(this.name);
    this.factoryInstance = _s.camelize(this.name);
    this.dasherizedName = _s.dasherize(this.name);
    this.servicePath = 'app/api/' + this.dasherizedName + '/';
    this.moduleName = this.vendorPrefix + '.api.' + this.factoryName;
    this.mockName = this.factoryName + 'Mock';
    this.mockDataName = this.factoryName + 'MockData';
    this.moduleMockName = this.vendorPrefix + '.api.' + this.mockName;
    this.moduleMockDataName = this.vendorPrefix + '.api.' + this.mockDataName;

    this.filename = this.dasherizedName + '.js';
    this.specFilename = this.dasherizedName + '-spec.js';
    this.mockFilename = this.dasherizedName + '-mock.js';
    this.mockDataFilename = this.dasherizedName + '-mock-data.js';
  },

  files: function () {
    this.template('_factory.js', this.servicePath + this.filename);
    this.template('_factory-spec.js', this.servicePath + this.specFilename);
    this.template('_factory-mock.js', this.servicePath + this.mockFilename);
    this.template('_factory-mock-data.js', this.servicePath + this.mockDataFilename);
  }
});

module.exports = ApiGenerator;