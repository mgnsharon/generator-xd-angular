(function () {

  /**
   * @ngdoc directive
   * @name <%= moduleName %>:<%= camelizedName %>
   * @restrict EA
   * @element any
   * @function
   * @description
   */
  angular.module('<%= moduleName %>', ['<%= vendorPrefix %>.tmpls'])
    .directive('<%= camelizedName %>', <%= classifiedName %>);

  /* @ngInject */
  function <%= classifiedName %>() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: '<%= templatePath %>'
    };
  }

})();