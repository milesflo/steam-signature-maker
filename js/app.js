var app = angular.module("SigGen", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "partials/homepage.html",
		controller: "Landing"
	}).when('/new', {
		templateUrl: "partials/output.html",
		controller: "Landing"
	}).otherwise({
		redirectTo: "/"
	})
})