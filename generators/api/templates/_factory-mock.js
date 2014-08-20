(function () {

  function <%= mockName %>($httpBackend, <%= mockDataName %>, <%= factoryName %>Config) {
    var URL = <%= factoryName %>Config.BASE_URL + '/' + <%= factoryName %>Config.RESOURCE_NAME;

    $httpBackend.whenGET(URL).respond(<%= mockDataName %>);

    $httpBackend.whenPOST(URL).respond(function (method, url, data) {
      var item = angular.fromJson(data);
      <%= mockDataName %>.push(item);
      return [200, item, {}];
    });
  }

  angular.module('<%= moduleMockName %>', ['ngMockE2E', '<%= moduleMockDataName %>', '<%= factoryName %>Config'])
  .run(<%= mockName %>);
})();