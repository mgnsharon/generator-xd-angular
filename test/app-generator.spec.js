var helpers = require('yeoman-generator').test,
  path = require('path'),
  assert = require('yeoman-generator').assert;

describe('App generator', function () {

  var appGen;

  before(function(done) {
    //appGen = helpers.createGenerator('xd-angular');
    //helpers.mockPrompt(appGen, { projectName: 'xd-test', vendorPrefix: 'xd' });

    appGen = helpers.run(path.join( __dirname, '../generators/app'))
      .inDir(path.join( __dirname, './tmp'))  // Clear the directory and set it as the CWD
      .withPrompt({ projectName: 'xd-test', vendorPrefix: 'xd' })          // Mock the prompt answers
      .onEnd(done)
  });

  it('should have saved the prompt resonpses to the .yo-rc.json file', function () {
    assert.equal(appGen.generator.config.get('projectName'), 'xd-test');
    assert.equal(appGen.generator.config.get('vendorPrefix'), 'xd');
  });

});