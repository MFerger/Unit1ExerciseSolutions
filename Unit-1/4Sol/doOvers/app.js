var app = angular.module('form', [])
.controller('selectedForm', function($scope){
  $scope.vm = {};
  $scope.toggle = true;

  $scope.calculatedTip = function () {
    return parseInt($scope.tip)
  }
  $scope.total = function() {
    return parseInt($scope.sub + $scope.calcTip)
  }

});
