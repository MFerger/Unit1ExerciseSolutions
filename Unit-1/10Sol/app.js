var app = angular.module('form', ['ngAnimate']);

app.controller('MainController', function($scope){
  $scope.test = 'This is a test';
  $scope.vm = {};
  $scope.view = {};
  $scope.view.show = true;

  $scope.animate = function () {
    $scope.view.show = !$scope.view.show;
  }

});
