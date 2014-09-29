var chai = require('chai'),
  expect = chai.expect,
  nameHelper = require('../lib/name-helper.js');

chai.config.includeStack = false;

describe.only('nameHelper', function () {

  describe('classify', function () {
    it('should output a class name given a dasherized name', function () {
      expect(nameHelper.classify('test-class')).to.be.equal('TestClass')
    });

    it('should output a class name given a camelized name', function () {
      expect(nameHelper.classify('testClass')).to.be.equal('TestClass')
    });

    it('should output a class name given a underscored name', function () {
      expect(nameHelper.classify('test_class')).to.be.equal('TestClass')
    });

    it('should output a class name given a classified name', function () {
      expect(nameHelper.classify('TestClass')).to.be.equal('TestClass')
    });

    it('should capitalize the first letter given an all lower case name', function () {
      expect(nameHelper.classify('testclass')).to.be.equal('Testclass')
    });
  })

  describe('titleize', function () {
    it('should titleize a dasherized name', function () {
      expect(nameHelper.titleize('test-class')).to.be.equal('Test Class')
    });

    it('should titleize a camelized name', function () {
      expect(nameHelper.titleize('testClass')).to.be.equal('Test Class')
    });

    it('should titleize an underscored name', function () {
      expect(nameHelper.titleize('test_class')).to.be.equal('Test Class')
    });

    it('should titleize a classified name', function () {
      expect(nameHelper.titleize('TestClass')).to.be.equal('Test Class')
    });

    it('should capitalize the first letter given an all lower case name', function () {
      expect(nameHelper.titleize('testclass')).to.be.equal('Testclass')
    });
  })


});