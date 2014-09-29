(function () {

  /* ngInject */
  function Test1Ctrl() {
    var vm = this;
    vm.heading = 'Test 1';
  }

  angular.module('<%= vendorPrefix %>.views.test1', [])
    .controller('Test1Ctrl', Test1Ctrl);

})();


