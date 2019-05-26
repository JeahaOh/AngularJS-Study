//  지시어 모듈 ; 현재 비어 있음.
angular.module('helloWorld.directive', []);

//  필터 모듈 : 현재 비어 있음.
angular.module('helloWorld.filter', []);

//  서비스 모듈
angular.module('helloWorld.service', [])
    .value('greeter', { //  greeter 라는 이름의 서비스 등록.
        salutation : 'Hello Angular',    //  인사말의 기본 값.
    
        //  setSalutation 함수 선언
        setSalutation : function(salutation){
            /**
                인자 값으로 들어온 인사말을 내부의 인사말에 대입.
                즉, greeter 라는 서비스가 있는데,
                기본적으로는 salutation 을 사용하지만,
                setSalutation 함수를 사용하면 인사말을 임의로 바꿀 수 있음.
             */
            this.salutation = salutation;
        },
    }).value('user', {  //  user라는 이름의 서비스 등록.
        name : '',    //  이름의 기본 값.
        /**
            user 라는 서비스 안에는 load 라는 함수가 존재하는데,
            setName 함수의 파라미터로 전달된 이름을 name 이라는 변수에 저장해 둔다.
         */
        setName : function( name ){
            this.name = name;
        }
    }).value('printHello', {    //  printHello 라는 이름의 서비스 등록.
        print: function(salutation, name){
            return salutation + ' ' + name + '!';
        }
    });

//  어플리케이션 모듈 - 서비스, 지시어, 필터를 포함하고 있다(?).
angular.module('helloWorld',
              ['helloWorld.service', 'helloWorld.directive', 'helloWorld.filter']).
    run(function(greeter, user){    //  서비스모듈에 등록된 greeter와 user 서비스를 파라미터로 가져옴.
    /**
        여기에서 일종의 초기화가 이루어 지고 있다.
        
        어플리케이션 모듈은 이렇게 이 공간을 초기화를 목적으로 사용하게 되는 경우가 많은 듯?
        
        greeter 서비스에 포함된 setSalutation 함수를 사용해, 인사말을 Hello로 설정하고 있음.
     */
    
    greeter.setSalutation('Hello');
    
    //  user 서비스 안에 포함된 setName 함수를 사용해 이름을 World로 설정하고 있아.
    user.setName('ASDF');
});

//  어플리케이션의 컨트롤러
function helloWorldController($scope, greeter, user, printHello){
    //  뷰 상의 {{ greeting }} 부분에 출력 될 모델을 결정해 줌.
    $scope.greeting = printHello.print(greeter.salutation, user.name);
}

/**
    모듈 로딩 및 종속( Module Loading & Dependencies )
    모듈은 설정 블럭과 실행 블럭으로 구성되어 있고 부트스트랩 과정 동안 적용되도록 되어 있음.
    모듈의 가장 단순한 구성인 설정 블럭과 실행 블럭에 대해 알아보자.
    
    설정블럭( Configuration blocks )
        - 프로바이더 등록 및 설정 단계 동안 실행된다.
        - 오직 프로바이더들과 상수들만이 설정 블럭에 인젝트 될 수 있다.
    실행블럭( Run blocks )
        - 인젝터가 생성된 후에 실행되며, 어플리케이션을 시동할 때 사용됨.
        - 오직 인스턴스들과 상수들만 실행 블럭에 인젝트될 수 있다.
        - 이는 어플리케이션이 실행되는 동안 추가적으로 시스템이 구성되는 것을 막기 위함이다.
    
    설정 블럭과 실행블럭으로 구성된 모듈의 예를 살펴 보자.
 */
angular.module('myModule1', [])
    .config( function( injectables ) {  //  provider-injector
    //  설정 블럭
    //  오직 프로바이더들만 인젝트할 수 있다.
    })
    .run( function( injectables ){
    //  실행 블럭
    //  오직 인스턴스들만 인젝트할 수 있다.
    });

/**
    설정 블럭의 경우, 설정 블럭에서 처리해야 하는 것들을 대체할 수 있는 몇가지 편리한 메서드들이 존재한다.
    아래 예에서 원래 구성과 대체 가능한 메서드들이 사용되는 것을 비교하며 이해해보자. 
 */
/*
angular.module('myModule2', [])
    .config( function( $provider, $complieProvider, $filterProvider ) {
        $provider.value('a', 123);
        $provider.factory('a', function() { return 123; });
        $complieProvider.directive('directiveName', ...).$filterProvider.register('filterName', ...);
                                   
    });
*/
//  위의 설정 블럭을 각각의 대체 가능한 메소드로 표현 하자면,
/*
angular.module('myModule2', [])
    .value('a', 123)
    .factory('a', function() { return 123; })
    .directive('directivename', ...)
    .filter('filterName', ...);
*/
/**
    설정 블럭은 등록된 순서대로 적용된다.
    한가지 예외가 있다면 상수 선언에 대한 것으로, 모든 설정 블럭의 시작 지점에 위치한다.
    
    실행 블럭들
    실행 블럭들은 앵귤러 안의 요소들 중에서 메인 메소드에 가장 가까운 녀석들이다.
    실행 블럭은 어플리케이션을 구동시키기 위해 실행이 필요한 코드들이다.
    이 코드들은 모든 서비스가 설정되고 인젝터가 생성된 뒤에 실행된다.
    실행 블럭은 일반적으로 단위 테스트하기 어려운 코드를 포함하고 있고, 이러한 이유로
    반드시 독립적인 모듈로 선언되어야 단위 테스트의 압막에서 벗어날 수 있다.
    
    종속
    모듈은 종속을 통해 다른 모듈을 나열할 수 있다.
    모듈에 따라 선행 모듈이 로드되는 것이 요구되기도 한다.
    함편 선행 모듈의 설정 블럭은 요청 모듈의 설정 블럭보다 먼저 실행된다.
    물론 실행 블럭에 있어서도 이것은 마찬가지다.
    각 모듈은 한번만 로드될 수 있고(싱글톤이라고?), 이는 다른 여러 모듈들이 모두 해당 모듈을 요청해도 그렇다.
    
    비동기적 로딩
    모듈들은 $injector를 설정하는 한가지 방법이고, 모듈들은 VM에 스크립트가 로딩되는 중에 아무것도 하지 않는다.
    만약 스크립트의 로딩을 다루는 프로젝트가 존재한다면, 앵귤러가 사용될 수 있을지 모른다.
    왜냐하면 VM에 로드되기 까지 모듈들은 아무것도 하지 않기 때문에 스크립트 로더들은 이러한 속성으로 이점을 얻을 수 있고,
    로딩 프로세스를 병렬화 할 수 있다.
    
 */