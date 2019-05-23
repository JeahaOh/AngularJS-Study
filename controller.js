/*
 * BODY 태그 안에 ng-controller 에서 할당해준 컨트롤러의 이름과 동일한
 * 자바스크립트 함수가 자동으로 매칭된다.
 * ng-controller에서 호출할 때는 scope 파라메터를 따로 넣지 않았지만,
 * 실제 컨트롤러 함수에서는 아래와 같이 $scope 를 파라메터로 받는다.
 * 백그라운드 통신을 위해 $http를 파라메터로 추가해준다.
 */
function PhoneListController($scope, $http)
{
  //jQuery의 ajax 통신과 거의 유사하다.
  $http.get('sample.json').success(
  function(data)
  {
    $scope.phones = data;
  });
   
  //기본값을 미리 번호로 정해주었다.
  //기본값을 정하지 않아도 되지만, 그럴경우 선언된 순서대로 표시된다.
  $scope.orderProperty = "no";
   
  //이렇게 선언된 배열 형태의 데이터 모델은 후에 NG-REPEAT에 의해 사용된다.
}

/** 보다 범용적으로 사용할 수 있는 형태의 $http 사용 예를 알아보자.
 *  성공했을 때와 실패했을 때 처리와, 특별한 컨텐트 타입으로 통신할 때를 위해 헤더 등도 설정 해 보자.
 */
var dataObject = {
  dataNo : $scope.dataNo + "",
  dataName : $scope.dataName,
  dataContent : $scope.dataContent
};

/* 통신 처리 */
$http({
  //  방식
  method: 'POST',
  //  통신할 URL
  url: 'http://localhost/jsonURL',
  //  파라미터로 보낼 데이터
  data: dataObject,
  //  헤더
  headers: {'Content-Type': 'application/json; charset=utf-8'}
})
.success( function(data, status, headers, config ) {
  if( data ){
    /* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
  }  else {
    /* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
  }
})
.error( function(data, status, headers, config ) {
  /* 서버와의 연결이 정상적이지 않을 때 처리 */
  console.log( status );
});