(function () {

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