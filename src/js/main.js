var app = angular.module("myPage" , ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

});
