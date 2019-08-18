# AngularJS Expressions
AngularJS binds data to HTML using **Expressions**.  
  
## AngularJS Expressions
AngularJS expressions can be written inside double braces: `{{ expression }}`.  
AngularJS 표현식은 중괄호 두개에 쌓여 있다.  
  
AngularJS expressions can also be written inside a directive: `ng-bind='expression'`.  
AngularJS 표현식은 `ng-bind='expression'`처럼 directive 안에 있을 수도 있다.  
  
AngularJS will resolve the expression, and return the result exactly where the expression is written.  
AngularJS는 표현식의 계산을 하고, 쓰여진 곳에 그 결과를 반환한다.  
  
AngularJS expressions are much like JS expression: They can contain literals, operators, and variables.  
AngularJS 표현식은 JS 표현식과 비슷하다 : 문자와 연산자 변수를 사용할 수 있다.  
  
Example {{ 5 + 5 }} or {{ A + ' ' + B }}  
```
<div ng-app=''>
  <p>My first expression : {{ 5 + 5 }}</p>
</div>
```
  
If you remove the `ng-app` directive, HTML will display the expression as it is, without solveing it:  
`ng-app` directive를 제거한다면, HTML은 표현식을 계산하지 않고 그대로 표현할 것임.  
```
<div>
  <p>My first expression : {{ 5 + 5 }}</p>
</div>
```
  
  
You can write expressions where you like, AngularJS will simply resolve the expression and return result.  
표현식을 어디에든 적을 수 있다, AngularJS는 간단하게 표현식을 해결하고, 결과를 반환한다.  
  
Example: Let AngularJS change the value of CSS properties.  
EX: AngularJS가 CSS 속성값을 변화시키게 하자.  
  
Change the color of the input box below, by changing its value:  
다음 input 태그의 색을 입력 값에 따라 바꾸자.
```
<div ng-app='' ng-controller="myCol='lightblue'">
  <input style="background-color:{{myCol}}" ng-model='myCol'/>
</div>
```