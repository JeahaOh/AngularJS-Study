# Routing
The `ngRoute` module helps your application to become a Single Page Application.  
`ngRoute` 모듈은 어플리케이션이 단일 페이지 어플리케이션이 되도록 돕는다.
  
---------------------
## What is Routing in AngularJS?
If you want to navigate to different pages in your application, but you also want the application to be a SPA (Single Page Application), with no page reloading, you can use the `ngRoute` module.  
어플리케이션의 다른 페이지로 이동하고 싶지만, 페이지 재로드가 없는 SPA(단일 페이지 어플리케이션)로 어플리케이션을 원한다면, `ngRoute` 모듈을 사용할 수 있다.  
  
The `ngRoute` module routes your application to different pages without reloading the entire application.  
`ngRoute` 모듈은 전체 어플리케이션을 다시 로드하지 않고 어플리케이션을 다른 페이지로 라우팅 한다.
  
Example:  
Navigate to 'red.htm', 'green.htm', and 'blue.htm' : 
```
/01
```
  
---------------------
### What do I Need?
To make your applications ready for routing, you must include the AngularJS Route module : 
```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
```
어플리케이션에 롸우팅을 사용하기 위해서는 AngularJS Route 모듈을 사용해야 한다.  
  
Then you must add the `ngRoute` as a dependency in the application module :  
```
angular.module('app', ['ngRoute'])
```
그리고 어플리케이션 모듈에 `ngRoute` 넣어줌.  
  
Now your application has access to the route module, which provides the `$routeProvider`.  
그럼 `$routeProvider`를 제공하는 라우트 모듈에 접근할 수 있다.  
  
Use the `$routeProvider` to configure different routes in your application:  
`$routeProvider`를 사용해서 어플리케이션에서 다른 경로를 구성하면 됨.  
  
```
  angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : '/main.html'
    })
    .when('/red', {
      templateUrl : '/red.html'
    })
    .when('/green', {
      templateUrl : '/green.html'
    })
    .when('/blue', {
      templateUrl : '/blue.html'
    });
  });
```
  
---------------------
## Where Does it Go?
Your application needs a container to put the content provided by the routing.  
어플리케이션은 라우팅으로 제공받은 내용들을 저장할 저장소가 필요하다.  
  
This container is the `ng-view` directive.  
그 저장소가 `ng-view` directive이다.  
  
There are three different ways to include the `ng-view` directive in your application :  
`ng-view` directive를 포함시키는 방법이 세가지 있다 :  
  
```
<div ng-view></div>
```
```
<ng-view></ng-view>
```
```
<div class='ng-view'></div>
```
Application can only have one `ng-view` directive, and this will be the placeholder for all views provided by the route.  
어플리케이션은 `ng-view`를 하나만 가질 수 있고, 이것은 route가 제공하는 모든 뷰의 directive가 될 것임.  
  
---------------------
## $routeProvider
With the `$routeProvider` you can define what page to display when a user clicks a link.  
`$routeProvider`를 사용하면 사용자가 링크를 클릭하면 보여줄 페이지를 정의할 수 있다.
  
Define a `$routeProvider` : 
```
angular.module('app', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'main.html'
  })
  .when('/london', {
    templateUrl : 'london.html'
  })
  .when('/paris', {
    tempelateUrl : 'paris.html'
  });
});
```
Define the `$routeProvider` using the `config` method of your application.  
어플리케이션의 `conifg` 함수를 사용해서 `$routeProvider`를 정의함.  
  
Work registered in the `config` method will be performed when the application is loading.  
`config` 메소드에 등록된 작업은 어플리케이션이 실행될 때 작동함.  
  
---------------------
## Controllers
With the `$routeProvider` you can also define a controller for each 'view'  
`$routeProvider`를 통해 각 뷰에 대한 컨트롤러를 정의할 수도 있다.  
  
Add controller :  
```
angular
.module('app', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'main.html'
  })
  .when('/london', {
    templateUrl : 'london.html',
    controller : 'londonCtrl'
  })
  .when('/paris', {
    tempelateUrl : 'paris.html',
    controller : 'parisCtrl'
  });
});
.controller('londonCtrl', function($scope) {
  $scope.msg = 'London';
})
.controller('parisCtrl', function($scope) {
  $scope.msg = 'Paris';
});
```
  
The 'london.html' and 'paris.html' are normal HTML files, which you can add AngularJS expressions as you would with any other HTML sections of your AngularJS application.  
'london.html', 'paris.html'은 정상적인 HTML 파일로, AngularJS 어플리케이션의 다른 HTML 섹션과 마찬가지로 AngualrJS 표현식을 추가할 수 있다.
  
The file looks like :
```
<h1>London</h1>
<h3>London is the capital city of England.</h3>
<p>It is the most populous city in the UK, with a metropolitan area of over 13 million inhabitants.</p>
<p>{{ msg }}</p>
```
```
<h1>Paris</h1>
<h3>Paris is the capital city of Frence.</h3>
<p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
<p>{{ msg }}</p>
```
  
---------------------
## Template
In the previous examples we have used `templateUrl` property in the `$routeProvider.when` method.  
이전 예제에서는 `templateUrl` 속성을 `$routeProvider.when` 메소드에서 사용했다.  
  
You can also use the `template` property, which allows you to write HTML directly in the property value, and not refer to a page.  
`template` 속성을 사용할 수도 있는데, 속성 값에 HTML을 직접 쓸 수 있으며, 페이지를 참조하지 않아도 된다.  
  
Write templates : 
```
angular
.module('app', ['ngRoute'])
.config( fucntion( $routeProvider ) {
  $routeProvider
  .when('/', {
    template : '<h1>Main</h1><p>Click on the links to change this content</p>'
  })
  .when('/banana', {
    template : '<h1>Banana</h1><p>Bananas contain around 75% water.</p>'
  })
  .when('/tomato', {
    template : '<h1>Tomato</h1><p>Tomatoes contains around 95% water.</p>'
  });
});
```
  
---------------------
## The otherwise method
In the previous examples we have used the `when` method of the `$routeProvider`.  
이전 예제에서 `$routeProvider`의 `when` 메소드를 사용함.  
  
You can also use the `otherwise` method, which is the default route when none of the others get a match.  
`otherwise` 함수는 경로가 일치하지 않을 때 사용하는 기본 경로임.  
  
```
04
```