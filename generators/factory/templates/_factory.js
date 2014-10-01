(function () {

  /**
   * @ngdoc service
   * @name <%= moduleName %>:<%= factoryInstance %>
   *
   */
  angular.module('<%= moduleName %>', [])
    .factory('<%= factoryInstance %>', <%= factoryName %>);

  /* @ngInject */
  function <%= factoryName %>() {
    var _data = [];

    //Public API
    return {
      getData: function () {
        return _data;
      }
    };
  }

})();