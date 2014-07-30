'use strict';
var util = require('util'),
  path = require('path'),
  yeoman = require('yeoman-generator'),
  _ = require('lodash'),
  _s = require('underscore.string');


var ViewGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    _.assign(this, this.config.getAll());
    this.viewFilename = _s.dasherize(this.name);
    this.viewPath = 'app/views/' + this.viewFilename + '/';
    this.moduleName = this.vendorPrefix + '.views.' + _s.classify(this.viewFilename);
    this.styleName = _s.camelize(this.name);

    this.ctrlName = _s.classify(this.viewFilename + '-ctrl');
    this.ctrlFilename = this.viewFilename + '-ctrl.js';
    this.ctrlSpecFilename = this.viewFilename + '-ctrl-spec.js';
  },

  files: function () {
    this.template('_controller.js', this.viewPath + this.ctrlFilename);
    this.template('_controller-spec.js', this.viewPath + this.ctrlSpecFilename);
    this.template('_view.jade', this.viewPath + this.viewFilename + '.jade');
    this.template('_view.scss', this.viewPath + this.viewFilename + '.scss');
  }
});

module.exports = ViewGenerator;