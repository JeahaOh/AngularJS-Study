# DOM
AngularJS has directives for binding application data to the attributes of HTML DOM elements.  
AngularJS는 HTML DOM 요소의 속성에 어플리케이션 데이터를 바인딩하는 directive를 갖고 있다.  
  
---------------------
## The ng-disabled Directive
The `ng-disabled` directive binds AngularJS application data to the disabled attribute of HTML elements.  
`ng-disabled` directive는 AngularJS 어플리케이션 데이터를 HTML 요소의 비활성 속성에 바인딩 한다.  
  
```
01
```
Application explained :  
The `ng-disabled` directive binds the application data `switch` to the HTML button's `disabled` attribute.  
`ng-disabled` directive는 어플리케이션의 switch 데이커인 HTML 버튼의 `disabled` 속성을 바인딩한다.  
  
The `ng-model` directive binds the value of the HTML checkbox element to the value of `switch`.  
`ng-model` directive는 HTML 체크박스 요소의 값을 `switch`에 바인딩한다.  
  
If the value of `switch` evaluates to `true`, the button will be disabled :  
`switch`의 값이 `true`라면 버튼은 클릭 불가능해짐.  
  
---------------------
## The ng-show Directive
The `ng-whow` directive shows or hides an HTML element.  
  
The ng-show directive shows (or hides) an HTML element based on the `value` of ng-show.  
  
You can use any expression that evaluates to true or false.  
  
```
02
```
  
---------------------
## The ng-hide Directive
The `ng-hide` directive hides or shows an HTML element.  
  
```
03
```