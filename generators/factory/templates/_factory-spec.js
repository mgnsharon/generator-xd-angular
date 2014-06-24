/*globals inject, beforeEach, describe, it, expect, module*/
describe('<%= moduleName %>', function () {

  beforeEach( module('<%= moduleName %>'));

  it('should have a data function that returns an array', inject(function (<%= factoryName %>) {
    expect(angular.isArray(<%= factoryName %>.getData())).to.be.true;
  }));

});