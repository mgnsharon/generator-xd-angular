/*globals inject, beforeEach, describe, it, expect, module*/
describe('<%= moduleName %>', function () {

  beforeEach( module('<%= moduleName %>'));
  var scope, ctrl;
  beforeEach( inject( function ($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('<%= ctrlInstance %> as vm', { $scope: scope });
  }));


  it('should have scope', function () {
    expect(scope.vm.name).to.equal('<%= ctrlName %>');
  });

});