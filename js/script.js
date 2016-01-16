console.log("Loaded...!");

var app = angular.module("portfolio", []);

app.controller("portfolioController", ["$scope", function($scope) {
    $scope.selected = "about";
    
    $scope.select = function(val) {
      $scope.selected = val;  
    };
}]);