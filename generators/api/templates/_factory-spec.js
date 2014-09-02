/*globals inject, beforeEach, describe, it, expect, module*/
/*jshint expr: true*/
describe('<%= moduleName %>', function () {

  var $httpBackend, <%= mockDataName %>, resourceURL;

  beforeEach( module('<%= moduleMockDataName %>'));
  beforeEach( module('<%= moduleName %>'));

  beforeEach(inject(function (_$httpBackend_, _<%= mockDataName %>_, <%= factoryName %>Config) {
    $httpBackend = _$httpBackend_;
    <%= mockDataName %> = _<%= mockDataName %>_;
    resourceURL = <%= factoryName %>Config.BASE_URL + '/' + <%= factoryName %>Config.RESOURCE_NAME;
  }));

  it('should have a getAll function that makes a GET request to <%= baseUrl + '/' + resourceName %> and returns an array', inject(function (<%= factoryInstance %>) {
    $httpBackend.expectGET(resourceURL).respond(<%= mockDataName %>);
    <%= factoryInstance %>.getAll().then(
      function (resp) {
        expect(angular.isArray(resp)).to.be.true;
      }
    );
    $httpBackend.flush();

  }));

});