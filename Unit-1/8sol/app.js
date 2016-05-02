var app = angular.module('form', [])
.controller('selectedForm', function($scope){
  $scope.view = {};
  $scope.form = {};
  $scope.view.test = "this is a test";
  $scope.showIt = false;
  $scope.addressLabel = 'Your address...';

  $scope.addressForm = function (){
    $scope.showIt = true;
    $scope.address = $scope.form;
    $scope.form = {};
  }
});
