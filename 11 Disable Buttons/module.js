//  모듈 선언
var app = angular.module('myApp', []);

//  myApp 모듈에 컨트롤러를 추가한다.
app.controller('AppCtrl', function AppCtrl($scope, nameTrickService) {
  //  name이라는 ng-model에 Guest 라는 값을 넣는다.
  $scope.name = 'Angular';
  console.log('Controller Defined');
  
  //  nameTrickService를 사용하는 스코프 레벨 함수 선언.
  $scope.reverseNameService = function() {
    console.log("service function call");
    $scope.name = nameTrickService.reverse($scope.name);
  };

});

app.service('nameTrickService', function() {
  this.reverse = function(name){
    console.log('Service.reverse');
    return name.split("").reverse().join("");
  };
});
