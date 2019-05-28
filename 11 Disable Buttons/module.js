//  모듈 선언
var app = angular.module('myApp', []);

//  myApp 모듈에 컨트롤러를 추가한다.
app.controller('AppCtrl', function AppCtrl($scope){
  //  name이라는 ng-model에 Guest 라는 값을 넣는다.
  $scope.name = 'Angular';
});