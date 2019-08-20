# Data Binding
Data binding in AngularJS is the synchronization between the model and the view.  
AngularJS에서 데이터 바인딩은 모델과 뷰 사이의 동기화이다.  
  
---------------------
## Data Model
AngularJS applications usually have a data model.  
AngularJS 어플리케이션은 보통 데이터 모델을 갖고있다.  
  
The data model is a collection of data available for the application.  
데이터 모델은 어플리케이션에서 사용가능한 데이터의 모음이다.  
  
```
  var app = angular.module('app', []);
  app.controller('ctrl', function($scope) {
    $scope.framework = 'AngularJS';
    $scope.lang = 'JavaScript';
  });
```
---------------------
## HTML View
The HTML container where the AngularJS application is displayed, is called the view.  
AngularJS 어플리케이션의 저장소는 뷰가 불러진 곳에서 보여진다.  
  
The view has access to the model, and there are several ways of displaying model data in the view.  
뷰는 모델에 접근할 수 있으며, 뷰에 모델 데이터를 표기하는 방법은 여러가지가 있다.  
  
You can use the `ng-bind` directive, which will bind the innerHTML of the element to the specified model property:  
요소의 innerHTML을 지정된 모델 속성에 바인딩할 때 `ng-bind` directive를 사용할 수 있다:  
  
```
<p ng-bind='framework'></p>
<p>Use the ng-bind directive to bind the innerHTML of an element to a property in the data model.</p>
```
  
You can also use double braces `{{}}` to display content from the model:  
2중 중괄호(`{{}}`)를 이용해서 도 모델에서 내용을 보여줄 수 있다:  
  
```
<p>Lang : {{lang}}</p>
<p>You can use double braces to display content from the data model.</p>
```
  
  
Or you can use the `ng-model` directive on HTML controls to bind the model to the view.  
`ng-model` directive를 이용해서 모델에서 뷰료 HTML의 값을 엮을 수 있다.  
  
---------------------
## The `ng-model` Directive
Use the `ng-model` directive to bind data from the model to the view on HTML controls(input, select, textarea)  
`ng-model` directive를 이용해서 모델의 데이터를 input, select, textarea등의 HTML 로 엮을 수 있다.  
  
The `ng-model` directive provides a two-way binding between the model and the view.  
`ng-model` directive는 모델과 뷰 사이의 양방향 데이터 바인딩을 지원한다.
  
```
<input ng-model='framework'/>
```
  
---------------------
## Two-way Binding
Data binding in AngularJS is the synchronixation between the model and the view.  
AngularJS의 데이터 바인딩은 모델과 뷰 사이의 동기화 이다.  
  
When data in the model changes, the view reflects the change, and when data in the view changes, the model is updated as well.  
모델의 데이터가 바뀌면, 뷰에서 그 변화를 반영하고, 뷰에서 데이터가 바뀌면, 모델에서도 바뀐다.  
  
This happens immediately and automatically, which makes sure that the model and the view is updated at all times.  
모델과 뷰가 항상 즉시 자동으로 업데이트 된다.  
  
```
  <div ng-app='app' ng-controller='ctrl'>
    Name : <input ng-model='framework'/>
    <h1>{{framework}}</h1>
  </div>

  <script>
  var app = angular.module('app', []);

  app.controller('ctrl', function($scope) {
    $scope.framework='AngularJS';
    $scope.lang='JavaScript';
  });
  </script>
```
  
---------------------
## Controller
Application in AngularJS are controlled by controllers.  
AngularJS 어플리케이션은 컨트롤러에 의해 컨트롤 된다.
  
Read about controllers in the AngularJS Controller chapter.
컨트롤러에 대해서는 링크를 보자.`https://www.w3schools.com/angular/angular_controllers.asp`  
  
Because of the immediate synchronization of the model and the view, the controller can be completely separated from the view, and simply concentrate on the model data.  
모델과 뷰의 신속한 동기화로 인해, 컨트롤러는 뷰와 완벽하게 분리되어 모델 데이터에만 집중할 수 있다.  
  
Thanks to the data binding in AngularJS, the view will reflect any changes made in the controller.  
AngularJS의 데이터 바인딩으로 인해, 뷰는 컨트롤러에서의 변화를 반영할 수 있다.  
  
```
```