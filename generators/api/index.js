'use strict';
var yeoman = require('yeoman-generator'),
  _ = require('lodash'),
  nameHelper = require('../../lib/name-helper.js');


var ApiGenerator = yeoman.generators.NamedBase.extend({
  constructor: function () {
    yeoman.generators.NamedBase.apply(this, arguments);
    this.argument('baseUrl', {
      desc: 'The base url of your resource.',
      required: true,
      type: 'String',
      defaults: '/api/v1'
    });
    this.argument('resource', {
      desc: 'The pluralized name of your resource.',
      required: true,
      type: 'String'
    });
  },

  init: function () {
    _.assign(this, this.config.getAll());
    this.camelizedName = nameHelper.camelize(this.name);
    this.hyphenatedName = nameHelper.hyphenate(this.name);
    this.classifiedName = nameHelper.classify(this.name);

    this.resourceName = nameHelper.camelize(this.resource);
    this.factoryName = this.classifiedName;
    this.factoryInstance = this.camelizedName;
    this.servicePath = 'app/api/' + this.hyphenatedName + '/';
    this.moduleName = this.vendorPrefix + '.api.' + this.factoryName;
    this.mockName = this.factoryName + 'Mock';
    this.mockDataName = this.factoryName + 'MockData';
    this.moduleMockName = this.vendorPrefix + '.api.' + this.mockName;
    this.moduleMockDataName = this.vendorPrefix + '.api.' + this.mockDataName;

    this.filename = this.hyphenatedName + '.js';
    this.specFilename = this.hyphenatedName + '-spec.js';
    this.mockFilename = this.hyphenatedName + '-mock.js';
    this.mockDataFilename = this.hyphenatedName + '-mock-data.js';
  },

  files: function () {
    this.template('_factory.js', this.servicePath + this.filename);
    this.template('_factory-spec.js', this.servicePath + this.specFilename);
    this.template('_factory-mock.js', this.servicePath + this.mockFilename);
    this.template('_factory-mock-data.js', this.servicePath + this.mockDataFilename);
  }
});

module.exports = ApiGenerator;