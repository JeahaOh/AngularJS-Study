#Scope
The scope is the binding part between the HTML (view) and the JS (Controller).  
Scope는 HTML(View)와 JS(Controller) 사이의 바인딩 부분이다.  
  
The scope is an object with the available properties and the methods.  
Scope는 속성과 메소드를 갖는 객체이다.  
  
The scope is available for both the view and the controller.  
Scope는 뷰와 컨트롤러 양쪽에 이용 가능하다.  
  
---------------------
## How to use the SCOPE
When you make a controller in AngularJS, you pass the $scope object as an argument:  
AngularJS 컨트롤러를 만들 때, $scope를 인자에서 빼도 된다.  
  
When adding properties to the `$scope` object in the controller, the view gets access to these properties.  
컨트롤러 객체인 `$scope`에 속성을 추가하면, 뷰는 이런 속성의 접근할 수 있다.  
  
In the view, you do not use the prefix `$scope`, you just refer to a property name, like `{{val}}`.  
뷰에서는 접두사 `$scope`를 사용할 필요 없다, `{{val}}`처럼 속성의 이름을 참조하면 된다.  
```
  <div ng-app='app' ng-controller='ctrl'>
    <h1>{{val}}</h1>
  </div>

  <script>
    angular.module('app', []).controller('ctrl', function($scope){
      $scope.val = 'ANGULAR_JS';
    })
  </script>
```
  
---------------------
## Understanding the SCOPE
If we consider an AngularJS application to consist of :  
AngularJS 어플리케이션을 구셩하려는 경우  
  
- View, which is the HTML.
- Model, which is the data available for the current view.
  - 현재 뷰에서 사용할 수 있는 데이터인 모델.
- Controller, which is the JS function that makes/changes/removes/controls the data.
  - 데이터를 CRUD 하는 JS 기능인 컨트롤러.
  
Then the scope is the Model.  
그렇다면 scope는 모델이다.  
  
The scope is a JS object with properties and methods, which are available for both the view and the controller.  
Scope는 속성 및 메소드가 있는 JS 객체로 뷰와 컨트롤러 모두에서 사용할 수 있다.  
  
If you make changes in the view, the model and the controller will be updated:
```
  <div ng-app='app' ng-controller='ctrl'>
    <input ng-model='val' />
    <h1>VAL : {{val}}</h1>
  </div>

  <script>
    angular.module('app', []).controller('ctrl', function($scope){
      $scope.val = 'ANGULAR_JS';
    })
  </script>
```
  
---------------------
## Know Your Scope
It is important to know which scope you are dealing with, at any time.  
어떤 scope를 다루고 있는지 아는것이 중요하다.  
  
In the two examples above there is only one scope, so knowing your scope is not an issue,  
위의 두개의 예제에서는 하나의 scope만 이용하므로, scope를 아는것은 문제가 되지 않았다.  
  
but for larger applications there can be sections in the HTML DOM which can only access certain scopes.  
그러나, 큰 어플리케이션의 경우 특정 범위에만 접근할 수 있는 HTML DOM 섹션이 있을 수 있다.  
  
When dealing with the `ng-repeat` directive, each repetition has access to the current repetition object:  
`ng-repeat` directive를 다룰 때, 각 반복은 현재 반복 객체에 접근할 수 있다.  
  
Each `<li>` element has access to the current repetition object, in this case a string, which is referred to by useing `x`.  
각 `<li>` 요소는 현재 반복 객체에 접근할 수 있으며, 이경우 문자열은 `x`를 사용하여 참조된다.  
  
```
  <div ng-app='app' ng-controller='ctrl'>
    <ul>
      <li ng-repeat='x in list'>{{x}}</li>
    </ul>
  </div>

  <script>
    angular.module('app', []).controller('ctrl', function($scope){
      $scope.list = ['OSLO', 'BERLIN', 'PRAGUE'];
    })
  </script>
```
  
---------------------
## Root Scope
All applications have a `$rootScope` which is the scope created on the HTML element that contains the `ng-app` directive.  
모든 어플리케이션은 `ng-app` directive가 포함된 HTML 요소에 만들어진 scope인 `$rootScope`를 갖고 있다.
  
The rootScope is available in the entire application.  
rootScope는 전체 어플리케이션에서 사용할 수 있다.  
  
If a variable has the same name in both the current scope and in the rootScopt, the application uses one in the current $scope.  
변수가 현재 scope와 rootScope 모두에서 동일한 이름을 갖는 경우, 어플리케이션은 현재 $scope에서 변수를 사용한다.  
  
A variable named 'color' exists in both the container's scope and in the rootScope :  
'color'라는 변수는 scope rootScope 양쪽에 다 있다:  
  
```
<body ng-app='app'>

  <p>The rootScope's favorite color : </p>
  <h1>{{color}}</h1>

  <div ng-controller='ctrl'>
    <p>The scope of the controller : </p>
    <h1>{{color}}</h1>
  </div>

  <p>The rootScope's favorite color is still : </p>
  <h1>{{color}}</h1>

  <script>
    angular.module('app',[])
    .run(function($rootScope){
      $rootScope.color = 'grey';
    })
    .controller('ctrl', function($scope){
      $scope.color = 'red';
    });
  </script>

  <p>Notice that controller's color variable does not overwrite the rootScope's color value.</p>

</body>
```