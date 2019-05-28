# AngularJS-Study
Angular Tutorial

# 01 AngularJS의 강점
- 양방향 데이터 바인딩 구현.
- JavaScript 상에서 MVC 혹은 MVVN 패턴을 구현.
- 다이렉티브로 태그를 커스터마이징 가능.

AngularJS가 가지고 있는 구조 자체의 단단함으로 인해 학습이 필요한 부분이 많음.  
BUT, 그 단단함으로 인해 여러 사람의 협업 시, 
구조 내에서 코딩을 하기 때문에 코드의 질이 어느정도 보장됨.  
구조적인 틀이 제공되기 때문에 대규모 웹 어플리케이션을 개발할 때 불필요한 고민과 작업을 줄여줄 수 있음.
  
이번 예제는 많은 부분을 생략한 간소화 된 버전임.  

## AngularJS의 로딩 과정
1. dependency injection을 위해 사용되는 인젝터가 생성됨.
2. injector는 어플리케이션의 모델을 위한 context가 되는 rootScope를 생성.
3. Angular는 그 이후에 ng-app의 루트 요소로부터 시작점을 삼아 하위 요소들을 '컴파일'함.

한번 어플리케이션이 로딩되고 나면 브라우져에서 어떤 이벤트(마우스 클릭, HTTP 응답, 키 입력 등)가 입력될 때까지 기다리게 됨.  
이런 이벤트가 일어나게 되면 Angular는 이벤트를 인지하고,  
이 이벤트가 어떤 모델이든 변경시키고,  
또 그 변화된 것을 찾게되면 Angular는 영향을 반영한 뷰를 reflect하게 됨.  

# 02 간단한 MVC 패턴 구현
AngularJS의 가장 큰 특징은 front 단에서 MVW 디자인 패턴을 구현했다는 점이다.

# 03 필터와 데이터 바인딩 원리
필터 함수는 input에 입력된 값과 매칭되는 것으로만 새로운 배열을 생성하게 된다.  
ng-repeat은 filter에 의해 생성된 배열을 자동적으로 뷰에 업데이트 한다.  
필터에 대한 데이터 바인딩의 원리와 순서에 대해 살펴 보자.

## Data-binding
데이터 바인딩은 AngularJS에서 핵심 기능중에 하나임.  
페이지가 로드되면 Angular는 동일한 이름의 input과 데이터 모델을 연결하고 이 둘의 싱크를 유지함.  
이번 예제에서 searchKeyword ng-model에 정한 이름을 가진 input에 사용자가 무언가를 타이핑하면,  
그 즉시 필터로서 기능할 수 있게 됨.  
필터에 의해 데이터 모델이 변화되면, 리피터는 효과적으로 DOM을 업데이트 한다.

# 04 정렬( orderBy )
정렬 역시 AngularJS에서는 쉽게 구현할 수 있다.  
orderBy 라는 attribute를 제공해 주기 때문에 필터에서와 마찬가지로 쉽게 정렬이 가능하다.  

# 05 비동기 통신(xhr) - $http 서비스
자체적으로 배열을 선언하는 것이 아닌,  
외부에서 json 객체를 가져와서 이를 목록에 뿌려주는 예제를 살펴보자.
jQeury의 ajax 통신과 유사한 구조를 갖고 있으며,  
AngularJS 내장 객체인 $http 객체를 이용해서 백그라운드 데이터 통신을 구현.  
통신을 위해 간단한 main.js로 Node.js 서버를 구현함.  

# 06 루트 프로바이더 - Multiple Views, Routing and Layout Template
AngularJS에는 다양한 뷰를 지원하고,  
입력 되는 주소에 따라 이 주소를 인지해서 다른 페이지를 보여주는 것이 가능함.  
Spring에서 Dispatcher Servlet이 존재하고,  
이 Dispatcher Servlet이 모든 입력을 다 받아 주소에 따라 적절한 컨트롤러 선택해 주는것 처럼  
AngularJS에서도 선택되는 주소에 따라 적절한 View를 선택해서 화면에 보여주는 것이 가능하다.  

# 07 모듈이란 무엇인가?
대부분의 어플리케이션은 메인 메소드를 갖고 있지만,  
앵귤러는 메인 메소드를 갖고 있지 않음.  
그 대신, 어플리케이션이 어떻게 구동 되어야 하는지 구체적으로 명시하는 목적으로 모듈이 사용 됨.  
  
