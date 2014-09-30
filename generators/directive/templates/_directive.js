(function () { 
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