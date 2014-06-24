angular.module('<%= moduleName %>', [])
  .factory('<%= factoryName %>', function () {

    var _data = [];

    //Public API
    return {
      getData: function () {
        return _data;
      }
    };

  });