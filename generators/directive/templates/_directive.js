angular.module('<%= moduleName %>', ['<%= vendorPrefix %>.tmpls'])
  .directive('<%= directiveName %>', function () {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: '<%= templatePath %>'
    };
  });