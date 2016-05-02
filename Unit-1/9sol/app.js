var app = angular.module('form', [])
.controller('MainController', function($scope){
  $scope.vm = {};
  $scope.user = {};
  $scope.user.userDisplay = false;

  $scope.subForm = function(){
    $scope.user = $scope.vm;
    $scope.user.userDisplay = true;
    $scope.vm = {};
    $scope.myForm.$setUntouched();
  }
})
