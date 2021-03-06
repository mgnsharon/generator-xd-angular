(function () {

  /**
   * @ngdoc function
   * @name <%= moduleName %>:<%= ctrlInstance %>
   *
   */
  angular.module('<%= moduleName %>', [])
    .controller('<%= ctrlInstance %>', <%= ctrlName %>);

  /* @ngInject */
  function <%= ctrlName %>() {
    var vm = this;
    vm.name = '<%= ctrlName %>';
  }

})();
