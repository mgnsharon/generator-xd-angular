(function () {

  /* @ngInject */
  function <%= ctrlName %>() {
    var vm = this;
    vm.name = '<%= ctrlName %>';
  }

  angular.module('<%= moduleName %>', [])
    .controller('<%= ctrlInstance %>', <%= ctrlName %>);

})();

