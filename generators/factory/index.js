'use strict';
var yeoman = require('yeoman-generator'),
  _ = require('lodash'),
  nameHelper = require('../../lib/name-helper.js');


var FactoryGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    _.assign(this, this.config.getAll());
    this.camelizedName = nameHelper.camelize(this.name);
    this.hyphenatedName = nameHelper.hyphenate(this.name);
    this.classifiedName = nameHelper.classify(this.name);

    this.servicePath = 'app/services/' + this.hyphenatedName + '/';
    this.moduleName = this.vendorPrefix + '.services.' + this.classifiedName;
    this.factoryName = this.classifiedName;
    this.factoryInstance = this.camelizedName;
    this.filename = this.hyphenatedName + '.js';
    this.specFilename = this.hyphenatedName + '-spec.js';
  },

  files: function () {
    this.template('_factory.js', this.servicePath + this.filename);
    this.template('_factory-spec.js', this.servicePath + this.specFilename);
  }
});

module.exports = FactoryGenerator;