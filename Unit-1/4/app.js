  var app = angular.module('comicBookApp', [])
  .controller('ComicBookController', function($scope){
    $scope.comicBook = 'Saga';
    $scope.tellMe = function() {
      return "OMG I love " + $scope.comicBook
    }
  });
