# Animations
AngularJS provides animated transitions, with help from CSS.  
AngularJS는 CSS의 도움으로 애니메이션 전환을 제공한다.  
  
---------------------
## What is an Animations?
An animation is when the transformation of an HTML element gives you an illusion of motion.  
애니메이션은 HTML 요소의 변환이 움직임의 모습으로 보이는 것임.  
  
Example : Check the checkbox to hide the DIV :  
```
01
```
Applications should not be filled with animations, but some animations can make the application easier to understand.  
어플리케이션은 애니메이션으로 채워져서는 안되지만, 약간의 애니메이션은 어플리케이션을 이해하기 쉽게 만들 수 있음.  
  
---------------------
## What do I need?
To make you applications ready for animations, you must include the AngularJS library.
```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js"></script>
```
어플리케이션에서 에니메이션을 사용하기 위해서는, `angular-animate.js` 파일을 include 해야함.  
  
Then you must refer to the `ngAnimate` module in you application.  
```
<body ng-app='ngAnimate'>
```
`ngAnimate` 모듈을 어플리케이션에서 참조 시켜야 함.  
  
Or if your application has a name, add `ngAnimate` as a dependency in your application module.  
어플리케이션에 이름이 있을 경우, `ngAnimate`를 어플리케이션 모듈의 의존시켜라.  
```
02
```
  
---------------------
## What Does ngAnimate Do?
The ngAnimate module adds and remove classes.  
ngAnimate 모듈은 클래스를 추가/제거 함.  
  
The ngAnimate module does not animate your HTML elements, but when ngAnimate notice certain events, like hide or show of an HTML element, the element gets some pre-defined classes which can be used to make animations.  
ngAnimate 모듈은 HTML 요소를 애니메이션솨 하지 않지만, ngAnimate가 HTML 요소의 숨김/보이기 같은 특정 이벤트를 인지하면, 그 요소는 에니메이션을 만드는데 사용할 수 있는 미리 정의된 클래스를 얻게 됨.  
  
The directives in AngularJS who add/remove classes are :  
클래스 추가/제거하는 AngularJS의 directive는 다름과 같다 :  
  
- `ng-show`
- `ng-hide`
- `ng-class`
- `ng-view`
- `ng-include`
- `ng-repeat`
- `ng-if`
- `ng-switch`
  
The `ng-show` and `ng-hide` directive adds or removes a `ng-hide` class value.  
`ng-show` `ng-hide` directive는 `ng-hide` 클래스 값을 추가/제거 한다.  
  
The other directives add a `ng-enter` class value when they enter the DOM, and a `ng-leave` attribute when they are removed from the DOM.  
다른 directive은 DOM에 들어갈 때, `ng-enter` 클래스 값과 DOM에서 제거될 때 `ng-leave` 속성을 추가한다.  
  
The `ng-repeat` directive also adds a `ng-move` class value when the HTML element changes position.  
`ng-repeat` directive는 또한, HTML 요소의 위치가 바뀌면 `ng-move` 클래스 값을 추가한다.  
  
In addition, during the animation, the HTML element will have a set of class values, which will be removed when the animation has finished.  
또한, 애니메이션 중에 HTML 요소는 클래스 값 집합을 가지며, 애니메이션이 끝나면 제거된다.  
  
Example: the `ng-hide` directive will add these class value :  
`ng-hide`는 다음과 같은 클래스 값을 추가한다.  
  
- `ng-animate`
- `ng-hide-animate`
- `ng-hide-add` (if the element will be hidden)
- `ng-hide-remove` (if the element will be showed)
- `ng-hide-and-active` (if the element will be hidden)
- `ng-hide-remove-active` (if the element will be showed)
  
---------------------
## Animation Using CSS
We can use CSS transitions or CSS animations to animate HTML elements.  
CSS 전환이나 CSS 애니메이션을 사용해서 HTML 요소를 애니메이션화할 수 있다.  
This tutorial will show you both.  
To learn more about CSS Animation, study `https://www.w3schools.com/css/css3_transitions.asp` and `https://www.w3schools.com/css/css3_animations.asp`  
  
---------------------
## CSS Transitions
CSS transitions allows you to change CSS property values smoothly, from one value to another, over a given duration.  
CSS 전환을 통해 주어진 기간 동안 CSS 속성 값을 한 값에서 다른 값으로 원활하게 변경할 수 있다.  
  
When the DIV element gets the `.ng-hide` class, the transition will take 0.5 second, and the height will smoothly change from 100px to 0:  
DIV가 `.ng-hide` 클래스를 갖게 되면, 0.5초간의 전환시간을 가지며, 높이는 100px 에서 0으로 부드럽게 변함.
```
03
```
  
---------------------
## CSS Animations
CSS Animations allows you to change CSS property values smoothly, from one value to another, over a given duration.  
CSS 애니메이션을 사용하면 주어진 기간동안 CSS 속성값을 한 값에서 다른 값으로 부드럽게 변경할 수 있음.  
  
Example :  
When the DIV element gets the `.ng-hide` class, the `change` animation will run, which will smoothly change the heigth from 100px to 0:  
DIV가 `.ng-hide` 클래스를 갖게 되면, 변경 애니메이션이 실행되어 높이를 100px에서 0으로 변경함.  
  
```
04
```

