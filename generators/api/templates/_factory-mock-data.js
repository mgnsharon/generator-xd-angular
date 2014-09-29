(function () {

  angular.module('<%= moduleMockDataName %>', []);

  var <%= mockDataName %> = [];

  angular.module('<%= moduleMockDataName %>')
    .value('<%= mockDataName %>', <%= mockDataName %>);
    
})();
