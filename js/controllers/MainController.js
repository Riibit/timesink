app.controller('MainController', ['$scope', function($scope) {
$scope.newArr = function() {
$scope.tiless = [$scope.amount];
var size = $scope.amount;
while(size--) $scope.tiless[size] = $scope.color;
return $scope.tiless;
}
}]);