예제는 심플한 반면 큰 어플리케이션에 적용할 만큼 확장성이 있지는 않음.  
대신 다음과 같이 다양한 모듈들로 나누어 어플리 케이션을 구성하는 것을 추천함.
1. 서비스 선언을 위한 서비스 모듈
2. 지시어 선언을 위한 지시어 모듈
3. 필터 선언을 위한 필터 모듈
4. 초기화 코드들과 위의 모듈에 의존적인 어플리케이션 레벨의 모듈들
  
지시어 모듈과 필터 모듈은 선언만 되어 있고 실상은 아무것도 없는 상태.  
서비스 모듈에는 greeter와 user, printHello 서비스를 value를 사용해서 등록해 주었고,  
각각 인사말 설정, 이름 설정, 인사말 출력을 하는 함수를 포함하고 있다.  
  
그리고 전에 어플리케이션 모듈에서는 이들 모듈들을 통합해서 가지고 있는 형태이고,  
run 함수를 수행하며 일종의 초기화 작업을 하고 있는 것을 볼 수 있다.  
컨트롤러에서는 위에서 등록된 서비스들을 실제로 사용하고 있는데,  
greeter와 user에서 각각 저장된 값을 가져온 후 printHello를 사용해  
인사말을 {{ greeting }} 영역에 출력해 주고 있다.

# 08 간단한 todo 예제
간단하게 미리 만들어 져 있는 json 파일을 가져와서 기존의 할일 목록을 뿌려주고,  
임의로 할일을 추가할 수 있는 간단한 예제를 만들어 보자.

# 09 `$scope`란 무엇인가?
$scope는 어플리케이션 모델을 나타내는 객체이다. 표현식의 실행 컨텍스트이다.  
스코프는 어플리케이션의 DOM 구조를 모방한 계층적인 구조로 정렬 된다.  
스코프는 표현식을 보거나 이벤트를 전파할 수 있다.  
  
## $scope의 특징들
스코프는 모델 변화를 관찰하기 위한 $watch API들을 제공한다.  
스코프는 "Angular realm" (controller, services, Angular event handlers)  
의 외부에서부터 시스템을 거쳐 view에까지 모델의 변경 사항을 전파하는 $apply API들을 제공한다.  
스코프는 공유 모델 속성에 접근이 제공되는 동안 독립적인 어플리케이션 컴포넌트에 소속될 수 있다.  
스코프의 상속 속성은 부모 스코프로부터 받는다.  
스코프는 표현식 평가에 대한 컨텍스트를 제공한다.  
예를 들어 {{ username }}표현식은 아무런 의미가 없지만,  
username을 정의하고 있는 특정 scope에 의해 표현식이 평가 될 수 있다.  
  
## 데이터 모델로서의 스코프
스코프는 어플리케이션 컨트롤러와 뷰 사이의 접착제 같은 역할을 한다.  
템플릿 링킹 단계에서 지시어는 스코프 상에서 $watch 표현식을 설정한다.  
$watchs는 지시어로 하여금 속성의 변화가 알려지도록 허용하고,  
지시어로 하여금 DOM에 업데이트 된 값을 그리도록 허용한다.  
  
  
컨트롤러와 지시어 모두 스코프를 참조하지만, 서로 참조하지는 않는다.  
이러한 배치는 컨트롤러를 DOM으로부터 만큼이나 지시어로부터 독립적으로 만들어 준다.  
이점은 컨트롤러로 하여금 뷰에 대해 상관없게 만듦으로 써  
어플리케이션 테스팅에 엄청난 진보를 가져다 준다는 점에서 매우 중요하다.

# 10 컨트롤러 간의 통신, 데이터 교환은 어떻게 해야할까?
AngularJS는 보통 하나의 어플리케이션에 하나 혹은 그 이상의 모듈이 존재한다.  
ng-app 지시어를 통해 이름을 설정한 모듈은 기본으로 서비스 모듈, 필터 모듈 등을 연결해 사용하는 구조다.  
  
