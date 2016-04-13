var app = angular.module("myPage" , ['ngRoute']);

app.config(function($routeProvider, 	$locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeCtrl'
	})
	.when('/admin', {
	  templateUrl: 'pages/admin.html',
	  controller: 'adminCtrl'
	});
	$locationProvider.html5Mode(true).hashPrefix('!');
});
