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
체크박스는 `true`나 `false`를 갖고 있음.  
  
Apply the `ng-model` directive to a checkbox, and use its value in your applicaion.  
`ng-model` directive를  체크박스에 쓰면, 그 값을 어플리케이션에서 사용 가능함.  
  
Show the header if the checkbox is checked:
```
03
```
  
---------------------
## Radiobuttons
Bind radio buttons to your application with the `ng-model` directive.  
radio button을 `ng-model` directive를 이용해서 어플리케이션에 연결 해 보자.  
  
Radio buttons with the same `ng-model` can have different values, but only the selected one will be used.  
같은 `ng-model`을 갖고있는 radio button들은 다른 값을 갖고 있지만 한가지만 선택할 수 있다.  
  
Display some text, based on the value of the selected radio button.  
radio button의 값을 선택함에 따라 화면의 텍스트가 바뀜.  
  
```
04
```
  
---------------------
## Selectebox
Bind select boxes to your application with the `ng-model` directive.  
Selectbox를 `ng-model` directive를 이용해서 어플리케이션 데이터에 바인딩할 수 있다.
  
The property defined in the `ng-model` attribute will have the value of the selected option in the selectbox.  
`ng-model` 속성에 정의된 속성을 selectbox에서 선택한 옵션의 값을 갖는다.  
  
Display some text, based on the value of the selected option.  
옵션에서 선택한 값을 기반으로 텍스트를 보여주자.  
  
```
05
```
  
---------------------
## Application Form Example
```
06
```
### Example Explained
The `ng-app` directive defines the AngularJS application.  
`ng-app` directive는 어플리케이션을 정의.  
  
The `ng-controller` directive defines the application controller.  
`ng-controller`directive는 어플리케이션 컨트롤러를 정의.  
  
The `ng-model` directive binds two input elements to the `user` object in the model.  
`ng-model` directive는 `user` 객체에 두가지 입력 요소를 바인딩.  
  
The `ctrl` controller sets initial values to the `master` object, and defines the `reset()` method.  
`ctrl` 컨트롤러는 `master` 객체에 값을 초기화하고, `reset()` 메소드를 정의.  
  
The `ng-click` directive invokes the `reset()` method, only if the button is clicked.  
`ng-click` directive는 버튼을 클릭할 경우 `reset()` 메소드 호출.  
  
The novalidate attribute is not needed for this application, but normally you will use it in AngularJS forms, to override standard HTML5 validation.  
이 어플리케이션에는 유효하지 않는 속성이 필요하지 않지만, 일반적으로 표준 HTML5 유효성 검사가 override 하도록 AngularJS form에 사용함.  
  