또, 이 모듈에 컨트롤러를 붙여서 화면상에 조작이 필요한 부분을 통제 하는데,  
이런 컨트롤러가 여러 개일 경우 컨트롤러 상호간에 통신이나 데이터 교환의 필요성이 생기게 된다.  
이런 상황에서 어떻게 대처해야 할지 보자.

## 서비스를 공유해서 해결하는 방법.
비교적 쉽게 적용 가능한 장점이 있는 방법.  
보통 서비스의 경우 객체를 리턴하는 방식으로 사용한다.  
이때, 리턴되는 객체는 싱글톤 패턴이 적용되어 사용하는 곳에서 모두 동일한 객체를 사용하게 된다.  
이런 특징을 사용해서 하나의 서비스를 공유해서 이 서비스 객체에 값을 설정하는 메소드와 값을 저장하는 변수를 두고 사용하게 된다.  
  
## 부모 컨트롤러의 $scope를 사용해서 이벤트 브로드캐스팅 하는 방법
꽤 직관적인 방법.  
부모쪽에서 broadcast로 이벤트를 날리면,  
자식 쪽에서 on으로 듣고 있다가 받아서 적용한다.  
자식도 emit으로 이벤트를 날리면 부모도 on으로 듣고 있다가 반영한다.  
복잡 하지도 않고, 서비스를 특별히 만들 필요가 없기 때문에 사용하기는 더 편리하다.  
  
복잡 하지 않다고...?  
변수 이름을 좀 더 직관적으로 바꿔 봐야 이해 할 수 있을듯  
  
# 11 특정 상황에서 버튼 비활성화
특정 조건에서 버튼이 비활성화 되는 상황이 필요할 때가 있다.  
예를 들어, 전송 버튼을 이미 한차례 누른 뒤에 중복 전송을 막고 싶을 때  
전송 버튼을 비활성화시키고 싶을 때 등  
이럴 때 ng-disabled 를 사용해 간단하게 구현할 수 있다.  
$scope 상에 submitStatus라는 변수가 있고, 이 변수가 전송 여부를 가지고 있다면, 아래와 같이 버튼 비활성화를 설정 할 수 있다.  
```
<input type="button" value="send" ng-disabled="!submitStatus">
```
예제가 없어서 모르겠다..  
  
# 12 서비스(Service)란 무엇인가...
jQuery에 익숙해져 있는 경우 Angular에서 등장한 module의 개념과 이를 활용하는 방법, 설정하는 방법에 대해 혼란 스러울 수 있다.  
어디서 부터 시작하는지, 지시어와는 어떤 관계인지, 모듈과 서비스의 관계는 무엇이고, 또 factory는 무엇인지 이해 하기 어렵다.  
AngularJS에서 서비스를 생성하고 사용하는 간단한 예제를 통해 AngularJS에서 서비스를 어떻게 사용하는지 알아보자.  

앵귤러 1.0에서 어플리케이션을 선언하는 표준 정의.
```
var app = angular.module('myApp', []);
```
하나의 앵귤러 어플리케이션은 적어도 하나의 모듈은 포함하게 된다.  
(생략이 가능하지만, 단순한 수준에서만 가능하고, AngularJS의 특징이 없어짐.)  
모듈의 첫번째 인자는 어플리케이션의 이름이다.  
아무거나 적으면 안되고, HTML 파일에서 ng-app="어플리케이션 명" 으로 설정한 이름을 줘야 AngularJS에서 모듈을 찾을 수 있다.  
두번째 파라미터는 [] 배열 형태로 되어 있는데 해당 모듈에서 사용할 다른 모듈들을 적는다.  
resource나 cookie 등 AngularJS에서 미리 만들어 둔 모듈들을 등록하는 경우가 많다.  
모든 AngularJS 어플리케이션은 이렇게 정의된 어플리케이션(혹은 모듈)에 데이터나 함수들을 담고 있는 컨트롤러를 한 개 이상 붙이게 된다.  
컨트롤러는 대략 아래와 같이 등록 해 준다.
```
//  myApp 모듈에 컨트롤러를 추가한다.
app.controller('AppCtrl', function AppCtrl($scope){
  //  name이라는 ng-model에 Guest라는 값을 넣는다.
  $scope.name = 'Guest';
}
```
위에서 선언된 모듈과 컨트롤러를 사용하는 간단한 어플리케이션은 대략 아래와 같은 형태가 될 것이다.  
module.js
```
//  모듈 선언
var app = angular.module('myApp', []);

//  myApp 모듈에 컨트롤러를 추가한다.
app.controller('AppCtrl', function AppCtrl($scope){
  //  name이라는 ng-model에 Guest 라는 값을 넣는다.
  $scope.name = 'Guest';
})
```

