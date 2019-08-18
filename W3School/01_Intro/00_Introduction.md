# AngularJS Introduction
AngularJS is a JS framework.  
AngularJS는 JS 프레임 워크임.  
  
It can be added to an HTML page With a `<script>` tag.  
HTML 페이지에 Script 태그와 함께 추가할 수 있음.  
  
AngularJS extends HTML attributes with Directives, and bind data to HTML with Expression.  
AngulatJS는 HTML 요소를 Directives를 이용해서 확장할 수 있고, 표현식을 이용해서 데이터를 엮을 수 있음.
  
---------------------
## Angular JS is a JS Framework
AngularJS is a JavaScript framework written in JS  
  
AngularJS is distributed as a JS file, and can be added to a web page with script tag.  
AngularJS는 JS 파일로 분산되어 있고, 다음같은 script 태그로 웹페이지에 더해질 수 있음.  
```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
```
  
---------------------
## AngularJS Extends HTML
AngularJS extends HTML with `ng-directives`.  
AngularJS는 `ng-directives`로 HTML을 확장 시킨다.  
  
The `ng-app` directive defines an AngularJS appllication.  
`ng-app` directive는 AngularJS 어플리케이션을 정의한다.  
  
The `ng-model` directive binds the value of HTML controls(input, select, textarea) to appllication data.  
`ng-model` directive는 input, select, textarea 같은 HTML 요소의 값을 어플리케이션 데이터에 엮는다.  
  
The `ng-bind` directive binds appllication data to HTML view.  
`ng-bind` directive는 어플리케이션 데이터를 HTML view에 엮는다.  
  
```
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="">
  <p>Name : <input type='text' ng-model='name'></p>
  <p ng-bind='name'></p>
</div>

</body>
</html>
```
Example explaind :  
예제의 의미 :  
  
AngularJS starts automatically when the web page has loaded.  
AngularJS는 웹 페이지가 로드되면 자동으로 시작한다.  
  
The `ng-app` directive tells AngularJS that the `<div>` element is the "owner" of an AngularJS application.  
`ng-app` directive는 AngularJS에게 `<div>` 태그가 AngularJS 어플리케이션의 주인이라고 표시한다.  
  
The `ng-model` directive binds the value of the input field to the application variable `name`  
`ng-model` directive는 input field의 값을 어플리케이션의 변수 `name`에 엮는다.  
  
The `ng-bind` directive binds the content of the `<p>` element to the application variable `name`  
`ng-bind` directive는 `<p>` 태그 요소의 내용을 변수 `name`에 엮는다.  
  
---------------------
## AngularJS Directives
As you have already seen, AngularJS directives are HTML attributes with an `ng` prefix.  
위에서 본것과 같이, AngularJS directive들은 접두사 `ng`를 갖고있는 HTML 속성이다.  
  
The `ng-init` directive initializes AngularJS application variables.  
`ng-init` directive는 AngularJS 어플리케이션의 변수들을 초기화 한다.  
```
<div ng-app="" ng-init="A='`ng-app`'">
  <p>The prefix is <span ng-bind="A"></span></p>
</div>
```
Alternatively with valid HTML:  
또는 유효한 HTML로 대안한다면 :  
```
<div data-ng-app="" data-ng-init="B='`data-ng-app`'">
  <p>The prefix is <span data-ng-bind="B"></span></p>
</div>
```
You can use `data-ng`, instead of `ng-`, if you want to make your page HTML valid.  
HTML 유효성을 원한다면, 접두사 `ng-`를 대신해서 접두사 `data-ng`를 사용할 수 있다.  
  
You will learn a lot more about directives later in this tutorial.  
directive에 관해서는 차후 더 살펴 보자.  
  
---------------------
## AngularJS Expressions
AngularJS expressions are written inside double braces: `{{ expression }}`.  
AngularJS의 표현식은 중괄호 2개로 감싼다: `{{ expression }}`.  
  
AngularJS will "output" data exactly where the expression is written:  
AngularJS는 정확히 표현식이 사용된 곳에 데이터를 출력할것임.  
```
<div ng-app=''>
  <p>My first expression: {{ 5 + 5 }}</p>
</div>
```
AngularJS expressions bind AngularJS data to HTML the same way as the `ng-bind` directive.  
AngularJS 표현식은 AngularJS 데이터를 `ng-bind` directive 처럼 HTML에 엮을 수도 있음.
```
<div ng-app=''>
  <p>Name : <input type='text' ng-model='name'/></p>
  <p>{{name}}<p>
</div>
```
  
---------------------
  
## AngularJS Applications
AngularJS `modules` define AngularJS application.  
`modules`는 AngularJS 어플리케이션을 정의함.  
  
AngularJS `controllers` control AngularJS applications.
`controller`는 AngularJS 어플리케이션을 컨트롤함.  
  
The `ng-app` directive defines the application, the `ng-controller` direcvie defines the controller.  
`ng-app` directive는 어플리케이션을 정의 하고, `ng-controller` direcvive는 컨트롤러를 정의함.
```
<div ng-app='angularApp' ng-controller='angularCtrl'>
First Var : <input type='text' ng-model='firstVar'/> </br>
Last Var : <input type='text' ng-model='lastVar' /> </br>
Full Var : {{firstVar + ' ' + lastVar}}
</div>
<script>
var app = angular.module('angularApp', []);
app.controller('angularCtrl', function($scope){
  $scope.firstVar='AngularJs';
  $scope.lastVar='Framework';
});
</script>
```  
  
AngularJS module define application :
```
var app = angular.module('angularApp', []);
```
  
AngularJS controllers control applications :
```
app.controller('angularCtrl', function($scope){
  $scope.firstVar = 'AngularJS';
  $scope.secondVar = 'Framework';
});
```





