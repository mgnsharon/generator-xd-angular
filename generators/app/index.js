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
var mout = require('mout').string;
var nameHelper = require('../../lib/name-helper.js');

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
        validate: function (input){
          if (_.isString(input)) {
            if (input.length >= 2 && input !== 'ng' && input.match(/^[a-zA-Z]*$/)) return true;
          }
          return "Please enter 2 or more lower case letters, but not 'ng'.";
        }
      },
      {
        name: 'repoUrl',
        message: 'What is your repository url?',
        default: ''
      },
      {
        name: 'webserver',
        type: 'list',
        message: 'Which dev server would you like?',
        choices: ['gulp-webserver', 'express']
      }
    ];

    this.prompt(prompts, function (props) {
      _.assign(this, props);
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
    this.mkdir('lib');
    this.mkdir('lib/tasks');
    if (this.webserver === 'express') {
      this.mkdir('srv');
      this.mkdir('srv/lib');
      this.mkdir('srv/lib/config');
    }
    this.mkdir('test');
    this.mkdir('app/components');
    this.mkdir('app/filters');
    this.mkdir('app/partials');
    this.mkdir('app/services');
    this.mkdir('app/views');
  },

  executeTemplates: function () {
    this.projectSlug = mout.hyphenate(this.projectName);
    this.appName = mout.pascalCase(this.projectName);
    this.appTitle = nameHelper.titleize(this.projectName);
    var ctrlName = _s.underscored(this.appName).concat('_ctrl');
    this.controllerName = _s.classify(ctrlName);

    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');
    this.template('_gulpfile.js', 'gulpfile.js');
    this.template('app/_app.js', 'app/app.js');
    this.template('app/_app.scss', 'app/app.scss');
    this.template('app/partials/_layout.jade', 'app/partials/layout.jade');
    this.template('app/partials/_scripts.jade', 'app/partials/scripts.jade');
    this.template('app/_index.jade', 'app/index.jade');
    this.template('app/views/test1/_test1.js', 'app/views/test1/test1.js');
    this.template('app/views/test1/_test1.jade', 'app/views/test1/test1.jade');
    this.template('app/views/test2/_test2.js', 'app/views/test2/test2.js');
    this.template('app/views/test2/_test2.jade', 'app/views/test2/test2.jade');
    this.template('lib/_config.js', 'lib/config.js');
    this.template('lib/tasks/_copy.js', 'lib/tasks/copy.js');
    this.template('lib/tasks/_create-styles.js', 'lib/tasks/create-styles.js');
    this.template('lib/tasks/_create-templates.js', 'lib/tasks/create-templates.js');
    this.template('lib/tasks/_lint.js', 'lib/tasks/lint.js');
    this.template('lib/tasks/_serve.js', 'lib/tasks/serve.js');
    this.template('lib/tasks/_unit-test.js', 'lib/tasks/unit-test.js');

    if (this.webserver === 'express') {
      this.template('srv/_server.js', 'srv/server.js');
      this.template('srv/lib/config/_express.js', 'srv/lib/config/express.js');
      this.template('srv/lib/config/_routes.js', 'srv/lib/config/routes.js');
      this.template('srv/lib/config/_config.js', 'srv/lib/config/config.js');
    }
  }

});

module.exports = XdCodeGenerator;