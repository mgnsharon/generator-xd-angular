/*globals inject, beforeEach, describe, it, expect, module*/
describe('<%= moduleName %>', function () {

  var el, scope;

  beforeEach( module('<%= moduleName %>'));

  beforeEach( inject( function ($rootScope, $compile){
    scope = $rootScope.$new();
    el = angular.element('<<%= directiveTag %>></<%= directiveTag %>>');
    $compile(el, scope);
    scope.$apply();
  }));


  it('should replace with div tag', function () {
    expect(el.prop('tagName')).to.equal('DIV');
  });

});