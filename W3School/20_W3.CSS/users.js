angular
.module('app', [])
.controller('ctrl', function($scope) {
  $scope.fName = '';
  $scope.lName = '';
  $scope.passw1 = '';
  $scope.passw2 = '';
  $scope.users = [
    {id: 1, fName: 'JeaHa',         lName: 'The Idiot',       passw1 : '1020', passw2 : '1020'},
    {id: 2, fName: 'JEJE',          lName: 'The Stupid',      passw1 : '1020', passw2 : '1020'},
    {id: 3, fName: 'IsoL',          lName: 'The Isolated',    passw1 : '1020', passw2 : '1020'},
    {id: 4, fName: 'Sorrowkissed',  lName: 'The Sorrow',      passw1 : '1020', passw2 : '1020'},
    {id: 5, fName: 'SorR_Ki',       lName: 'The Complicated', passw1 : '1020', passw2 : '1020'},
    {id: 6, fName: 'JH',            lName: 'The Conflict',    passw1 : '1020', passw2 : '1020'},
    {id: 7, fName: 'JEAHA',         lName: 'The Architect',   passw1 : '1020', passw2 : '1020'}
  ];
  $scope.edit = true;
  $scope.error = false;
  $scope.incomplete = false;
  $scope.hideform = true;
  $scope.editUser = function( id ) {
    $scope.hideform = false;
    if( id == 'new') {
      console.log('NEW');
      $scope.edit = true;
      $scope.incomplete = true;
      $scope.fName = '';
      $scope.lName = '';
    } else {
      $scope.edit = false;
      $scope.fName = $scope.users[id-1].fName;
      $scope.lName = $scope.users[id-1].lName;
    }
  };
  $scope.$watch( 'passw1', function() { $scope.test(); } );
  $scope.$watch( 'passw2', function() { $scope.test(); } );
  $scope.$watch( 'fName', function() { $scope.test(); } );
  $scope.$watch( 'lName', function() { $scope.test(); } );

  $scope.test = function() {
    console.log('test start');
    console.log($scope.passw1 + ', ' + $scope.passw2);
    if ( $scope.passw1 !== $scope.passw2 ) {
      $scope.error = true;
    } else {
      $scope.error = false;
    }
    console.log('err : ' + $scope.error);
    $scope.incomplete = false;
    console.log($scope.edit + ',' + !$scope.fName.length + ',' + !$scope.lName.length + ',' + !$scope.passw1.length + ',' + !$scope.passw2.length);
    if ($scope.edit && (!$scope.fName.length ||
    !$scope.lName.length ||
    !$scope.passw1.length || !$scope.passw2.length)) {
       $scope.incomplete = true;
    }
    console.log('incomplete : ' + $scope.incomplete);
    console.log('test end');
  };
});
/*
angular.module('app', []).controller('ctrl', function($scope) {
  $scope.fName = '';
  $scope.lName = '';
  $scope.passw1 = '';
  $scope.passw2 = '';
  $scope.users = [
    {id: 1, fName: 'JeaHa',         lName: 'The Idiot',       passw1 : '1020', passw2 : '1020'},
    {id: 2, fName: 'JEJE',          lName: 'The Stupid',      passw1 : '1020', passw2 : '1020'},
    {id: 3, fName: 'IsoL',          lName: 'The Isolated',    passw1 : '1020', passw2 : '1020'},
    {id: 4, fName: 'Sorrowkissed',  lName: 'The Sorrow',      passw1 : '1020', passw2 : '1020'},
    {id: 5, fName: 'SorR_Ki',       lName: 'The Complicated', passw1 : '1020', passw2 : '1020'},
    {id: 6, fName: 'JH',            lName: 'The Conflict',    passw1 : '1020', passw2 : '1020'},
    {id: 7, fName: 'JEAHA',         lName: 'The Architect',   passw1 : '1020', passw2 : '1020'}
  ];
  $scope.edit = true;
  $scope.error = false;
  $scope.incomplete = false;
  $scope.hideform = true;
  $scope.editUser = function(id) {
    $scope.hideform = false;
    if (id == 'new') {
      $scope.edit = true;
      $scope.incomplete = true;
      $scope.fName = '';
      $scope.lName = '';
    } else {
      $scope.edit = false;
      $scope.fName = $scope.users[id-1].fName;
      $scope.lName = $scope.users[id-1].lName;
    }
  };
  
  $scope.$watch('passw1',function() {$scope.test();});
  $scope.$watch('passw2',function() {$scope.test();});
  $scope.$watch('fName', function() {$scope.test();});
  $scope.$watch('lName', function() {$scope.test();});
  
  $scope.test = function() {
    if ($scope.passw1 !== $scope.passw2) {
      $scope.error = true;
    } else {
      $scope.error = false;
    }
    $scope.incomplete = false;
    console.log($scope.edit + ',' + !$scope.fName.length + ',' + !$scope.lName.length + ',' + !$scope.passw1.length + ',' + !$scope.passw2.length);
    if ($scope.edit && (!$scope.fName.length ||
    !$scope.lName.length ||
    !$scope.passw1.length || !$scope.passw2.length)) {
       $scope.incomplete = true;
    }
  };
  
  });
  */