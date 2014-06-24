var helpers = require('yeoman-generator').test,
  path = require('path'),
  rimraf = require('rimraf'),
  assert = require('yeoman-generator').assert;

describe('App Generator', function () {

  var appGen;

  before(function(done) {

    appGen = helpers.run(path.join( __dirname, '../generators/app'))
      .inDir(path.join( __dirname, './tmp'))  // Clear the directory and set it as the CWD
      .withPrompt({ projectName: 'xd-test', vendorPrefix: 'xd', repoUrl: 'git@github.com/user/repo.git' })          // Mock the prompt answers
      .withOptions({"skip-install": true})
      .onEnd(done)
  });

  it('should have saved the prompt resonpses to the .yo-rc.json file', function () {
    assert.equal(appGen.generator.config.get('projectName'), 'xd-test');
    assert.equal(appGen.generator.config.get('vendorPrefix'), 'xd');

  });

  afterEach(function (done) {
    rimraf(path.join( __dirname, './tmp'), done);
  });

});