(function () {

  /* ngInject */
  function Test2Ctrl() {
    var vm = this;
    vm.heading = 'Test 2';
  }

  angular.module('<%= vendorPrefix %>.views.test2', [])
    .controller('Test2Ctrl', Test2Ctrl);

})();