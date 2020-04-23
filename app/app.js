var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'myController',
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'
    })
    .when('/contact-success', {
      templateUrl: 'views/contact-success.html',
      controller: 'ContactController'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'myController',
    })
    .otherwise({
      redirectTo: '/home',
    });
}]);

myApp.directive('randomGuy', [function () {
  return {
    restrict: 'E',
    scope: {
      guys: '=',
      title: '=',
    },
    templateUrl: 'views/random.html',
    controller: function ($scope) {
      $scope.random = Math.floor(Math.random() * 4);
    }
  };

}]);

myApp.controller('ContactController', ['$scope', '$location', function ($scope, $location) {
  $scope.sendMessage = function () {
    $location.path('contact-success');
  }
}]);