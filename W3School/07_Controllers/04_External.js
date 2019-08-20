angular
.module('app', [])
.controller('ctrl', function($scope){
  $scope.nations=[
    {capital : "Oslo",   country : "Norway"},
    {capital : "Berlin", country : "Germany"},
    {capital : "Prague", country : "Chech"},
    {capital : "London", country : "UK"},
    {capital : "Stockholm", country : "Sweden"},
    {capital : "Helsinki", country : "Finland"},
    {capital : "Moscow", country : "Rusia"}
  ];
});