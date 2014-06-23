angular.module('<%= _.camelize(projectName) %>', [
    'ui.router',
    '<%= vendorPrefix %>.tmpls',
    '<%= vendorPrefix %>.views.test1',
    '<%= vendorPrefix %>.views.test2'
  ])
  .config(function($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider
      .state('test1', { url: '/test1', templateUrl: '/views/test1/test1.html', controller: 'test1Ctrl'})
      .state('test2', { url: '/test2', templateUrl: '/views/test2/test2.html', controller: 'test2Ctrl'});

    $urlRouterProvider.otherwise('/test1');
  })

  .controller('<%= _.camelize(projectName) %>Ctrl', function ($scope) {
    $scope.appName = '<%= _.camelize(projectName) %>';
  });