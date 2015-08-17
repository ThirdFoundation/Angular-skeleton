var tieredAngularSeed = angular.module('tieredAngularSeed', ['ngRoute']);

//TODO: Refactor with Mel
tieredAngularSeed.config(function($routeProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: 'partials/mainTemplate.html',
      controller:  'MainController'
    }).when('/:view', {
      templateUrl: 'partials/viewTemplate.html',
      controller:  'ViewController'
    }).when('/:view/:subpage', {
      templateUrl: 'partials/subpageTemplate.html',
      controller:  'SubpageController'
    }).otherwise({
      redirectTo: '/main'
    });
});

tieredAngularSeed.controller('MainController', function($scope) {
});

tieredAngularSeed.controller('ViewController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.view = $routeParams.view;
    $http.get('json/' + $routeParams.view + '.json').success(function(data) {
      $scope.snippets = data;
    });
}]);

tieredAngularSeed.controller('SubpageController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/subpages/' + $routeParams.subpage + '.json').success(function(data) {
      $scope.contents = data;
    });
}]);
