# Select Boxes
AngularJS lets you create dropdown lists based on items in an array, or an object.  
AngularJS를 사용하면 배열이나 객체의 항목을 사용해서 Dropdown 리스트를 만들 수 있다.  
  
---------------------
## Creating a Select Box Using ng-options
If you want to create a dropdown list, based on an object or an array in AngularJS, you should use the `ng-options` directive :  
AngularJS에서 배열이나 객체를 이용해서 dropdown 리스트를 만들고 싶다면 `ng-oprions` directive를 사용하면 된다.
```
01
```
  
---------------------
## ng-options vs ng-repeat
You can also use the `ng-repeat` directive to make the same dropdown list :  
드롭다운 리스트를 만드는데 `ng-repeat` directive또한 사용할 수 있다.
```
02
```
Because the `ng-repeat` directive repeats a block of HTML code for each item in an array, it can be used to create options in a dropdown list, but the `ng-options` directive was made especially for filling a dropdown list with options, and has at least one important advantage :  
`ng-repeat` directive가 배역의 각 항목에 대한 HTML 코드를 반복하기 때문에 드롭다운 리스트를 만드는데 사용할 수는 있지만,  
`ng-options` directive가 드롭다운 리스트를 만들기 위해 특벌히 만들어 졌으므로 최소한 1개의 이점이 있다.  
  
Dropdowns made with `ng-options` allows the selected value to be an **object**, while dropdowns made from `ng-repeat` has to be a string.
`ng-repeat`으로 드롭다운을 만들면 문자열로 구성 되지만, `ng-options`로 드롭다운을 만들면 선택한 값은 객체가 된다.  
  
---------------------
## What Do I Use?
Assume you have an array of object :  
객체 배열이 있다고 가정하자 : 
```
$scope.cars = [
  {model : 'Ford Mustang', color : 'red'},
  {model : 'Fiat 500', color : 'white'},
  {model : 'Volvo XC90', color : 'black'}
]
```
The `ng-repeat` directive has its limitations, the selected value must be a string.  
`ng-repeat` direcrive은 선택된 값이 문자열일 수 밖에 없는 한계가 있다.  
  
Using `ng-repeat`  
```
03_repeat
```
When using the `ng-options` directive, the selected value can be an object.  
`ng-options` directive를 사용하면 선택한 값은 객체가 될 수 있다.  
  
Using `ng-options`
```
03_options
```
  
When the selected value can be an object, it can hold more information, and your application can be more flecible.  
선택함 값이 객체가 될 수 있다면, 더 많은 정보를 갖고 있을 수 있고, 어플리케이션이 더 유연해 진다.  
  
We will use the `ng-options` direcrive in this tutorial.
  
---------------------
## The Data Source as an Object
In the previous examples the data source was an array, but we can also use an object.  
이전 예제들은 원본 데이터가 배열이였으니 객체를 이용해 보자.  
  
Assume you have an object with key-value pairs :  
key-value 쌍으로 된 객체를 갖고 있다고 가정하자 :  
  
```
$scope.cars = {
  car01 : 'Ford',
  car02 : 'Fiat',
  car03 : 'Volvo'
};
```
The expression in the `ng-options` attribute is a bit different for objects.  
`ng-options` 속성의 표현은 객체와 조금 다름.  
  
Using an Object as the data source, `x` represents the key, and `y` represents the value :  
객체를 데이터 소스로 사용하고, `x`는 key를, `y`는 값을 의미 :  
  
```
04
```
  
The selected value will always be the `value` in a `key-value` pair.  
선택한 값은 항상 `key-value` 쌍에서 `value`가 될것임.  
  
The `value` in a key-`value` pair can also be an object.  
또한 `key-value` 쌍에서 `value`는 객체일 수 있다.  
  
The selected value will still be the `value` in a key-`value` pair, only this time it is an object : 05  
선책한 값은 여전히 `key-value` 쌍에서 `value`일것이다. 이번에는 객체를 보자.
  
```
$scope.cars = {
  car01 : {brand : 'Ford', model : 'Mustang', color : 'red'},
  car02 : {brand : 'Fiat', model : '500', color : 'white'},
  car03 : {brand : 'Volvo', model : 'XC90', color : 'black'}
};
```
The options in the dropdown list does not have to be the `key` in a `key`-value pair, it can also be the value, or a property of the value object.  
드롭다운의 옵션들이 `key-value`쌍에서 `key`이거나 `value`일 필요는 없고, 객체 값의 속성일 수 있다.
```
06
```

---------------------