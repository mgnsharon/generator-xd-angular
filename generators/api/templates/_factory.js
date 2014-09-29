(function () {
  var <%= factoryName %>Config = {
    BASE_URL: '<%= baseUrl %>',
    RESOURCE_NAME: '<%= resourceName %>'
  };

  angular.module('<%= moduleName %>', ['restangular'])
    .constant('<%= factoryName %>Config', <%= factoryName %>Config)
    .factory('<%= factoryInstance %>', <%= factoryName %>);

  /* @ngInject */
  function <%= factoryName %>(Restangular, <%= factoryName %>Config) {
    var resource = Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl(<%= factoryName %>Config.BASE_URL);
    });

    var <%= resourceName %> = resource.all(<%= factoryName %>Config.RESOURCE_NAME);

    //Public API
    return {
      getAll: function () {
        return <%= resourceName %>.getList();
      },
      get: function (id) {
        return <%= resourceName %>.get(id);
      },
      create: function (data) {
        return <%= resourceName %>.post(data);
      },
      save: function (data) {
        return data.save();
      },
      remove: function (data) {
        return data.remove();
      }
    };
  }

})();