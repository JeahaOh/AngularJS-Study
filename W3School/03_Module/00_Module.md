# Module
An AngularJS module defines an application.  
module은 어플리케이션을 정의한다.  
  
The module is a container for the different parts of an application.  
모듈은 한 어플리케이션의 다른 부분들의 저장소이다.  
  
The module is a container for the application controllers.  
모듈은 어플리케이션 컨트롤러들의 저장소이다.  
  
Controllers always belong to a module.  
컨트롤러들은 항상 모듈에 속해있다.  

---------------------
## Creating a Module
A module is created by using the AngularJS function `angular.module`.  
모듈은 AngularJS의 함수 `angular.module`로 만들어 진다.  
```
<div ng-app='appName'>...</div>
<script>
  var app = angular.module('appName', []);
</script>
```
  
The 'appName' parameter refer to an HTML element in which the application will run.  
'appName' 인자는 어플리케이션이 실행되는 HTML 요소를 나타냄.  
  
Now you can add controllers, directives, filters and more, to your AngularJS application.  
controller, directives, filter 등을 AngularJS 어플리케이션에 사용할 수 있다.  
  
---------------------
## Adding a Controller
Add a controller to your application, and refer to the controller with the `ng-controller` directive :  
컨트롤러를 어플리케이션에 더하고, `ng-controller` directive로 컨트롤러를 참조하자.  
  
```
<div ng-app='app' ng-controller='CTRL'>
{{firstVal + secondVal}}
</div>

<script>
  var app = angular.module('app', []);

  app.controller('CTRL', function($scope) {
    $scope.firstVal = 'AngularJS';
    $scope.secondVal = 'Framework';
  });
</script>
```
  
---------------------
## Adding a Directive
AngularJS has a set of built-in direcrive which you can use to add functionality to your application.  
AngularJS는 어플리케이션에 기능을 추가하는데 사용할 수 있는 내장 directive 세트가 있다.  
  
For a full reference, ~~  
자세한건 `https://www.w3schools.com/angular/angular_ref_directives.asp` 여길 참조해라.  
  
In addition you can use the module to add your own directives to your applications:  
또한, 모듈을 사용해서 어플리케이션에 사용자 directive를 추가할 수 있다.  
  
```
<div ng-app='app' study-directive></div>
<script>
  var app = angular.module('app', []);

  app.directive('studyDirective', function(){
    return {
      template: "It is made in a directive constructor!"
    };
  });
</script>
```
  
---------------------
## Modules and Controllers in Files
It is common in AngularJS applications to put the module and the controllers in JS files.  
AngularJS 어플리케이션에서 모듈과 컨트롤러를 JS 파일로 넣는것이 일반적이다.  
  
In this example, 'app.js' contains an application module definition, while 'ctrl.js' contains the controller :  
예제에서, 'app.js'가 어플리케이션 모듈 정의를 포함하고, 'ctrl.js'가 컨트롤러를 포함한다 :  
  
### app.js
```
var app = angular.module('app', []);
```
The [] parameter in the module definition can be uses to define dependent modules.  
모듈 정의에 있는 [] 인자는 의존 모듈의 정의하는데 사용한다.  
  
Without the [] parameter, you are not creating a new module, but retrieving an existing one.  
[] 인자가 없다면, 새 모듈을 만드는게 아니라, 기존 모듈을 검색하는 것이다.  
  
### ctrl.js
```
appl.controller( 'ctrl', function( $scope ) {
  $scope.firstVal = 'AngularJS';
  $scope.secondVal = 'Framework';
});
```
  
---------------------
## Functions can Pollute the Global Namespace
Global functions should be avoided in JS.  
전역함수는 JS에서 피해야한다.  

They can easily be overwritten or destroyed by other scripts.  
전역함수는 다른 script에 의해 덮어 씌워지거나 없어지기 쉽다.  
  
AngularJS modules redueces this problem, by keeping all functions local to the module.  
AngularJS 모듈들은 모든 함수들을 모듈들에 지역화 함으로 이런 문제를 줄였다.  
  
---------------------
## When to load the library
While it is common in HTML applications to place scripts at the end of the `<body>` element, it is recommended that you load the AngularJs library either in the `<head>` or at the start of the `<body>`.  
HTML 어플리케이션에서 `<body>` 끝에 스크립트를 배치하는게 일반적이지만, AngularJS는 `<head>`안이나 `<body>` 시작에 load 시키길 권장하고 있다.  
  
This is because calls to `angular.module` can only be compiled after the library has been loaded.  
`angular.module`이 로드된 후에만 컴파일 할 수 있기 때문이다.