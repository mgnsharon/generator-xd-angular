/*globals inject, beforeEach, describe, it, expect, module*/
/*jshint expr: true*/
describe('<%= moduleName %>', function () {

  beforeEach( module('<%= moduleName %>'));

  it('should have a data function that returns an array', inject(function (<%= factoryInstance %>) {
    expect(angular.isArray(<%= factoryInstance %>.getData())).to.be.true;
  }));

});