(function () {

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

  angular.module('<%= moduleName %>', [])
    .factory('<%= factoryInstance %>', <%= factoryName %>);

})();