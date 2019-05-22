# AngularJS-Study
Angular Tutorial

# 01 AngularJS의 강점
- 양방향 데이터 바인딩 구현.
- JavaScript 상에서 MVC 혹은 MVVN 패턴을 구현.
- 다이렉티브로 태그를 커스터마이징 가능.

AngularJS가 가지고 있는 구조 자체의 단단함으로 인해 학습이 필요한 부분이 많음.  
BUT, 그 단단함으로 인해 여러 사람의 협업 시, 
구조 내에서 코딩을 하기 때문에 코드의 질이 어느정도 보장됨.  
구조적인 틀이 제공되기 때문에 대규모 웹 어플리케이션을 개발할 때 불필요한 고민과 작업을 줄여줄 수 있음.
  
이번 예제는 많은 부분을 생략한 간소화 된 버전임.  

## AngularJS의 로딩 과정
1. dependency injection을 위해 사용되는 인젝터가 생성됨.
2. injector는 어플리케이션의 모델을 위한 context가 되는 rootScope를 생성.
3. Angular는 그 이후에 ng-app의 루트 요소로부터 시작점을 삼아 하위 요소들을 '컴파일'함.

한번 어플리케이션이 로딩되고 나면 브라우져에서 어떤 이벤트(마우스 클릭, HTTP 응답, 키 입력 등)가 입력될 때까지 기다리게 됨.  
이런 이벤트가 일어나게 되면 Angular는 이벤트를 인지하고,  
이 이벤트가 어떤 모델이든 변경시키고,  
또 그 변화된 것을 찾게되면 Angular는 영향을 반영한 뷰를 reflect하게 됨.  

# 02 간단한 MVC 패턴 구현
AngularJS의 가장 큰 특징은 front 단에서 MVW 디자인 패턴을 구현했다는 점이다.

# 03 필터와 데이터 바인딩 원리
필터 함수는 input에 입력된 값과 매칭되는 것으로만 새로운 배열을 생성하게 된다.  
ng-repeat은 filter에 의해 생성된 배열을 자동적으로 뷰에 업데이트 한다.  
필터에 대한 데이터 바인딩의 원리와 순서에 대해 살펴 보자.

## Data-binding
데이터 바인딩은 AngularJS에서 핵심 기능중에 하나임.  
페이지가 로드되면 Angular는 동일한 이름의 input과 데이터 모델을 연결하고 이 둘의 싱크를 유지함.  
이번 예제에서 searchKeyword ng-model에 정한 이름을 가진 input에 사용자가 무언가를 타이핑하면,  
그 즉시 필터로서 기능할 수 있게 됨.  
필터에 의해 데이터 모델이 변화되면, 리피터는 효과적으로 DOM을 업데이트 한다.

