# Direictives
AngularJS lets you extend HTML with new attributes called **Directives**.  
AngularJS는 `Directives`라는 새로운 속성으로 HTML을 확장할 수 있게 해준다.  
  
AngularJS has a set of built-in directives which offers functionality to your appplications.  
AngularJS는 어플리케이션에 기능을 제공하는 내장 directives를 제공한다.  
  
AngularJS also lets you define your own directives.  
AngularJS는 또한 사용자 directives 정의를 지원한다.
  
---------------------
## AngularJS Directives
AngularJS directives are extended HTML attributes with the prefix `ng-`.  
AngularJS의 directives는 접두사 `ng-`가 붙은 HTML 속성으로 확장된다.  
  
The `ng-app` directive initializes an AngularJS application.  
`ng-app` directive는 AngularJS 어플리케이션을 초기화 한다.  
  
The `ng-init` directive initializes application data.  
`ng-init` directive는 어플리케이션 데이터를 초기화 한다.  
  
The `ng-model` directive binds the value of HTML controls (input, select, textarea) to application data.  
`ng-model` directive는 input, select, textarea 등의 HTML 컨트롤 값들을 어플리케이션 데이터에 엮는다.  
  
Read about all AngularJS directives in out AngularJS directive reference.  
AngularJS directives에 대한 모든것은 `https://www.w3schools.com/angular/angular_ref_directives.asp`를 참고해라.
  
```
  <div ng-app='' ng-init='name="AngularJS"'>
    <p>Name : <input type='text' ng-model='name'></p>
    <p>Your Answer : {{name}}</p>
  </div>
```
The `ng-app` directive also tells AngularJS that the `<div>` elements is the `owner` of the AngularJS application.  
`ng-app` directive는 AngularJS에게 `<div>` 요소가 AngularJS 어플리케이션의 주체임을 알린다.
  
---------------------
## Data Binding
The `{{ name }}` expression, in the example above, is an AngularJS data binding expression.  
위 예제의 `{{ name  }}` 표현식은 AngularJS의 데이터 바인딩 표현식이다.  
  
Data binding in AngularJS binds AngularJS expressions with AngularJS data.  
AngularJs에서 데이터 바인딩은 AngularJS 표현식을 AngularJS 데이터와 바인딩한다.  
  
`{{ name }}` is bound with `ng-model="name"`.  
`{{ name }}`은 `ng-model='name'`으로 바인딩 되었다.  
  
In the next example two text fields are bound together with two ng-model directives:  
다음 예제에서 두개의 text fields가 서로 다른 두개의 ng-model directive에 바인딩 되어 있다.  
  
```
  <div ng-app='' ng-init='quantity=1;price=5'>
    Quantity : <input type='number' ng-model='quantity' /> </br>
    Costs    : <input type='number' ng-model='price' /> </br>
    </br>
    Total Cost : {{ quantity * price }}
  </div>
```
Using `ng-init` is not very common. You will learn how to initialize data in the chapter about controllers.  
`ng-init`를 이용하는것은 일반적이지 않다. Controller 단원에서 데이터 초기화에 대해 알아보도록 하자.  
  
---------------------
## Repeating HTML Elements
The `ng-repeat` directive repeats an HTML element:  
`ng-repeat` directive는 HTML 요소를 반복 시킨다.
```
  <div ng-app='' ng-init='names=["AngularJS", "NodeJS", "ReactJS"]'>
    <ul>
      <li ng-repeat='n in names'>
        {{ n }}
      </li>
    </ul>
  </div>
```
  
The `ng-repeat` directive actually clones HTML elements once for each item in a collection.  
`ng-repeat` directive는 콜렉션의 각 항목에 대해 HTML 요소를 한번 복제한다.  
  
The `ng-repeat` directive used on an array of object:  
객체 배열에 사용된 `ng-repeat` directive :  
```
  <div ng-app='' ng-init='routes=[
    {capital : "Oslo",   country : "Norway"},
    {capital : "Berlin", country : "Germany"},
    {capital : "Prague", country : "Chech"},
    {capital : "London", country : "UK"},
    {capital : "Stockholm", country : "Sweden"},
    {capital : "Helsinki", country : "Finland"},
    {capital : "Moscow", country : "Rusia"}
  ]'>
    <ul>
      <li ng-repeat='r in routes'>
        {{ r.capital + ', ' + r.country }}
      </li>
    </ul>
  </div>
```
  
