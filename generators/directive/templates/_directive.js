(function () { 
  angular.module('<%= moduleName %>', ['<%= vendorPrefix %>.tmpls'])
    .directive('<%= directiveName %>', <%= directiveName %>);

  /* @ngInject */
  function <%= directiveName %>() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: '<%= templatePath %>'
    };
  }

})();