/*jshint node:true, es3:false*/
/**
 * Created by csharon on 6/22/14.
 */
'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('lodash');

var XdCodeGenerator = yeoman.generators.Base.extend({

  init: function () {
    this.pkg = require('../../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    this.log(yosay('Welcome to the marvelous XdCode generator!'));

    var prompts = [
      {
        name: 'projectName',
        message: 'Project Name?',
        default: path.basename(process.cwd())
      },
      {
        name: 'vendorPrefix',
        message: 'What vendor prefix would you like to use for your directives?',
        default: ''
      }
    ];

    this.prompt(prompts, function (props) {
      _.extend(this, props);
      this.config.set(props);

      done();
    }.bind(this));
  },

  copyProjectFiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('karma.conf.js', 'karma.conf.js');
    this.copy('karma-common-conf.js', 'karma-common-conf.js');
  },

  createDirectoryStructure: function () {
    this.mkdir('app');
    this.mkdir('srv');
    this.mkdir('test');
    this.mkdir('app/components');
    this.mkdir('app/filters');
    this.mkdir('app/partials');
    this.mkdir('app/services');
    this.mkdir('app/views');
    this.mkdir('srv/lib');
    this.mkdir('srv/lib/config');
  },

  executeTemplates: function () {
    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');
    this.template('_gulpfile.js', 'gulpfile.js');
    this.template('app/_app.js', 'app/app.js');
    this.template('app/_app.sass', 'app/app.sass');
    this.template('app/partials/_layout.jade', 'app/partials/layout.jade');
    this.template('app/partials/_scripts.jade', 'app/partials/scripts.jade');
    this.template('app/_index.jade', 'app/index.jade');
    this.template('app/views/test1/_test1.js', 'app/views/test1/test1.js');
    this.template('app/views/test1/_test1.jade', 'app/views/test1/test1.jade');
    this.template('app/views/test2/_test2.js', 'app/views/test2/test2.js');
    this.template('app/views/test2/_test2.jade', 'app/views/test2/test2.jade');
    this.template('srv/_server.js', 'srv/server.js');
    this.template('srv/lib/config/_express.js', 'srv/lib/config/express.js');
    this.template('srv/lib/config/_routes.js', 'srv/lib/config/routes.js');
    this.template('srv/lib/config/_config.js', 'srv/lib/config/config.js');
  }

});

module.exports = XdCodeGenerator;