---------------------
## The `ng-app` Directive
The `ng-app` directive define the `root element` of an AngularJS applicaion.  
`ng-app` direcrive는 AngularJS 어플리케이션의 근본 요소를 정의한다.  

The `ng-app` directive will `auto-bootstrap` (automatically initialize) the application when a web page is loaded.  
`ng-app` directive는 web page가 로드 되면, 어플리케이션을 자동 초기화 할것이다 (`auto-bootstap` 이라고 함).  
  
---------------------
## The `ng-init` Directive
The `ng-init` directive defines initial values for an AngularJS application.  
`ng-init` directive는 AngularJS 어플리케이션의 초기 값을 정의한다.  
  
Normally, you will not use ng-init. You will a controller or module instead.  
You will learn more about controllers and module later.  
보통은 ng-init이 아닌 컨트롤러나 모듈을 사용하니 이것에 대해서 뒤에서 알아보자.  
  
---------------------
## The `ng-model` Directive
The `ng-model` directive binds the value of HTML controls (input, select, textarea) to application data.  
`ng-model` directive는 (input, select, textarea)등 HTML 컨트롤 값들을 어플리케이션 데이터에 엮는다.  
  
The `ng-model` directive can also :  
`ng-model` directive는 다음과 같은 것들을 한다.  
- Provide type validation for application data (number, email, required).
    - 숫자, 이메일, 필수값등의 어플리케이션 데이터에 대한 자료형 유효성 검사기능.
- Provide status for application data (invalied, dirty, touched, error).
    - (invalied, dirty, touched, error)등 어플리케이션 데이터에 대한 상태.
- Provide CSS classes for HTML elements.
    - HTML 요소들에 대한 CSS classes.
- Bind HTML elements to HTML forms.
    - HTML 요소들을 HTML form에 엮기.
  
Read more about the `ng-model` directive in the next chapter.  
`ng-model`에 대해서는 다음 단원에서 알아보자.  
  
---------------------
## Create New Directives
In addition to all the built-in AngularJS directives, you can create your own directives.  
사용자 정의 Directive를 만들 수 있다.  
  
New directives are created by using the `.directive` function.  
사용자 정의 directive는 `.directive` 함수로 만든다.  
  
To invoke the new directive, make an HTML element with the same tag name as the new directive.  
새 directive를 주입하기 위해서는,  
새 directive 이름과 같은 태그 이름을 가진 HTML 요소를 만든다.  
  
When nameing a directive, you must use a camel case name, `w3TestDirective`, but when invoking it, you must `-` seperated name, `w3-test-directiev` :  
Directive의 이름을 지을 때는 `w3TestDirective` 처럼 camel case로 짓는다.  
주입시에는 `w3-test-directiev`처럼 `-` kebab-case로 짓는다.  
{{ HTML tag 에서는 kebab-case 이름인 `angular-study-directive`으로 짓고, }}  
{{ JS 안에서는 camelCase로 `angularStudyDirective`으로 짓는다. }}
  
```
<body ng-app='app'>

  <angular-study-directive></angular-study-directive>
  
  <script>
    var app = angular.module('app', []);

    app.directive('angularStudyDirective', function(){
      console.log('angularStudyDirective RUN!!');
      return {
        template: '<h1>Made By Directive!!</h1>'
      };
    });
  </script>

</body>
```
  
---------------------
## Restrictions
You can invoke a directive by useing Element, Attribute, Class, Comment.  
directive 주입은 Element, Attribute, Class, Comment로 할 수 있다.  
  
You can restrict your directives to only be invoked by come of the methods.  
Directive를 메소드에 의해 주입 되도록 제한할 수 있다.  
  
```
var app = angular.module('app', []);
app.directive('angularStudyDirective', function(){
  return {
    restrict : 'A',
    template : '<h1>Restrict Directive!!</h1>'
  }
});
```
  
By default the value is EA, meaning that both Element names and attribute names can invoke the directive.  
기본값은 `EA`인데, Element name 과 Attribute name으로 주임 될 수 있는 direcitve 라는 뜻이다.  
  
  
  
- The legal restrict values are : 
  - E : for Element name
    - `<angular-study-directive></angular-study-directive>`
  - A : for Attribute
    - `<div angular-study-directive></div>`
  - C : for Class
    - `<div class='angular-study-directive'></div>`
  - M : for Comment
    - `<!-- directive: angular-study-directive -->`


