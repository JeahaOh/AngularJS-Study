# AngularJS `ng-model` Directive
The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.  
`ng-model` directive는 input, select, textarea등의 HTML 컨트롤값을 어플리케이션에 엮는다.  
  
---------------------
## The ng-model Direcitve
With the `ng-model` directive you can bind the value of an input field to a variable created in AngularJS.  
`ng-model` directive로 input 값들을 AngularJS에서 생성된 변수와 엮을 수 있다.  
  
```
  <div ng-app='app' ng-controller='CTRL'>
    Name : <input ng-model='name' />
  </div>

  <script>
    var app = angular.module('app', []);

    app.controller('CTRL', function( $scope ) {
      $scope.name='AngularJS';
    });
  </script>
```
  
---------------------
## Two-Way Binding
The binding goes both ways. If the user changes the value inside the input field, the AngularJS property will also change its value : 
```
  <div ng-app='app' ng-controller='CTRL'>
    Name : <input ng-model='name' /><br>
    <h1>You entered : {{ name }}</h1>
  </div>

  <script>
    var app = angular.module('app', []);

    app.controller('CTRL', function( $scope ) {
      $scope.name='AngularJS';
    });
  </script>
```
  
---------------------
## Validate User Input
The `ng-model` directive can provide type validation for application data (number, email, required) :  
`ng-model` directive는 숫자, 이메일, 필수값 등의 어플리케이션 데이터를 자료형 유효성 검사를 제공한다.  
  
```
<form na-app='' name='form'>
  Email : <input type='email' name='email' ng-model='text'><br>
  <span ng-show='form.email.$error.email'>Not a valid e-mail address</span>
</form>
```
In the example above, the span will be displayed only if the expression in the `ng-show` attribute returns `true`.  
위 예제는, `ng-show` 표현식이 true를 반환 할 때 span 안의 문장이 보이게 된다.  
  
If the property in the ng-model attribute does not exist, AngularJS will create one for you.
ng-model 속성의 쇼유값이 없을 때 AngularJS는 하나를 만들어 낸다.   
  
---------------------
## Application Status
The `ng-model` directive can provide status for application data(valid, dirty, touched, error) :  
`ng-model` directive는 valid, dirty, touched, error에 관한 어플리케이션 데이터의 상태를 제공한다.  
```
  <form ng-app='' name='form' ng-init='text="asdf@test.tt"'>
    Email : <input type='email' name='email' ng-model='text' required>
    <h1>STATUS</h1>
    <p>Valid   : {{form.email.$valid}}.</p>
    <p>참일 경우, 값은 모든 기준을 충족시킴.  (if true, the value meets all criteria)</p>

    <p>Dirty   : {{form.email.$dirty}}.</p>
    <p>참일 경우, 값은 변경되었음. (if true, the value has been changed)</p>

    <p>Touched : {{form.email.$touched}}.</p>
    <p>참일 경우, 그 field에 초첨이 있다? (if true, the field has been in forcus)</p>

    <p>Error : {{form.email.$error}}.</p>
    <p>애는 뭘까?</p>
  </form>
```
  
---------------------
## CSS Classes
The `ng-model` directive provides CSS classes for HTML elements, depending on thier status:  
`ng-model` directive는 HTML 요소의 상태에 대한 CSS Class들을 지원한다.  
  
- The `ng-model` directive adds/removes the following classes, according to the status of the form field.  
  - form 영역의 산태에 따라 `ng-model` directive는 다음과 같은 HTML classes를 추가/제거한다.
  - ng-empty
  - ng-not-empty
  - ng-touched
  - ng-untouched
  - ng-valid
  - ng-invalid
  - ng-dirty
  - ng-pending
  - ng-pristine