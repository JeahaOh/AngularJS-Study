# Form
Form in AngularJS provide data-binding and validation of input controls.  
AngularJS 안의 form은 input 값에 대한 유효성과 데이터 바인딩을 지원한다.  
  
---------------------
## Input Controls
Input controls are the HTML input elements.  
- input elements.
- select elements.
- button elements.
- textarea elements.
  
---------------------
## Data-Binding
Input controls provides data-binding by using the `ng-model` directive.  
입력 제어는 `ng-model`을 이용해서 데이터 바인딩을 지원한다.  
  
```
<input type='text' ng-model='val' />
```
The application does now have a property named `val`.  
어플리케이션에 `val`이라는 속성을 갖고있다.  
  
The `ng-model` directive binds the input controller to the rest of your application.  
`ng-model` directive는 입력제어를 나머지 어플리케이션에 바인딩한다.  
  
The property `val`, can be referred to in a controller.  
`val` 속성은 컨트롤러 안에서 참조될 수 있다.  
  
```
01
```
  
It can also be referred to elsewhere in the application.  
또한, 어플리케이션의 다른 곳 에서도 참조 될 수 있다.  
  
```
02
```
  
---------------------
## Checkbox
A checkbox has the value `true` or `false`.  
  
Apply the `ng-model` directive to a checkbox, and use its value in your applicaion.  
  
Show the header if the checkbox is checked: