# Filter
Filters can be added in AngularJS to format data.  
Filter는 데이터를 포맷하기 위해 AngularJS에 추가될 수 있다.  
  
---------------------
## Filters
AngularJS provides filters to transform data :  
AngularJS는 데이터를 변환하는 필터를 제공한다 :  
  
- currency
  - Format a number to a currency format.
  - 숫자를 통화 형식으로 포맷.
- date
  - Format a date to a specified format.
  - 날짜를 지정된 형식으로 포맷.
- filter
  - Select a subset of items from an array.
  - 배열에서 항목의 하위 집합을 선택.
- json
  - Format an object to a JSON string.
  - JSON 문자열에 객체를 형식화.
- limitTo
  - Limits an array/string, into a specified number of elements/characters.
  - 배열/문자열을 지정된 요소/문자로 제한.
- lowercase
  - Format a string to lower case.
  - 문자열을 소문자로.
- number
  - Format a number to a string.
  - 숫자를 문자열로.
- orderBy
  - Orders an array by an expression.
  - 표현식에 따라 배열을 정렬.
- uppercase
  - Format a string to upper case.
  - 문자열을 대문자로.
  
---------------------
## Adding Filters to Expressions
Filters can be added to expressions by using the pipe character `|`, followed by a filter.  
  
The `uppercase` filter format strings to upper case :  
  
```
<div ng-app="myApp" ng-controller="personCtrl">
  <p>The name is {{ lastName | uppercase }}</p>
</div>
```
The `uppercase` filter format strings to upper case :  
  
```
<div ng-app="myApp" ng-controller="personCtrl">
  <p>The name is {{ lastName | lowercase }}</p>
</div>
```
  
---------------------
## The currency Filter
The `currency` filter formats a number as currency :  
  
```
```
Read more about the currency filter in ...
currency filter에 대해서 더 알려면 `https://www.w3schools.com/angular/ng_filter_currency.asp`로...
  
---------------------
## The filter Filter
The `filter` filter selects a subset of an Array.  
`filter` 필터는 배열의 부분 집합을 선택한다.  
  
The `filter` filter can only be used on arrays, and it returns an array containing only the matching items.  
`filter` 필터는 배열에서만 사용할 수 있으며, 일치하는 항목만 포함된 배열을 반환한다.  
  
Return the names that contains the letter 'i' :  
'i'가 포함된 이름을 반환.
```
  <div ng-app="app" ng-controller="ctrl">
    <ul>
      <li ng-repeat='x in names | filter : "i"'>
        {{x}}
      </li>
    </ul>
  </div>
    
  <script>
    angular.module('app', []).controller('ctrl', function($scope) {
      $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
      ];
    });
  </script>
```
  
`filter`에 대해서 `https://www.w3schools.com/angular/ng_filter_filter.asp`  
  
---------------------
## Filter an Array Based on User Input
By setting the `ng-model` directive on an input field, we canm use the value of the input field as an expression in a filter.  
`ng-model` directive를 입력값에 설정함으로, 입력 필드의 값을 필터의 표현식으로 사용할 수 있다.  
  
Type a letter in the input field, and the list will shrink/glow depending on the match :  
입력값에 문자를 입력하면 목록이 그에 맞게 축소 증가함 :  
  
```
  <div ng-app="app" ng-controller="ctrl">
    <table border='1' width='100%'>
      <tr>
        <th ng-click='orderByStr("city")'>city</th>
        <th ng-click='orderByStr("country")'>Country</th>
      </tr>
      <tr ng-repeat='route in routes | orderBy: OrdrBy'>
        <td>{{route.city}}</td>
        <td>{{route.country}}</td>
      </tr>
    </table>
  </div>
    
  <script>
    angular.module('app', []).controller('ctrl', function($scope) {
      $scope.routes = [
        {city : "Oslo",   country : "Norway"},
        {city : "Turku", country : "Finland"},
        {city : "Prague", country : "Chech"},
        {city : "Berlin", country : "Germany"},
        {city : "Saint-Peterburg", country : "Rusia"},
        {city : "London", country : "UK"},
        {city : "Moscow", country : "Rusia"},
        {city : "Stockholm", country : "Sweden"},
        {city : "Stavanger",   country : "Norway"},
        {city : "Chesky", country : "Chech"},
        {city : "Helsinki", country : "Finland"},
        {city : "Goteborg", country : "Sweden"},
        {city : "Koln", country : "Germany"},
        {city : "Edinburgh", country : "UK"}
      ];
      $scope.orderByStr = function(x){
        $scope.OrdrBy = x;
      }
    });
  </script>
```
  
---------------------
## Custom Filters
You can make your own filters by registering a new filter factory with your module :  
Make a custom filter called `myFormat` :  
The `myFormat` filter will format every other character to uppercase.  
  
```
```