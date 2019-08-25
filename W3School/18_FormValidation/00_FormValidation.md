# Form Validation
AngularJS can validate input data.  
AngularJS는 입력 데이터에 대해 검증할 수 있다.  
  
---------------------
## Form Validation.
AngularJS offers client-side form validation.  
AngularJS는 client-side에 form 검증을 제안한다.  
  
AngularJS monitors the state of the form and input fields (input, textarea, select), and lets you notify the user about the current state.  
AngularJS는 양식 및 입력 필드(input, textarea, select)의 상태를 확인하고, 사용자에게 현재 상태에 대해 알릴 수 있다.  
  
AngularJS also holds information about wheter they have been touched, or modified, or not.  
AngularJS는 또, 수정되거나 그렇지 않은 값에 대한 정보를 가지고 있다.  
  
You can use standard HTML5 attributes to validate input, or you can make your own validation functions.  
입력 값을 검증하기 위해 HTML5의 표준 속성을 사용하거나 자체 검증 기능을 만들 수 있다.  
  
Client-side validation cannot alone secure user input.  
클라이언트 측 검증만으로는 사용자 입력의 보안을 확신할 수 없다.  
  
Server-side validation is also necessary.  
서버측 유효성 검사도 필요하다.  
  
---------------------
## Required
Use the HTML5 attribute `required` to specify that the input field must be filled out.  
The input field is required. :  
```
01
```
  
---------------------
## E-mail
Use the HTML5 type `email` to specify that the value must be an e-mail.
The input field has to be an e-mail :  
```
02
```
  
---------------------
## Form State and Input State
AngularJS is constantly updating the state of both the form and the input fields.  
AngularJS는 폼과 입력값의 상태를 지속적으로 업데이트 한다.  
  
Input field have the following states :  
입력값은 다음과 같은 상태를 갖는다 :  
- `untouched`
  - The field has not been touched yet.
  - 손대지 않았음.
- `touched`
  - The field has been touched.
  - 손댔음.
- `pristine`
  - The field has not been modified yet.
  - 수정되지 않았음.
- `dirty`
  - The field has been modified.
  - 수정됨.
- `invalid`
  - The field content is not valid.
  - 유효하지 않음.
- `valid`
  - The field content is valid.
  - 유효함.
  
They are all properties of the input field, and are either `true` or `false`.
모두 입력값의 속성이고, `true`나 `false`를 반환한다.  
  
Forms have the following states :  
폼은 아래와 같은 상태를 갖는다:  
- `$pristine`
  - No fields have been modified yet.
  - 수정되지 않음.
- `dirty`
  - One or more have been modified.
  - 하나 이상 수정됨.
- `invalid`
  - The form content is not valid.
  - 내용이 유효하지 않음.
- `valid`
  - The form content is valid.
  - 유효함.
- `submitted`
  - The form is submitted.
  - 전송 됨.
  
They are all properties of the form, and are either `true` or `false`.
모두 폼의 속성이고, `true`나 `false`를 반환한다.  

You can use these states to show meaningful messages to the user.  
이런 상태를 사용해서 사용자에게 의미 있는 메세지를 띄울 수 있다.  
  
Example, if a field is required, and the user leaves it blank, you should give the user a warning.  
예로, 필수 입력값을 사용자가 비우면 경고를 한다.  
  
Show an error message if the field has been touched AND is empty.  
입력값이 수정되거나, 비면 에러메세지를 보여준다.  
  
```
03
```
  
---------------------
## CSS Classes
AngularJS adds CSS classes to forms and input fields depending on their states.  
AngularJS는 폼과 입력에, 상태에 따른 CSS class들을 더해준다.  
  
The folowing classes are added to, or removed from, input fields.  
다음 클래스들은 입력 필드를 위한 것들.  
- `ng-untouched`
  - The field has not been touched yet.
  - 손대지 않은
- `ng-touched`
  - The field has been touched.
  - 손댄
- `ng-pristine`
  - The field has not been modified yet.
  - 수정되지 않은
- `ng-dirty`
  - The field has been modified
  - 수정된
- `ng-valid`
  - The field content is valid
  - 유효한
- `ng-invalid`
  - The field content is not valid
  - 유효하지 않은
