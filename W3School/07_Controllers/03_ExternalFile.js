var app = angular.module('app', []);

app.controller('ctrl', function($scope){
  $scope.firstName = 'ASDF';
  $scope.lastName  = '1020';
  $scope.fullName = function() {
    return $scope.firstName + ' ' + $scope.lastName;
  };
});