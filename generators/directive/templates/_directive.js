(function () {

  /* @ngInject */
  function <%= directiveName %>() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: '<%= templatePath %>'
    };
  }

  angular.module('<%= moduleName %>', ['<%= vendorPrefix %>.tmpls'])
    .directive('<%= directiveName %>', <%= directiveName %>);
})();