- `ng-valid-key`
  - One key for each validation. Example, `ng-valid-required`, useful when there are more than one thing that must be validated.
  - 각 유효성 검사에 대한 1키, 검증해야 할 하나 이상의 것이 있을때 유요함.
- `ng-invalid-key`
  - Example, `ng-invalid-required`
  - 
  
The following classes are added to, or removed from, forms.  
폼을 위한 클래스.  
- `ng-pristine`
  - No fields has not been modified yet.
  - 
- `ng-dirty`
  - One or more fields has been modified.
  - 
- `ng-valid`
  - The form content is valid.
  - 
- `ng-invalid`
  - The form content is not valid.
  - 
- `ng-valid-key`
  - One key for each valication. Example: `ng-valid-required`, useful when there are more than one thing that must be validated.
  - 
- `ng-invalid-key`
  - Example: `ng-invalid-required`.
  - 
  
The classes are removed if the value they represent is `false`.  
  
Add styles for these classes to give your application a better and more intuitive user interface.  
  
Apply styles, using standard CSS :
```
04
```
Apply styles for unmodified (pristine) forms, and for modified forms :
```
05
```
  
---------------------
## Custom Validation
To create your own validation function is a bit more tricky;  
직접 유효성 검증 기능을 만드는 것은 조금 까다로움.  
  
You have to add a new directive to your application, and deal with the validation inside a function with certain specified arguments.  
어플리케이션에 새 directive를 추가하고, 특정 인수를 사용하여 함수 내부의 유효성 검사를 처리해야 함.  
  
Create your own directive, containing a custom validation function, and refer to it by using `my-directive`.  
사용자 정의 유효성 검사 기능이 포함된 direcretive를 `my-directive`를 참조해서 만듦.  
  
The field will only be valid if the value contains the charactoer 'e' :  
값이 'e'를 갖고 있을 때만 유효함.  
  
```
06
```
Example Explaind :  
In HTML, the new directive will be referred to by useing the attribute `test-directive`.  jmtgr
`test-directive`를 사용해서 새로운 directive를 참조한다.  
  
In the JS we start by adding a new directive named `studyDirective`.  
JS에서는 `studyDirective`라는 directive를 추가하는것으로 시작함.  
  
Remember, when naming a directive, you must use a camel case name, `studyDirective`, but when invoking it, you must use `-` separated name, `study-directive`.  
directive를 만들때는 camel case를 사용하고, 주입할 때는 `-`로 분리된 이름을 써야함.  
  
Then, return an object where you specify that we require `ngModel`, which is the ngModelController.  
그런 다음, `ngModelController`인 `ngModel`이 필요하다고 명시한 객체를 반환함.  
  
Make a linking function which takes some arguments, where the fourth argument, `mCtrl`, is the `ngModelController`,  
네번째 인자인 `mCtrl`이 `ngModelController`인 연결 함수를 만든다.  
  
Then specify a function, in this case named `studyValidation`, which takes one argument, this argument is the value of the input element.  
그 다음, 입력값이 그것의 인자 값인 `studyValidation`라고 이름 붙은 함수를 지정한다.
  
Test if the value contains the letter 'e', and set the validity of the model controller to either `true` or `false`.  
값이 문자 'e'를 포함하는지 테스트 하고, 모델 컨트롤러의 유효성을 `true`나 `false`로 설정함.
  
At last, `mCtrl.$parsers.push(studyValidation);` will add the `testValidation` function to an array of other function, which will be executed every time the input value changes.  
마지막으로 `mCtrl.$parsers.push(studyValidation);`는 입력값이 바뀔 때마다 실행되는 다른 함수 배열에 `testValidation` 함수를 추가한다.
  
---------------------
## Validation Example
```
07
```
The HTML form attribute `novalidate` is used to disable default browser validation.  
HTML 폼 속성의 `novalidate`는 기본 브라우져 유효성 검사를 비활성화 하는데 사용함.  
  
Example Expalained  
  
The AngularJS directive `ng-model` binds the input elements to the model.  
AngularJS directive `ng-model`은 입력값을 모델에 바인딩한다.  
  
The model object has two properties : user and email.  
모델 객테는 user와 email 속성을 갖는다.  
  
Because of `ng-show`, the spans with color : red are displayed only when user or email is `$dirty` and `$invalid`.
빨간 색의 span 태그는 `ng-show`로 인해서, user나 email이 `$dirty`와 `$invalid`일 경우 보여진다.