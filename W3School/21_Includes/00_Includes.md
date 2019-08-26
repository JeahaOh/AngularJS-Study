# Includes
With AngularJS, you can include HTML from an externl file.  
AngularJS를 쓰면 외부 HTML 파일을 Include 해서 사용할 수 있음.  
  
---------------------
## Includes
With AngularJS, you can include HTML content using the `ng-include` directive.  
`ng-include` directive를 사용해서 HTML 내용을 include 해서 사용할 수 있다.  
  
```
01
```
  
---------------------
## Include AngularJS Code
The HTML files you include with the ng-include directive, can also contain AngularJS code :  
ng-include directive로 HTML include하는 HTML코드도 또한 AngularJS 코드를 갖고 있을 수 있다 :  
  
```
02
```
  
Include the file '02_table.html' in your web page, and all AngularJS code will be executed, even the code inside the included file.  
웹 페이지에 '02_table.html' 파일을 포함하면 모든 AngularJS 코드가 실행되며, 포함된 파일의 코드도 실행됨.
  
Include 할 html 소스를 html로 확장자를 붙이는 것 보다 *.html.template로 확장자를 붙이는게 파일이 많은 상황에서는 우용할 듯 하다.  
확장자가 달라고 일단 HTML로 인신함.  
server단에서 그냥 파일만 보내주면 되니까? ㅇㅇ

---------------------
## Include Cross Domains
By default, the ng-include directive does not allow you to include files from other domains.  
기본적으로 ng-include directive는 다른 도메인의 파일을 include 하는건 허용하지 않는다.  
  
To include files from another domain, you can add a whitelist of legal files and/or domains in the config function of your application.  
다른 도메인 파일을 include 하기 위해서는, 어플리케이션의 구성 기능에 적법한 파일 및/또는 도메인의 화이트리스트를 추가 할 수 있다.  
  
```
```

Be sure that the server on the destination allows cross domain file access.  
목적지인 서버가 크로스 도메인 파일 접근을 허용하는지 확인 해야 함.