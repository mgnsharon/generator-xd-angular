'use strict';
var yeoman = require('yeoman-generator'),
  _ = require('lodash'),
  nameHelper = require('../../lib/name-helper.js');


var ViewGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    _.assign(this, this.config.getAll());
    this.camelizedName = nameHelper.camelize(this.name);
    this.hyphenatedName = nameHelper.hyphenate(this.name);
    this.classifiedName = nameHelper.classify(this.name);

    this.viewFilename = this.hyphenatedName;
    this.viewPath = 'app/views/' + this.viewFilename + '/';
    this.moduleName = this.vendorPrefix + '.views.' + this.classifiedName;
    this.styleName = this.camelizedName;

    this.ctrlName = this.classifiedName.concat('Ctrl');
    this.ctrlInstance = this.camelizedName.concat('Ctrl');
    this.ctrlFilename = this.viewFilename.concat('-ctrl.js');
    this.ctrlSpecFilename = this.viewFilename.concat('-ctrl-spec.js');
  },

  files: function () {
    this.template('_controller.js', this.viewPath + this.ctrlFilename);
    this.template('_controller-spec.js', this.viewPath + this.ctrlSpecFilename);
    this.template('_view.jade', this.viewPath + this.viewFilename + '.jade');
    this.template('_view.scss', this.viewPath + this.viewFilename + '.scss');
  }
});

module.exports = ViewGenerator;