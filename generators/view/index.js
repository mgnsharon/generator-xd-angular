'use strict';
var util = require('util'),
  path = require('path'),
  yeoman = require('yeoman-generator'),
  _ = require('lodash'),
  _s = require('underscore.string');


var ViewGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    _.assign(this, this.config.getAll());
    this.viewPath = 'app/views/' + _s.dasherize(this.name) + '/';
    this.moduleName = this.vendorPrefix + '.views.' + _s.camelize(this.name);
    this.styleName = _s.camelize(this.name);
    this.viewFilename = _s.dasherize(this.name);
    this.ctrlName = _s.camelize(this.name) + 'Ctrl';
    this.ctrlFilename = _s.dasherize(this.name) + '-ctrl.js';
    this.ctrlSpecFilename = _s.dasherize(this.name) + '-ctrl-spec.js';
  },

  files: function () {
    this.template('_controller.js', this.viewPath + this.ctrlFilename);
    this.template('_controller-spec.js', this.viewPath + this.ctrlSpecFilename);
    this.template('_view.jade', this.viewPath + this.viewFilename + '.jade');
    this.template('_view.sass', this.viewPath + this.viewFilename + '.sass');
  }
});

module.exports = ViewGenerator;