HTML 파일
```
<!DOCTYPE HTML>
<html ng-app="myApp">
  <head>
    <script type="text/javascript" src="angular CDN"></script>
    <script type="text/javascript" src="module.js"></script>
  </head>
  <body>
    <section ng-controller="AppCtrl">
      <h1>Hell, {{name}}</h1>
      <div>
        <label for="name">My Name Is</label>
        <input name="name" ng-nodel="name" type="text"/>
      </div>
    </section>
  </body>
</html>
```
  
하나의 컨트롤러를 가진 어플리케이션이 만들어 짐.  
여기에 컨트롤러 데이터 일부를 조작하는 서비스를 붙여보자.  
  
보통 서비스는 하나의 객체를 리턴하는 형태가 주를 이루는데,  
다양한 함수적인 기능을 수행하는 컨트롤러와는 상당한 차이가 있다.  
  
컨트롤러는 $scope 상의 모델을 조작하거나 UI와 밀접하게 여러 기능들을 수행한다.  
반면 서비스는,  
서비스 차체가 싱글톤이라는 특성을 사용해 컨트롤러간의 통신을 제어하거나,  
리소스 접슨 권한을 가진 객체를 리턴해서 컨트롤러에서 이 객체로 CRUD를 수행하거나 하는 방식으로 사용되게 된다.  
  
서비스에 대한 이해는 이정도로 해 두고, 실제 모듈에 서비스를 등록하는 방법을 알아보자.  
  
서비스를 추가하는 첫번때 접근법은 .service()를 사용하는 방법이다.
```
app.service('nameTrickService', function() {
  this.reverse = function(name){
    return name.split("").reverse().join("");
  };
});
```
nameTrickService 라는 이름의 서비스를 등록, 컨트롤러에 주입, $scope-level 함수를 주입하였다.  
  
.service와 동일하게 사용할 수 있는 메소드로 .factory()라는 메소드가 존재한다.  
.factory()는 어떤 객체를 리턴하기 전에 몇 가지 코드를 실행할 수 있는 공간을 제공한다.  
이런 특성을 활용해서 서비스와 동일하게 사용 될 수 있게 된다.
```
app.factory('nameTrickFactory', function() {
  console.log('FACTORY');
  return {
    reverse : function(name){
      console.log('FACTORY');
      return name.split("").reverse().join("");
    }
  }
});
```
nameTrickFactory라는 서비스가 등록 됨.  
service와 factory는 서비스 모듈에 등록했지만, 컨트롤러에 주입 하기 전에는 실제로 사용 할 수 없다.  
서비스를 컨트롤러에 주입.
```
app.controller('AppCtrl', function AppCtrl($scope, nameTrickService, nameTrickFactory) {
  //  name이라는 ng-model에 Guest 라는 값을 넣는다.
  $scope.name = 'Angular';
  console.log('Controller Defined');
  
  //  nameTrickService를 사용하는 스코프 레벨 함수 선언.
  $scope.reverseNameService = function() {
    console.log("service function call");
    $scope.name = nameTrickService.reverse($scope.name);
  };

  //  같은 기능을 하는 nameTrickFactory를 사용하는 스코프 레벨 함수 선언.
  $scope.reverseNameFactory = function() {
    console.log("factory function call");
    $scope.name = nameTrickFactory.reverse($scope.name);
  };

});
```

소스를 실행하면 둘다 동일한 기능을 수행하고 있음을 알 수 있다.  
AngularJS에 서비스를 추가하는 두가지 주된 방법을 알아 보았다.  
정리하자면,  
- .service()
  - 약간 더 단순한 구조.
- .factory()
  - 리소스나 라이브러리를 초기화 하는 일회성 작업같은 경우에는 .factory()를 사용하면,  
    서비스 객체를 리턴하기에 앞서서 코드를 실행할 수 있도록 해줄 수 있다.