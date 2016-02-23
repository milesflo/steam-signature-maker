app.controller("Landing", function($scope, $location, $http) {
	window.scope = $scope;
	$scope.header = {};
	$scope.header.title = "Hello";
	$scope.outputImage = new Png();
})