(function () {

  /* @ngInject */
  function config ($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider
      .state('test1', { url: '/test1', templateUrl: '/views/test1/test1.html', controller: 'Test1Ctrl', controllerAs: 'vm'})
      .state('test2', { url: '/test2', templateUrl: '/views/test2/test2.html', controller: 'Test2Ctrl', controllerAs: 'vm'});

    $urlRouterProvider.otherwise('/test1');
  }

  /* @ngInject */
  function <%= controllerName %> () {
    var vm = this;
    vm.appTitle = '<%= appTitle %>';
  }

  angular.module('<%= appName %>', [
    'ui.router',
    '<%= vendorPrefix %>.tmpls',
    '<%= vendorPrefix %>.views.test1',
    '<%= vendorPrefix %>.views.test2'
  ])
    .config(config)

    .controller('<%= controllerName %>', <%= controllerName %>);
})();