# Application
It is time to create a real AngularJS Application.
  
---------------------
## Make a Shopping List
Lets use some of the AngularJS features to make a shopping list, where you can add or remove items.
  
---------------------
## Application Explained
### Step 01. Getting Started :
Start by making an application called `shoppingList`, and add a controller named `ctrl` to it.  
`shoppingList` 라는 어플리케이션을 만들고, `ctrl` 컨트롤러를 달아주자.  
  
The controller adds an array named `products` to the current `$scope`.  
컨트롤러는 `products`라는 배열을 현재 `$scope`에 추가함.  
  
In the HTML, we use the `ng-repeat` directive to display a list using the items in the array.  
HTML에서 `ng-repeat` directive를 사용해서 배열의 항목을 사용하여 목록을 표시함.  
  
So far we have made an HTML list based on the items of an array:  
배열의 항목을 기반으로 HTML 목록을 만들었음:  
  
```
Step01
```
  
---------------------
### Step 02. Adding Items :
In the HTML, add a text field, and bind it to the application with the `ng-model` directive.  
HTML에서 텍스트 영역을 추가하고, `ng-model` directive를 사용해서 어플리케이션에 바인딩 함.  
  
In the controller, make a function named `addItem`, and use the value of the `add` input field to add an item to the `products` array.  
컨트롤러에 `addItem` 이라는 함수를 만들고, `add`라는 입력 값을 이용해서 `products` 배열에 항목을 추가함.  
  
Add a button, and give it an `ng-click` directive that will run the `addItem` function when the button is clicked.  
버튼을 추가하고, 클릭될 때 `addItem` 기능을 실행하는 `ng-click` directive를 지정.  
  
```
Step02
```
  
---------------------
### Step 03. Removing Items :
We also want to be able to remove items from the shopping list.  
또한 쇼핑리스트에서 품목을 제거 할 수 있기를 원할 것임.  
  
In the controller, make a function named `removeItem`, which takes the index of the item you want to remove, as a parameter.  
컨트롤러에서 제거할 항목의 인덱스를 매개변수로 하는 `removeItem`이라는 함수를 만듦.  
  
In the HTML, maek a `<span>` element for each item, and give them an `ng-click` directive which calls the `removeItem` function with the current `$index`.  
HTML에서 각 항목에 대해 `<span>` 요소를 만들고, 현재 `$index`로 `removeItem` 함수를 호출하는 `ng-click` directive를 만듦.  
  
Now we can remove items from out shopping list :  
쇼핑목록에서 항목을 제거 할 수 있음.  
   
```
Step03
```
  
---------------------
### Step 04. Error Handling :
The application has some errors, like if you try to add the same item twice, the application crashes.  
같은 항목을 두 번 추가하려고 하면 어플리케이션이 중단되는 등의 오류가 있다.  
  
Also, it should not be allowed to add empty items.  
또한 빈 항목을 추가 할 수 없다.  
  
We will fix that by checking the value before adding new items.  
새 항목을 추가하기 전에 값을 확인해서 문제를 해결하자.  
  
In the HTML, we will add a container for error messages, and write an error message when someone tries to add existing item.  
HTML에서, 우리는 오류 메세지에 대한 컨테이너를 추가하고, 누군가 기존 항목을 추가하려고 할 때 오류메세지를 띄우자.  
  
A shopping list, with the possibility to write error messages:
```
Step04
```
  
---------------------
### Step 05. Design :
The application works, but could use a better design.  
작동은 잘하지만 디자인을 더해보자.  
  
We use the W3.CSS stylesheet to style out application.  
W3.CSS를 사용해서 디자인적용하자.  
  
Add the W3.CSS stylesheet, and include the proper classes throughout the application, and the result will be the same as the shopping list as the top of this page.  
  
Style your application using the W3.CSS stylesheet.  
```
Step05
```
