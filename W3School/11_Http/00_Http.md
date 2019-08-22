# AngularJS AJAX - $http
`$http` is an AngularJS service for reading data from remote servers.
`$http`는 원격 서버에서 데이터를 읽기위한 AngularJS 서비스임.
  
---------------------
## $http
The AngularJS `$http` service makes a request to the server, and returns a response.  
AngularJS의 `$http` 서비스는 서버에 요청을 하고 응답을 반환한다.  
  
Make a simple request to the server, and display the result in a header :  
서버에 간단한 요청을 만들고 헤더를 출력해보자.  
  
```
이전 예제와 같음.
```
  
---------------------
## Methods
The example above uses the `.get` method of the `$http` service.  
The .get method is a shortcut method of the $http service.  
There are several shortcut methods :
- `.delete()`
- `.get()`
- `.head()`
- `.jsonp()`
- `.patch()`
- `.post()`
- `.put()`

The methods above are all shortcuts of calling the $http service :
```
angular.module('app', [])
.controller('ctrl', function($scope, $http){
  $http({
    method : 'GET',
    url : 'welcome'
  }).then(function onSuccess(response){
    $scope.welcome = response.data;
  }, function onError(response){
    $scope.selcome = response.statusText;
  });
});
```
The example above executes the $http service with an object as an argument.  
The object is specifying the HTTP method, the url, what to do on success, and what to do on failure.  
  
---------------------
## Properties
The response from the server is an object with these properties :  
- `.config`     : the object used to generate the request.
- `.data`       : a string, or an object, carrying the response from the server.
- `.headers`    : a function to use to get header information.
- `.status`     : a number defining the HTTP status.
- `.statusText` : a string defining the HTTP data.
  
```
03
```
To handle errors, add one more function to the `.then()` method :  
에러를 다루기 위해서는 `.then()`절에 인자 메소드를 추가해주면 된다.
```
04
```
  
---------------------
## JSON
The data you get from the response is expected to be in JSON format.  
JSON is a great way of transporting data, and it is easy to use within AngularJS, or an other JA.  
Example : On the Server we have a file that returns a JSON object containing 15 customers, all wrapped in array called `records`.  
The `ng-repeat` directive is perfect for looping through an array :  
  
```
05
```
Application explained :  
The application defines the `ctrl` controller, with `$scope` and `$http` object.  
`$http` is an **XMLHttpRequest** object for requesting external data.  
On Success, the controller creates a property, data, in the scope, with JSON data from the server.