# Controllers
AngularJS controllers control the data of AngularJS applications.  
AngularJS의 컨트롤러는 AngularJS 어플리케이션의 데이터를 제어한다.  
  
AngularJS controllers are regular JavaScript Object.  
AngularJS 컨트롤러는 평범한 JS 객체이다.
  
---------------------
## Controllers
AngularJS applications are controlled by controller.  
AngularJS 어플리케이션은 컨트롤러에 의해 제어된다.  
  
The `ng-controller` directive defines the application controller.  
`ng-controller` directive는 어플리케이션 컨트롤러를 정의한다.  
  
A controller is a JS Object, created by a standard JS object constructor.  
컨트롤러는 일반적인 JS 객체 생성자로 만들어진 JS 객체이다.  
  
```
  <div ng-app='app' ng-controller='ctrl'>
    First Name : <input type='text' ng-model='firstName' /><br>
    Last Name  : <input type='text' ng-model='lastName' /><br>
    <br>
    Full Name : {{firstName + ' ' + lastName}}
  </div>

  <script>
    var app = angular.module('app', []);

    app.controller('ctrl', function($scope){
      $scope.firstName = 'ASDF';
      $scope.lastName  = '1020';
    });
  </script>
```
  
Application explaind : 
The AngularJS application is defined by `ng-app='app'`. The application runs inside the `<div>`.  
AngularJS 어플리케이션은 `ng-app='app'`으로 정의 된다. 어플리케이션은 `<div>`태그 안에서 작동한다.  
  
The `ng-controller='ctrl'` attribute is an AngularJS directive. It define a controller.  
`ng-controller='ctrl'` 속성은 컨트롤러를 정의하는 AngularJS directive이다.  
  
The `ctrl` function is a JS function.  
`ctrl` 함수는 JS 함수이다.  
  
AngularJS will invoke the controller with a `$scope` object.  
AngularJS는 `$scope` 객체로 컨트롤러를 주입할것이다.  
  
In AngularJS, `$scope` is the application object (the owner of application variables and function).  
AngularJS에서 `$scope`는 어플리케이션의 변수와 함수를 갖고있는 객체이다.  
  
The controller create two properties (variable) in scope (firstName and lastName).  
컨트롤러는 firstName, lastName이라는 두개의 속성(변수)를 scope 안에 만든다.  
  
The `ng-model`directives bind the input fields to the controller properties(firstName and lastName).  
`ng-model` directives는 입력 영역들을 컨트롤러 속성인 firstName과 lastName에 바인딩한다.  
  
---------------------
## Methods
The example above demonstrated a controller object with two properties : lastName, firstName.  
위의 예제는 컨트롤러 객체와 두개의 변수를 보여준다.  
  
A controller can also have methods (variables as function):  
컨트롤러는 함수를 변수처럼 갖고 있을 수 있다.  
  
```
  <div ng-app='app' ng-controller='ctrl'>
    First Name : <input type='text' ng-model='firstName' /><br>
    Last Name  : <input type='text' ng-model='lastName' /><br>
    <br>
    Full Name : {{fullName()}}
  </div>

  <script>
    var app = angular.module('app', []);

    app.controller('ctrl', function($scope){
      $scope.firstName = 'ASDF';
      $scope.lastName  = '1020';
      $scope.fullName = function() {
        return $scope.firstName + ' ' + $scope.lastName;
      };
    });
  </script>
```
  
---------------------
## Controllers In External Files
In larger application, it is common controllers in external files.  
  
Just copy the code between the `<script>` tags into an external file named `ctrl.js` :
```
03_External.*
```
  
---------------------
## Another Example
For the next example we will create a new controller file :  
```
angular
.module('app', [])
.controller('ctrl', function($scope){
  $scope.nations=[
    {capital : "Oslo",   country : "Norway"},
    {capital : "Berlin", country : "Germany"},
    {capital : "Prague", country : "Chech"},
    {capital : "London", country : "UK"},
    {capital : "Stockholm", country : "Sweden"},
    {capital : "Helsinki", country : "Finland"},
    {capital : "Moscow", country : "Rusia"}
  ];
});
```
Save the file as `ctrl.js`  
  
And then use the controller file in an application :
```
  <div ng-app='app' ng-controller='ctrl'>
    <ul>
      <li ng-repeat='nation in nations'>
        {{ nation.country + '\t:\t' + nation.capital }}
      </li>
    </ul>
  </div>

  <script src='04_External.js'></script>
```
