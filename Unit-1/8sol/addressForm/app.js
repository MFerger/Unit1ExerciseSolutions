var app = angular.module('form', [])
.controller('MainController', function($scope){
  $scope.view = {};
  $scope.view.test = 'this is a test';
  $scope.contacts = [];

  $scope.addForm = function (){
    // $scope.contact = $scope.form;
    $scope.contacts.push($scope.form)
    $scope.form = {};
  }
  $scope.addColor = function (){
    console.log('it got here');
    $scope.view.color = 'yellow';
  }
});
