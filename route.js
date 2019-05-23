/**
 * [경로 설정]
 * 경로(주소)에 따라 다른 뷰를 보여주도록 설정.
 * 모듈의 첫번째 인자 값으로 ng-app의 이름을 설정하고,
 * $routeProvider를 가져와서 설정을 한다.
 */
angular.module('basePoint', [])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    /* 경로 명이 /phones일 때 */
    .when('/phones', {
      /* 해당 경로일 때 페이지 */
      templateUrl: 'partials/phone-list.html',
      /* 해당 경로일 때 사용할 컨트롤러 */
      controller: PhoneListController
    })
    /* 경로 명이 /phones/phoneId일 때 */
    .when('/phones/:phoneId', {
      templateUrl: 'partials/phone-detail.html',
      controller: PhoneDetailController
    })
    /* 그 외의 경로일 때 리다이렉트 함. */
    .otherwise({
      redirectTo: '/phones'
    });
}]);