# Services
In AngularJS you can make your own service, or use one of the many built-in serveces.  
AngularJS에서 내장 service를 사용하거나 직접 만들 수 있다.  
  
---------------------
## What is Service
In AngularJS, a service is a function, or object, that is available for, and limited to, your AngularJS application.  
AngularJS에서 서비스는 AngularJS 어플리케이션에 사용 가능하고, 이에 제한되는 기능 또는 객체임.  
  
AngularJS has about 30 built-in service. One of them is the `$location` service.  
AngularJS에는 약 30개의 내장 서비스가 있고, 그중 하나가 `$location` 서비스 이다.  
  
The `$location` service has methods which return information about the location of the current web page :  
`$location` 서비스에는 현재 웹 페이지의 위치에 대한 정보를 반환하는 메소드가 있다:
  
Use the `$location` service in a controller :  
`$location` 서비스를 컨트롤러에서 사용 :  
```
angular.module('app',[])
.controller('ctrl', function($scope, $location) {
  $scope.url = $location.absUrl();
});
```
Note that the `$location` service is passed in to the controller as an argument.  
`$location` 서비스가 인자로 컨트롤러에 전달되는 것 인지.  
  
In order to use the service in the controller, it must be defined as a dependency.  
컨트롤러에서 서비스를 사용하려면 해당 서비스를 종속성으로 정의해야 함.  
  
---------------------
## Why use Services?
For many services, like the `$location` service,  
`$location`과 같은 많은 서비스의 경우,  

it seems like you could use objects that are already in the DOM, like `window.location` object, and you could, but it would have some limitations, at least for your AngularJS application.  
`window.location` 객체와 같이 이미 DOM에 있는 객체를 사용할 수 있을 것 같지만, AngularJS 어플리케이션에서는 약간의 제한이 있다.
  
AngularJS constantly supervises, your application, and for it to handle changes and events properly, AngularJS prefers that you use the `$location` service instead of the `window.location` object.  
AngularJS는 지속적으로 어플리케이션을 감독하며 변경사항과 이벤트를 적절하게 처리하기 위해 `$window.location` 객체 대신 `$location` 서비스를 사용하는것을 선호한다.  
  
---------------------
## The $http service
The `$http` service is one of the most common used service in AngularJS applications.  
`$http` 서비스는 AngularJS 어플리케이션에서 가장 자주 사용되는 서비스중에 하나다.  
  
The service makes a request to the server, and lets your application handle the response.  
`$http` 서비스는 서버에 요청을 하고, 어플리케이션에서 응답을 처리하도록 한다.  
  
Use the `$http` service to request data from the server :  
`$http` 서비스를 사용해서 서버에서 데이터를 요청하자 :  
```
angular.module('app', [])
.controller('ctrl', function( $scope, $http ) {
  $http.get().then(function( response ){
    $scope.welcome = response.data;
  });
});
```
This example demonstrates a very simple use of `$http` service, Learn more about the `$http` service in `https://w3school.com/angular/angular_http.asp`
  
---------------------
## The $timeout service
The `$timeout` service is AngularJS' version of the `window.setTimeout` function.  
`$timeout` 서비스는 AngularJS버젼의 `window.setTimeout`이다.  
  
Display a new message after two seconds :  
```
  angular.module('app', [])
  .controller('ctrl', function($scope, $timeout) {
    $scope.header = 'Hello Angular!';
    $timeout( function(){
      $scope.header = 'Hell The AngularJS';
    }, 2000);
  });
```
  
---------------------
## The $interval service
The `$interval` service is AngularJS' version of the `window.setInterval` function.  
  
Display the time every second :  
```
angular.module('app', [])
  .controller('ctrl', function($scope, $interval) {
    $scope.theTime = new Data().toLocaleTimeString();
    $interval(function(){
      $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
  });
```
  
---------------------
## Create Own Service
To create own service, connect service to module : 
```
app.service('hexafy', function(){
  this.func = function( x ) {
    return x.toString(16);
  }
});

app.controller('ctrl', function($scope, hexafy){
  $scope.hex = hexafy.func(255);
});
```
  
---------------------
## Use a Custom Service Inside a Filter
Once you have created a service, and connected it to your application, you can use the service in any controller, directive, filter, or even inside other services.  
서비스를 만들어 어플리케이션에 연결하면 모든 컨트롤러, directive, 필터 또는 다른 서비스 내에서 사용할 수 있다.  
  
To use the service inside a filter, add it as a dependency whien defining the filter.  
필터 내에서 서비스를 사용하려면 필터를 정의 할 때 서비스를 종속성으로 추가하면 됨.
  
The service `haxafy` used in the filter `form` :  
`hexafy` 필터에 사용되는 `form` 서비스 :  
  
```
app.filter('form', ['hexafy', function(hexafy){
  return function(x) {
    return hexafy.func(x);
  };
]});
```
  
You can use the filter when displaying values from an object, or an array :  
객체 또는 배열의 값을 표시 할 때 필터를 사용할 수 있음.  
  
```
<ul>
  <li ng-repeat='x in counts'>{{x | form}}</li>
</ul>
```