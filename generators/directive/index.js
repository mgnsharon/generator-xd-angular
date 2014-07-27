'use strict';
var util = require('util'),
  path = require('path'),
  yeoman = require('yeoman-generator'),
  _ = require('lodash'),
  _s = require('underscore.string');


var DirectiveGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    _.assign(this, this.config.getAll());

    this.directiveName = _s.camelize(this.name);
    this.directiveTag = _s.dasherize(this.name);
    this.templatePath = '/components/' + _s.dasherize(this.name) + '/' + _s.dasherize(this.name) + '.html';
    this.moduleName = this.vendorPrefix + '.components.' + _s.camelize(this.name);
    this.styleName = _s.camelize(this.name);

    this.viewPath = 'app/components/' + _s.dasherize(this.name) + '/';
    this.viewFilename = _s.dasherize(this.name);

    this.directiveFilename = _s.dasherize(this.name) + '.js';
    this.directiveSpecFilename = _s.dasherize(this.name) + '-spec.js';
  },

  files: function () {
    this.template('_directive.js', this.viewPath + this.directiveFilename);
    this.template('_directive-spec.js', this.viewPath + this.directiveSpecFilename);
    this.template('_view.jade', this.viewPath + this.viewFilename + '.jade');
    this.template('_view.scss', this.viewPath + this.viewFilename + '.scss');
  }
});

module.exports = DirectiveGenerator;