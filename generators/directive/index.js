'use strict';
var yeoman = require('yeoman-generator'),
  _ = require('lodash'),
  nameHelper = require('../../lib/name-helper.js');


var DirectiveGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    _.assign(this, this.config.getAll());

    this.camelizedName = nameHelper.camelize(this.name);
    this.hyphenatedName = nameHelper.hyphenate(this.name);
    this.classifiedName = nameHelper.classify(this.name);
    this.templatePath = '/components/' + this.hyphenatedName + '/' + this.hyphenatedName + '.html';
    this.moduleName = this.vendorPrefix + '.components.' + this.classifiedName;
    this.styleName = this.camelizedName;

    this.viewFilename = this.hyphenatedName;
    this.viewPath = 'app/components/' + this.hyphenatedName + '/';


    this.directiveFilename = this.hyphenatedName + '.js';
    this.directiveSpecFilename = this.hyphenatedName + '-spec.js';
  },

  files: function () {
    this.template('_directive.js', this.viewPath + this.directiveFilename);
    this.template('_directive-spec.js', this.viewPath + this.directiveSpecFilename);
    this.template('_view.jade', this.viewPath + this.viewFilename + '.jade');
    this.template('_view.scss', this.viewPath + this.viewFilename + '.scss');
  }
});

module.exports = DirectiveGenerator;