# Events
AngularJS has its own HTML events directives.  
AngularJS는 자기만의 HTML 이벤트 directive들을 갖고있다.
  
---------------------
## AngularJS Events
You can add AngularJS event listeners to your HTML elements by using one or more of these directives:
- ng-blur
- ng-change
- ng-click
- ng-copy
- ng-cut
- ng-dblclick
- ng-focus
- ng-keydown
- ng-keypress
- ng-keyup
- ng-mousedown
- ng-mouseenter
- ng-mouseleave
- ng-mousemove
- ng-mouseover
- ng-mouseup
- ng-paste
  
The event directives allows us to run AngularJS functions at certain user events.  
이벤트 directive를 통해, 특정 사용자 이벤트에서 AngularJS의 기능을 실행한다.  
  
An AngularJS event will not overwrite an HTML event, both events will be executed.  
AngularJS 이벤트는 HTML 이벤트를 덮어쓰지 않으며, 두 이벤트가 모두 실행됨.  
  
## Mouse Event
Mouse events occur when the cursor moves over an element, in this order.  
마우스 이벤트는 커서가 요소 위를 지나갈때 다음 순서로 발생한다.  
1. ng-mouseover
2. ng-mouseenter
3. ng-mousemove
4. ng-mouseleave
  
Or when a mouse button is clicked on an element, in this order.  
마우스 버튼이 요소를 클릭하면 이벤트는 다음순서로 발생한다.  
1. ng-mousedown
2. ng-mouseup
3. ng-click
  
---------------------
## The ng-click Directive
The `ng-click` directive defines AngularJS code that will be executed when the element is being click.  
`ng-click` directive는 요소가 클릭되면 실행할 AngularJS의 코드를 정의한다.
```
02
```
  
---------------------
## Toggle, True/False
If you want to show a section of HTML code when a button is clicked, and hide when the button is clicked again, like a dropdown menu, make the button behave like a toggle switch.  
버튼을 클릭하면 HTML 코드의 섹션을 표시하고, 버튼을 다시 클릭하면 드롭다운 메뉴처럼 숨긴다.  

```
03
```
The `show` variable starts out as the Boolean value `false`.  
`show` 변수가 `false`로 시작.  
  
The `func()` sets the `show` variable to the opposite of what it is, by using `!` (not) operator.  
`func()`이 `show` 변수의 값을 `!` 연산자로 바꾼다.  
  
---------------------
## $event Object
You can pass the `$event` object as an argument when calling the function.  
?  
  
The `$event` object contains the browser's event object.  
`$event` 객체는 브라우저의 이벤트 객체를 포함한다.  
  
```
04
```